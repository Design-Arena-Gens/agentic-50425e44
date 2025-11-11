import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Animated Sidebar',
  description: 'Modern animated sidebar with smooth transitions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
