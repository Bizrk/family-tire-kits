import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Family Tire Repair & Spare Guide',
  description: 'Emergency step-by-step tire plug and spare tire installation guide for family members.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-4 sm:py-6">
          {children}
        </main>
        <footer className="no-print border-t border-slate-900 bg-slate-950/80 py-4 text-center text-xs text-slate-500">
          <p className="flex items-center justify-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Emergency Roadside Family Safety</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
