'use client';

import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarWidth = isOpen ? 'var(--sidebar-expanded)' : 'var(--sidebar-collapsed)';

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen((v) => !v)} />
      <main
        className="flex-1 h-full overflow-y-auto"
        style={{ paddingLeft: sidebarWidth }}
      >
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="glass px-3 py-2 rounded-lg text-sm hover:shadow-glow transition-shadow"
            >
              {isOpen ? 'Collapse' : 'Expand'} Sidebar
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-xl p-5 hover:shadow-glow transition-shadow">
                <div className="text-sm text-slate-400">Card {i + 1}</div>
                <div className="mt-2 text-lg font-medium">Beautiful animated sidebar layout</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
