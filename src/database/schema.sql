-- PawPath Database Schema
-- Optimized for PostgreSQL (Supabase)
-- Based on Clinical Rulebook v1.0

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Species Enum
CREATE TYPE species_type AS ENUM ('canine', 'feline');

-- Breed Table
CREATE TABLE breeds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species species_type NOT NULL,
    name TEXT NOT NULL,
    UNIQUE(species, name),
    ideal_weight_min_kg DECIMAL(5,2),
    ideal_weight_max_kg DECIMAL(5,2),
    senior_classification_age INTEGER, -- Age in years when breed is considered senior
    life_expectancy INTEGER, -- Average life expectancy in years
    alert_rules JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pet Table
CREATE TABLE pets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL, -- Reference to Auth.Users
    name TEXT NOT NULL,
    species species_type NOT NULL,
    breed_id UUID REFERENCES breeds(id), -- Primary breed (backward compatible)
    date_of_birth DATE NOT NULL,
    gender TEXT CHECK (gender IN ('male', 'female')),
    is_neutered BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pet Breeds Junction Table (Multi-Breed Support)
CREATE TABLE pet_breeds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
    breed_id UUID NOT NULL REFERENCES breeds(id),
    percentage DECIMAL(5,2), -- Optional: breed percentage (e.g., 50.00 for 50%)
    is_primary BOOLEAN DEFAULT false, -- Designates primary breed
    display_order INTEGER DEFAULT 0, -- Sort order for display
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(pet_id, breed_id)
);

-- Index for pet_breeds lookups
CREATE INDEX idx_pet_breeds_pet_id ON pet_breeds(pet_id);

-- Medical Profiles Table
CREATE TABLE medical_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID UNIQUE REFERENCES pets(id) ON DELETE CASCADE,
    
    -- Phase 1: Lifestyle (Redundant but useful for snapshots)
    is_neutered BOOLEAN,
    activity_level TEXT,
    bcs_score INTEGER,
    current_diet_type TEXT,
    prescription_diet_detail TEXT,

    -- Phase 2: Chronic Conditions
    chronic_conditions JSONB DEFAULT '[]', -- List of condition strings
    previous_surgeries JSONB DEFAULT '[]',
    previous_serious_illness_detail TEXT,

    -- Phase 3: Medications & Flags
    current_medications JSONB DEFAULT '[]', -- List of drug objects
    on_nsaids BOOLEAN DEFAULT false,
    on_corticosteroids BOOLEAN DEFAULT false,
    on_thyroid_medication BOOLEAN DEFAULT false,
    on_insulin BOOLEAN DEFAULT false,
    on_anti_seizure BOOLEAN DEFAULT false,
    on_heart_medication BOOLEAN DEFAULT false,
    on_behavioral_medication BOOLEAN DEFAULT false,
    supplements JSONB DEFAULT '[]',
    drug_allergies JSONB DEFAULT '[]',

    -- Phase 4 & 5: Summary flags
    on_heartworm_prevention BOOLEAN DEFAULT false,
    on_flea_tick_prevention BOOLEAN DEFAULT false,
    
    -- Raw intake snapshot
    raw_intake_data JSONB DEFAULT '{}',
    
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Health Logs (Weight, BCS, etc.)
CREATE TABLE health_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID REFERENCES pets(id) ON DELETE CASCADE,
    log_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    weight_kg DECIMAL(5,2) NOT NULL,
    bcs_score INTEGER CHECK (bcs_score BETWEEN 1 AND 9),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Vaccinations Table
CREATE TABLE vaccinations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID REFERENCES pets(id) ON DELETE CASCADE,
    vaccine_name TEXT NOT NULL,
    date_administered DATE NOT NULL,
    is_core BOOLEAN NOT NULL DEFAULT false,
    due_date DATE,
    administering_vet TEXT,
    facility TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Bloodwork Table
CREATE TABLE bloodwork (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID REFERENCES pets(id) ON DELETE CASCADE,
    collection_date DATE NOT NULL,
    analyte_name TEXT NOT NULL,
    value DECIMAL(10,4),
    unit TEXT,
    reference_range_min DECIMAL(10,4),
    reference_range_max DECIMAL(10,4),
    is_abnormal BOOLEAN DEFAULT false,
    veterinarian TEXT,
    facility TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Milestones Reference Table
CREATE TABLE milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species species_type NOT NULL,
    category TEXT NOT NULL, -- e.g., 'Developmental', 'Dental', 'Senior'
    milestone_name TEXT NOT NULL,
    min_age_months INTEGER,
    max_age_months INTEGER,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pet Milestones Table
CREATE TABLE pet_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID REFERENCES pets(id) ON DELETE CASCADE,
    milestone_id UUID REFERENCES milestones(id),
    achieved_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Generic Clinical Events (for visits, meds, symptoms)
CREATE TABLE clinical_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pet_id UUID REFERENCES pets(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL CHECK (event_type IN ('veterinary_visit', 'medication', 'symptom', 'screening')),
    event_date DATE NOT NULL,
    details JSONB DEFAULT '{}',
    veterinarian TEXT,
    facility TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Species-specific weight validation trigger
CREATE OR REPLACE FUNCTION validate_pet_weight()
RETURNS TRIGGER AS $$
DECLARE
    pet_species species_type;
BEGIN
    SELECT species INTO pet_species FROM pets WHERE id = NEW.pet_id;

    IF pet_species = 'canine' THEN
        IF NEW.weight_kg < 0.2 OR NEW.weight_kg > 150 THEN
            RAISE EXCEPTION 'Canine weight must be between 0.2kg and 150kg';
        END IF;
    ELSIF pet_species = 'feline' THEN
        IF NEW.weight_kg < 0.2 OR NEW.weight_kg > 25 THEN
            RAISE EXCEPTION 'Feline weight must be between 0.2kg and 25kg';
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_validate_pet_weight
BEFORE INSERT OR UPDATE ON health_logs
FOR EACH ROW EXECUTE FUNCTION validate_pet_weight();

-- Indices for performance
CREATE INDEX idx_health_logs_pet_date ON health_logs(pet_id, log_date DESC);
CREATE INDEX idx_vaccinations_pet_date ON vaccinations(pet_id, date_administered DESC);
CREATE INDEX idx_bloodwork_pet_date ON bloodwork(pet_id, collection_date DESC);
CREATE INDEX idx_clinical_events_pet_type ON clinical_events(pet_id, event_type);
CREATE INDEX idx_pets_owner ON pets(owner_id);
