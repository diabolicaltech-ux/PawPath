import React, { useState } from 'react';
import { 
  PawPrint, Heart, ShieldCheck, Scale, Calendar, Activity, 
  ChevronRight, Stethoscope, FileText, Apple, BookOpen, 
  Globe, Star, Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';
const SignIn = () => <a href="/api/auth/login" className="flex items-center justify-center gap-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"><span className="text-lg font-bold">G</span> Sign in with Google</a>;
const SignUp = () => <a href="/api/auth/login" className="flex items-center justify-center gap-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"><span className="text-lg font-bold">G</span> Sign in with Google</a>;
import { FEATURED_BREEDS } from '../data/featured_breeds';
const SUPPORT_EMAIL = 'contactpawpath@gmail.com';

interface PublicLandingPageProps {
  onSignInComplete?: () => void;
}

const PublicLandingPage: React.FC<PublicLandingPageProps> = ({ onSignInComplete }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [authMode, setAuthMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const localAuthSuccess = () => { setShowSignIn(false); setShowSignUp(false); onSignInComplete?.(); };

  // Curated featured breeds — lightweight subset, no full newsletter payload
  const featuredBreeds = FEATURED_BREEDS;

  return (
    <div className="min-h-screen bg-surface-alt">
      {/* ====== HERO SECTION ====== */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary pt-16 pb-24 px-6 overflow-hidden">
        {/* Decorative paw prints */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <PawPrint className="absolute top-20 left-10 w-24 h-24 text-white" />
          <PawPrint className="absolute bottom-10 right-20 w-16 h-16 text-white" />
          <PawPrint className="absolute top-1/2 right-1/4 w-10 h-10 text-white" />
          <PawPrint className="absolute bottom-20 left-1/4 w-8 h-8 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 ring-1 ring-white/20">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-white/80 text-sm font-medium">Breed-specific health tracking for every dog</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              Your Pet's Health,<br />
              <span className="text-amber-300">Personalized for Life</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              PawPath bridges the gap between vet visits with precise nutrition calculations, 
              breed-specific genetic risk alerts, and comprehensive medical history — 
              all tailored to your dog.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => { setShowSignUp(true); setAuthMode('sign-up'); }}
                className="bg-white text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" /> Get Started Free
              </button>
              <button
                onClick={() => { setShowSignIn(true); setAuthMode('sign-in'); }}
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all ring-1 ring-white/30 flex items-center gap-2"
              >
                Sign In <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Feature preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-white/20">
              <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mb-3">
                <Scale className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Precision Nutrition</h3>
              <p className="text-white/60 text-xs leading-relaxed">Daily calorie targets based on your pet's species, weight, age, activity, and body condition.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-white/20">
              <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Breed-Specific Alerts</h3>
              <p className="text-white/60 text-xs leading-relaxed">Genetic risk alerts and health monitoring for every recognized breed of dog.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-white/20">
              <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Medical History</h3>
              <p className="text-white/60 text-xs leading-relaxed">Comprehensive logs for vet visits, medications, weight trends, and milestone tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY PAWPATH SECTION ====== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Why PawPath?</h2>
            <p className="text-lg text-dark-muted max-w-2xl mx-auto">
              Most pet health apps are generic. PawPath is built on clinical data with breed-specific intelligence for every recognized breed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-6 h-6" />, color: 'bg-primary-light text-primary', title: '373 Dog Breeds', desc: 'Clinical profiles across AKC, FCI, UKC, and other recognized kennel clubs.' },
              { icon: <Activity className="w-6 h-6" />, color: 'bg-green-100 text-accent-green', title: 'Metabolic Engine', desc: 'Precise calorie calculations using RER, MER, and activity multipliers.' },
              { icon: <Calendar className="w-6 h-6" />, color: 'bg-blue-100 text-primary-dark', title: 'Life Stage Tracking', desc: 'Automated milestones from puppy through senior years.' },
              { icon: <Stethoscope className="w-6 h-6" />, color: 'bg-primary-light text-primary', title: 'Vet-Ready Records', desc: 'Complete medical history you can share with your veterinarian.' },
            ].map((feature, i) => (
              <div key={i} className="bg-surface-alt rounded-2xl p-6 border border-bd hover:border-primary hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-dark text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-dark-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURED BREEDS SECTION ====== */}
      <section className="py-20 px-6 bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Featured Breed Guides</h2>
            <p className="text-lg text-dark-muted max-w-2xl mx-auto">
              Explore detailed breed-specific content including origin, activities, training tips, and seasonal advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBreeds.map((breed) => (
              <div key={breed.breedName} className="bg-white rounded-2xl border border-bd overflow-hidden hover:shadow-lg hover:border-primary transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{breed.origin.region.includes('Canada') ? '🇨🇦' : breed.origin.region.includes('Scotland') || breed.origin.region.includes('United Kingdom') ? '🇬🇧' : breed.origin.region.includes('Germany') ? '🇩🇪' : '🌍'}</span>
                    <h3 className="font-bold text-dark text-lg">{breed.breedName}</h3>
                  </div>
                  <p className="text-xs text-dark-muted mb-2">
                    {breed.origin.region} · {breed.origin.originalPurpose}
                  </p>
                  <p className="text-sm text-dark-muted leading-relaxed line-clamp-3 mb-4">
                    {breed.origin.summary}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-dark-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3 h-3" /> {breed.activities.weeklyMinutesMin}–{breed.activities.weeklyMinutesMax} min/week
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" /> Trainability: {breed.training.trainability}/5
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {breed.activities.primary.slice(0, 2).map((a, i) => (
                      <span key={i} className="px-2 py-0.5 bg-green-50 text-green-700 rounded-lg text-[10px] font-medium border border-green-100">
                        {a}
                      </span>
                    ))}
                    {breed.healthCautions.slice(0, 1).map((h, i) => (
                      <span key={i} className="px-2 py-0.5 bg-primary-light text-primary-dark rounded-lg text-[10px] font-medium border border-primary-pale">
                        ⚕️ {h.split(' — ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <button
                    onClick={() => { setShowSignUp(true); setAuthMode('sign-up'); }}
                    className="w-full text-center text-sm text-primary font-medium hover:text-primary-dark transition-all flex items-center justify-center gap-1 group-hover:gap-2"
                  >
                    View Breed Guide <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HEALTH TIPS SECTION ====== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Pet Health Tips</h2>
            <p className="text-lg text-dark-muted max-w-2xl mx-auto">
              Evidence-based guidance for keeping your dog healthy at every life stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Apple className="w-5 h-5 text-accent-green" />, color: 'bg-green-50 border-green-100', title: 'Nutrition Matters', tip: 'Split daily calories into 2-3 meals. Treats should be no more than 10% of daily calories. Adjust portion sizes based on body condition, not the bag label.' },
              { icon: <Activity className="w-5 h-5 text-primary-dark" />, color: 'bg-blue-50 border-blue-100', title: 'Exercise by Breed', tip: 'A Beagle needs scent-based activities, a French Bulldog needs short, gentle walks. Always match exercise intensity to your breed\'s physical capabilities.' },
              { icon: <Calendar className="w-5 h-5 text-primary" />, color: 'bg-primary-light border-primary-light', title: 'Preventive Care Schedule', tip: 'Puppies need multiple vet visits for vaccinations. Adults need annual checkups. Seniors (7+) benefit from biannual visits with bloodwork.' },
              { icon: <Heart className="w-5 h-5 text-primary-dark" />, color: 'bg-primary-light border-primary-pale', title: 'Watch for Changes', tip: 'Unexplained weight changes, increased thirst, lethargy, or changes in appetite warrant a vet visit. Early detection is key for managing chronic conditions.' },
            ].map((tip, i) => (
              <div key={i} className={`rounded-2xl p-6 border-bd ${tip.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  {tip.icon}
                  <h3 className="font-bold text-dark text-base">{tip.title}</h3>
                </div>
                <p className="text-sm text-dark-muted leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Give Your Pet Personalized Care?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Join PawPath and start tracking your pet's health with breed-specific insights, nutrition planning, and medical history — all in one place.
          </p>
          <button
            onClick={() => { setShowSignUp(true); setAuthMode('sign-up'); }}
            className="bg-white text-primary-dark px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all shadow-xl inline-flex items-center gap-2"
          >
            <PawPrint className="w-5 h-5" /> Create Your Free Account
          </button>
          <p className="text-white/50 text-sm mt-4">Free forever · No credit card required</p>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-dark text-dark-muted py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-white">
              <PawPrint className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">PawPath</span>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>Lifelong health tracking for dogs.</p>
              <p className="mt-1">Built with clinical data and breed-specific intelligence.</p>
            </div>
          </div>
          <div className="border-t-bd border-dark mt-8 pt-8 text-center text-xs">
            © {new Date().getFullYear()} PawPath. All rights reserved.
            <p className="mt-2">Guides: <a href="/guides/dog-vaccination-schedule" className="text-primary hover:text-primary-dark underline underline-offset-2">Dog vaccination schedule</a> · <a href="/guides/puppy-weight-chart" className="text-primary hover:text-primary-dark underline underline-offset-2">Puppy weight chart</a></p>
            <p className="mt-2">Questions? <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-2">Email our support team</a></p>
          </div>
        </div>
      </footer>

      {/* ====== AUTH MODALS ====== */}
      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowSignIn(false)}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                <PawPrint className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-dark">Welcome Back</h2>
              <p className="text-sm text-dark-muted">Sign in to PawPath</p>
            </div>
            <SignIn />
            <div className="mt-4 text-center border-t-bd border-bd pt-4">
              <button
                onClick={() => { setShowSignIn(false); setShowSignUp(true); setAuthMode('sign-up'); }}
                className="text-primary text-sm font-medium hover:text-primary-dark transition-colors"
              >
                Don't have an account? <span className="underline underline-offset-2">Create Your Free Account</span>
              </button>
            </div>
            <button
              onClick={() => setShowSignIn(false)}
              className="w-full mt-3 text-center text-xs text-dark-muted hover:text-dark-muted transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowSignUp(false)}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-7 h-7 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-dark">Create Your Account</h2>
              <p className="text-sm text-dark-muted">Start tracking your pet's health</p>
            </div>
            <SignUp />
            <div className="mt-4 text-center border-t-bd border-bd pt-4">
              <button
                onClick={() => { setShowSignUp(false); setShowSignIn(true); setAuthMode('sign-in'); }}
                className="text-primary text-sm font-medium hover:text-primary-dark transition-colors"
              >
                Already have an account? <span className="underline underline-offset-2">Log In</span>
              </button>
            </div>
            <button
              onClick={() => setShowSignUp(false)}
              className="w-full mt-3 text-center text-xs text-dark-muted hover:text-dark-muted transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicLandingPage;