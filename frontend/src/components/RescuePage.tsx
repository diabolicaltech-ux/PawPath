import React from 'react';
import { HeartHandshake } from 'lucide-react';

export default function RescuePage() {
  return <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
    <div className="mx-auto max-w-xl rounded-3xl border border-bd bg-white px-6 py-12 text-center shadow-sm sm:px-12">
      <HeartHandshake className="mx-auto mb-4 h-14 w-14 text-primary" aria-hidden="true" />
      <h1 className="text-3xl font-bold text-dark">Rescue a Dog</h1>
      <p className="mt-4 text-lg text-dark-muted">Local rescues and shelters near you are coming soon.</p>
      <p className="mt-2 text-sm text-dark-muted">Check back shortly — we’re working to make finding your next best friend easier.</p>
    </div>
  </main>;
}
