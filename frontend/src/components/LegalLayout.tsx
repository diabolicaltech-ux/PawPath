import React from 'react';

interface LegalLayoutProps {
  onBack: () => void;
  title: string;
  subtitle: string;
  updatedDate: string;
  children: React.ReactNode;
}

/**
 * Shared shell for legal pages (Terms and Conditions, Privacy Policy).
 * Uses PawPath's app-native theme tokens and provides an accessible
 * "Back to home" control. Only the surrounding copy is content-specific.
 */
const LegalLayout: React.FC<LegalLayoutProps> = ({ onBack, title, subtitle, updatedDate, children }) => {
  return (
    <main className="min-h-dvh bg-surface-alt px-6 py-12 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-bd pb-8">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to home"
            className="mb-8 inline-flex items-center text-sm font-medium text-primary-deeper underline underline-offset-4 hover:text-primary-dark"
          >
            &larr; Back to home
          </button>
          <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base text-dark-muted">{subtitle}</p>
          <p className="mt-1 text-sm text-dark-muted/80">Last Updated: {updatedDate}</p>
        </header>
        <div className="space-y-8 leading-7 text-dark">{children}</div>
      </article>
    </main>
  );
};

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <h2 className="text-xl font-bold text-dark">{children}</h2>
);

interface SubHeadingProps {
  children: React.ReactNode;
}

export const SubHeading: React.FC<SubHeadingProps> = ({ children }) => (
  <h3 className="font-semibold text-dark">{children}</h3>
);

export default LegalLayout;
