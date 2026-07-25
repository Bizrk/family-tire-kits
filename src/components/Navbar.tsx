'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, QrCode } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Hide toolbar completely on individual kit landing pages (e.g. /adam, /lesly, etc.)
  const isKitPage = pathname !== '/' && pathname !== '/codes';

  if (isKitPage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand / Title */}
        <Link href="/" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition font-bold text-lg">
          <div className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/40">
            <Wrench className="w-5 h-5 text-amber-500" />
          </div>
          <span className="tracking-tight text-white">
            Family <span className="text-amber-500">Tire Kits</span>
          </span>
        </Link>

        {/* Quick Nav Link */}
        <nav className="flex items-center gap-3">
          <Link
            href="/codes"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <QrCode className="w-4 h-4 text-amber-400" />
            <span>QR Codes (/codes)</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
