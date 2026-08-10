import React from 'react';
import { PawPrint, Home, BookOpen, HeartHandshake, Settings } from 'lucide-react';
import { signOut, type UserProfile } from '../lib/auth';
const UserButton = () => null;

interface NavBarProps {
  currentView: 'home' | 'dashboard' | 'onboarding' | 'breed-library' | 'rescue' | 'account';
  onNavigate: (view: 'home' | 'onboarding' | 'breed-library' | 'rescue' | 'account') => void;
  petName?: string;
  user?: UserProfile | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, onNavigate, petName, user }) => {
  return (
    <nav className="bg-white border border-bd shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand + Nav Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors"
            >
              <PawPrint className="w-6 h-6" />
              <span className="hidden sm:inline">PawPath</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={() => onNavigate('home')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentView === 'home'
                    ? 'bg-primary-light text-primary-dark'
                    : 'text-dark-muted hover:text-dark hover:bg-surface-alt'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => onNavigate('rescue')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentView === 'rescue' ? 'bg-primary-light text-primary-dark' : 'text-dark-muted hover:text-dark hover:bg-surface-alt'
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Rescue a Dog</span>
              </button>
              <button
                onClick={() => onNavigate('account')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentView === 'account' ? 'bg-primary-light text-primary-dark' : 'text-dark-muted hover:text-dark hover:bg-surface-alt'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Account</span>
              </button>
              <button
                onClick={() => onNavigate('breed-library')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentView === 'breed-library'
                    ? 'bg-primary-light text-primary-dark'
                    : 'text-dark-muted hover:text-dark hover:bg-surface-alt'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Breed Library</span>
              </button>

            </div>
          </div>

          {/* Right: User Menu */}
          <div className="flex items-center gap-3">
            {user && <span className="flex items-center gap-2 text-sm text-dark-muted max-w-[180px]" title={user.email}>
              {user.picture ? <img src={user.picture} alt="" className="w-8 h-8 rounded-full" /> : <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center font-bold text-primary-dark">{user.name.charAt(0)}</span>}
              <span className="hidden sm:block truncate">{user.name.split(' ')[0]}</span>
            </span>}
            {petName && !user && <span className="text-sm text-dark-muted hidden sm:block">{petName}</span>}
            <div className="bg-bd-light rounded-xl p-1.5 hover:bg-bd-light transition-all">
              {user ? <button type="button" onClick={signOut} className="rounded-lg px-2 py-1 text-xs text-dark-muted hover:bg-surface-alt hover:text-dark">Sign out</button> : <UserButton />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;