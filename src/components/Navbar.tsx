'use client';

import Link from 'next/link';
import { Wrench, QrCode, ShieldAlert, Users } from 'lucide-react';
import { FAMILY_MEMBERS } from '@/data/kits';

export default function Navbar({ currentSlug }: { currentSlug?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Title */}
        <Link href="/" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition font-bold text-lg">
          <div className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/40">
            <Wrench className="w-5 h-5 text-amber-500" />
          </div>
          <span className="tracking-tight text-white">
            Family <span className="text-amber-500">Tire Kits</span>
          </span>
        </Link>

        {/* Quick Nav Links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/codes"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <QrCode className="w-4 h-4 text-amber-400" />
            <span>QR Codes (/codes)</span>
          </Link>

          {/* Dropdown for family members */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold transition shadow-sm">
              <Users className="w-4 h-4" />
              <span>Select Person</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 hidden group-hover:block z-50">
              <div className="px-3 py-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase border-b border-slate-800 mb-1">
                Family Landing Pages
              </div>
              {FAMILY_MEMBERS.map((member) => (
                <Link
                  key={member.slug}
                  href={`/${member.slug}`}
                  className={`block px-4 py-2 text-sm hover:bg-slate-800 transition ${
                    currentSlug === member.slug ? 'text-amber-400 font-bold bg-slate-800/60' : 'text-slate-200'
                  }`}
                >
                  {member.name}'s Kit
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
