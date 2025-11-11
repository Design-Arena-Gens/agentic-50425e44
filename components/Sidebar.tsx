'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { clsx } from 'clsx';
import {
  LayoutDashboard,
  Search,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Menu,
} from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Search', icon: Search },
  { label: 'Notifications', icon: Bell },
  { label: 'Settings', icon: Settings },
  { label: 'Help', icon: HelpCircle },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const width = isOpen ? 280 : 80;

  // Keep body padding-left for fixed sidebar
  useEffect(() => {
    document.body.style.setProperty('--sidebar-expanded', `${280}px`);
    document.body.style.setProperty('--sidebar-collapsed', `${80}px`);
  }, []);

  const containerVariants = useMemo(
    () => ({
      open: { width, transition: { type: 'spring', stiffness: 160, damping: 20 } },
      closed: { width, transition: { type: 'spring', stiffness: 200, damping: 24 } },
    }),
    [width]
  );

  return (
    <motion.aside
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={containerVariants}
      className="fixed left-0 top-0 h-full z-30"
      style={{ width }}
    >
      <div className="h-full glass rounded-r-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <button
            onClick={onToggle}
            className="inline-flex items-center justify-center rounded-lg hover:bg-white/10 p-2 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="text-sm font-medium tracking-wide text-slate-200"
              >
                Modern Sidebar
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 py-3">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={clsx(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition group',
                    'hover:bg-white/10 text-slate-300 hover:text-white'
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                        className="text-sm"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-3 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition">
            <LogOut className="w-5 h-5" />
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.18 }}
                  className="text-sm"
                >
                  Log out
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
