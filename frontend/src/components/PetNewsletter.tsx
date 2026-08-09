import React from 'react';
import {
  Globe,
  Heart,
  Zap,
  Apple,
  Puzzle,
  BookOpen,
  Sun,
  Activity,
  AlertTriangle,
  MapPin,
  ChevronRight,
  Star,
  Snowflake,
  Cloud,
  Sprout,
  X,
  Info
} from 'lucide-react';
import type { BreedNewsletter } from '../types/breed_newsletter';

interface PetNewsletterProps {
  newsletter: BreedNewsletter;
}

/**
 * Get a flag emoji based on a region string.
 * Simple mapping for common regions — falls back to a globe icon.
 */
function getRegionFlag(region: string): string {
  const regionLower = region.toLowerCase();
  if (regionLower.includes('germany')) return '🇩🇪';
  if (regionLower.includes('france') || regionLower.includes('french')) return '🇫🇷';
  if (regionLower.includes('scotland') || regionLower.includes('united kingdom') || regionLower.includes('england') || regionLower.includes('britain')) return '🇬🇧';
  if (regionLower.includes('canada') || regionLower.includes('newfoundland')) return '🇨🇦';
  if (regionLower.includes('united states') || regionLower.includes('maine') || regionLower.includes('america')) return '🇺🇸';
  if (regionLower.includes('thailand') || regionLower.includes('siam') || regionLower.includes('persia') || regionLower.includes('iran')) return '🌍';
  if (regionLower.includes('china')) return '🇨🇳';
  if (regionLower.includes('japan')) return '🇯🇵';
  if (regionLower.includes('australia')) return '🇦🇺';
  if (regionLower.includes('russia')) return '🇷🇺';
  if (regionLower.includes('italy')) return '🇮🇹';
  if (regionLower.includes('spain')) return '🇪🇸';
  if (regionLower.includes('mexico')) return '🇲🇽';
  return '🌍';
}

/**
 * Get the current season based on date.
 */
function getCurrentSeason(): 'spring' | 'summer' | 'fall' | 'winter' {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

/**
 * Get season icon component.
 */
function getSeasonIcon(season: string) {
  switch (season) {
    case 'spring': return <Sprout className="w-4 h-4 text-accent-green" />;
    case 'summer': return <Sun className="w-4 h-4 text-orange-500" />;
    case 'fall': return <Cloud className="w-4 h-4 text-amber-500" />;
    case 'winter': return <Snowflake className="w-4 h-4 text-blue-400" />;
    default: return <Sun className="w-4 h-4" />;
  }
}

/**
 * Get season color.
 */
function getSeasonColor(season: string): string {
  switch (season) {
    case 'spring': return 'bg-green-50 border-green-100 text-green-700';
    case 'summer': return 'bg-orange-50 border-orange-100 text-orange-700';
    case 'fall': return 'bg-amber-50 border-amber-100 text-amber-700';
    case 'winter': return 'bg-blue-50 border-blue-100 text-blue-700';
    default: return 'bg-surface-alt border-bd text-dark';
  }
}

/**
 * Type helper for the treat type badge color.
 */
function getTreatTypeBadge(type: string): string {
  switch (type) {
    case 'vegetable': return 'bg-green-100 text-green-700';
    case 'fruit': return 'bg-red-100 text-red-700';
    case 'protein': return 'bg-orange-100 text-orange-700';
    case 'dental': return 'bg-blue-100 text-blue-700';
    case 'commercial': return 'bg-primary-light text-primary-dark';
    default: return 'bg-bd-light text-dark';
  }
}

const PetNewsletter: React.FC<PetNewsletterProps> = ({ newsletter }) => {
  const currentSeason = getCurrentSeason();
  const seasonData = newsletter.seasonal[currentSeason];

  return (
    <div className="space-y-5">

      {/* 1. Breed Origin & History */}
      <div className="bg-gradient-to-br from-primary-light to-blue-50 rounded-2xl p-5 border border-primary-light">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{getRegionFlag(newsletter.origin.region)}</span>
              <h3 className="font-bold text-dark text-sm">Breed Origin</h3>
            </div>
            <p className="text-xs text-dark-muted mb-1">
              {newsletter.origin.region} · {newsletter.origin.developed} · Originally bred for {newsletter.origin.originalPurpose.toLowerCase()}
            </p>
            <p className="text-sm text-dark leading-relaxed">{newsletter.origin.summary}</p>
            <div className="mt-2 flex items-start gap-2 p-2.5 bg-white/60 rounded-xl border border-primary-light/50">
              <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-dark-muted italic">{newsletter.origin.funFact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Activities */}
      <div className="bg-white rounded-2xl p-5 border border-bd">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-accent-green" />
          <h3 className="font-bold text-dark text-sm">Activities</h3>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Primary</p>
            <div className="flex flex-wrap gap-1.5">
              {newsletter.activities.primary.map((a, i) => (
                <span key={i} className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium border border-green-100">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Also Enjoy</p>
            <div className="flex flex-wrap gap-1.5">
              {newsletter.activities.secondary.map((a, i) => (
                <span key={i} className="px-2.5 py-1 bg-surface-alt text-dark-muted rounded-lg text-xs font-medium border border-bd">
                  {a}
                </span>
              ))}
            </div>
          </div>
          {newsletter.activities.avoid.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-accent-red uppercase tracking-wider mb-1.5">Avoid</p>
              <div className="space-y-1">
                {newsletter.activities.avoid.map((a, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-red-50 rounded-lg border border-red-100">
                    <X className="w-3 h-3 text-accent-red shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-red-700">{a.activity}</p>
                      <p className="text-[11px] text-accent-red">{a.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-xs text-dark-muted font-medium">
            Weekly target: {newsletter.activities.weeklyMinutesMin}–{newsletter.activities.weeklyMinutesMax} minutes
          </div>
        </div>
      </div>

      {/* 3. Seasonal Tips — Current Season Highlight */}
      <div className={`rounded-2xl p-5 border-bd ${getSeasonColor(currentSeason)}`}>
        <div className="flex items-center gap-2 mb-3">
          {getSeasonIcon(currentSeason)}
          <h3 className="font-bold text-sm capitalize">
            {currentSeason} Tips
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/60 font-medium capitalize">
            Current season
          </span>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-70">Activities</p>
            <div className="flex flex-wrap gap-1.5">
              {seasonData.activities.map((a, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/60 rounded-lg text-xs font-medium border border-current/20">
                  {a}
                </span>
              ))}
            </div>
          </div>
          {seasonData.precautions.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-70">Precautions</p>
              <ul className="space-y-1">
                {seasonData.precautions.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs">
                    <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5 opacity-60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 4. Treats & Toys — Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Treats */}
        <div className="bg-white rounded-2xl p-5 border border-bd">
          <div className="flex items-center gap-2 mb-3">
            <Apple className="w-5 h-5 text-accent-red" />
            <h3 className="font-bold text-dark text-sm">Treats</h3>
          </div>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
            {newsletter.treats.recommended.slice(0, 4).map((t, i) => (
              <div key={i} className="p-2.5 bg-surface-alt rounded-xl border border-bd">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-medium text-dark">{t.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${getTreatTypeBadge(t.type)}`}>
                    {t.type}
                  </span>
                </div>
                <p className="text-xs text-dark-muted">{t.description}</p>
                <p className="text-[11px] text-dark-muted mt-1 italic">{t.servingNote}</p>
              </div>
            ))}
            {newsletter.treats.avoid.length > 0 && (
              <div className="pt-2 border-t-bd border-bd">
                <p className="text-[11px] font-bold text-accent-red uppercase tracking-wider mb-1">Avoid</p>
                {newsletter.treats.avoid.map((a, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-accent-red mb-1">
                    <X className="w-3 h-3 shrink-0 mt-0.5" />
                    <span><strong>{a.name}</strong> — {a.reason}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-3 pt-2 border-t-bd border-bd">
            <p className="text-xs text-dark-muted">
              Max treat calories: <strong>{newsletter.treats.maxDailyTreatCalories} kcal/day</strong>
            </p>
          </div>
        </div>

        {/* Toys */}
        <div className="bg-white rounded-2xl p-5 border border-bd">
          <div className="flex items-center gap-2 mb-3">
            <Puzzle className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-dark text-sm">Toys</h3>
          </div>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
            {newsletter.toys.recommended.slice(0, 3).map((t, i) => (
              <div key={i} className="p-2.5 bg-surface-alt rounded-xl border border-bd">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium uppercase">
                    {t.category}
                  </span>
                </div>
                <p className="text-xs text-dark font-medium mt-1">{t.examples.slice(0, 2).join(', ')}</p>
                <p className="text-[11px] text-dark-muted mt-0.5">{t.description}</p>
              </div>
            ))}
          </div>
          {/* Suitability scores */}
          <div className="mt-3 pt-2 border-t-bd border-bd">
            <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Suitability</p>
            <div className="grid grid-cols-4 gap-1">
              {Object.entries(newsletter.toys.suitability).map(([key, val]) => (
                <div key={key} className="text-center">
                  <p className="text-[10px] text-dark-muted capitalize">{key}</p>
                  <div className="flex gap-0.5 justify-center mt-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-1.5 h-1.5 rounded-full ${
                          star <= val ? 'bg-primary' : 'bg-bd-light'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Training Tips */}
      <div className="bg-white rounded-2xl p-5 border border-bd">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-primary-dark" />
          <h3 className="font-bold text-dark text-sm">Training Tips</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">
            Trainability: {'★'.repeat(newsletter.training.trainability)}{'☆'.repeat(5 - newsletter.training.trainability)} <span className="font-medium">({newsletter.training.trainability}/5 — {['Very Easy', 'Easy', 'Moderate', 'Challenging', 'Very Challenging'][newsletter.training.trainability - 1] || 'N/A'})</span>
          </span>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Motivators</p>
            <div className="flex flex-wrap gap-1.5">
              {newsletter.training.motivators.map((m, i) => (
                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-dark leading-relaxed">{newsletter.training.approach}</p>
          {newsletter.training.challenges.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Common Challenges</p>
              <div className="space-y-1.5">
                {newsletter.training.challenges.map((c, i) => (
                  <div key={i} className="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-amber-800">{c.issue}</p>
                        <p className="text-[11px] text-amber-700 mt-0.5">{c.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {newsletter.training.criticalTrainingWindows.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-1.5">Critical Training Windows</p>
              <div className="space-y-1">
                {newsletter.training.criticalTrainingWindows.map((w, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="px-1.5 py-0.5 rounded bg-primary-light text-primary-dark font-medium whitespace-nowrap">
                      {w.age}
                    </span>
                    <span className="text-dark-muted">{w.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 6. Health Cautions */}
      {newsletter.healthCautions.length > 0 && (
        <div className="bg-primary-light rounded-2xl p-5 border border-primary-pale">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary-dark" />
            <h3 className="font-bold text-dark text-sm">Health Notes</h3>
          </div>
          <ul className="space-y-1.5">
            {newsletter.healthCautions.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-primary-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 7. Local Outbreaks/Warnings — Placeholder */}
      <div className="bg-surface-alt rounded-2xl p-5 border border-border border-dashed">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-5 h-5 text-dark-muted" />
          <h3 className="font-bold text-dark-muted text-sm">Local Health Alerts</h3>
        </div>
        <p className="text-xs text-dark-muted italic">
          Local health alerts coming soon. Check with your veterinarian for region-specific concerns.
        </p>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default PetNewsletter;