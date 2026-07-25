'use client';

import { useState, useEffect } from 'react';
import { FAMILY_MEMBERS } from '@/data/kits';
import QRCodeCard from '@/components/QRCodeCard';
import { QrCode, Printer, Globe, Info, RefreshCw, PlusCircle, Check } from 'lucide-react';

export default function CodesPage() {
  const [baseUrl, setBaseUrl] = useState<string>('https://family-tire-kits.vercel.app');
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      // Auto-detect current hostname/origin if available
      setBaseUrl(window.location.origin);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <QrCode className="w-4 h-4" />
              <span>QR Code Generator & Hub (/codes)</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">
              Family Kit <span className="text-amber-500">QR Codes</span>
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">
              Set your target website URL below to update all QR codes instantly. Print or download PNGs to attach to physical tire repair kits.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="no-print flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print All Cards</span>
            </button>
          </div>
        </div>

        {/* Base URL Input Bar */}
        <div className="no-print mt-6 pt-5 border-t border-slate-800/80">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>Target Domain / Base URL (Configurable)</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="url"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://family-tire-kits.vercel.app"
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm font-mono text-amber-300 outline-none transition"
              />
            </div>
            {isClient && (
              <button
                onClick={() => setBaseUrl(window.location.origin)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Use Current Domain</span>
              </button>
            )}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Tip: When you deploy to Vercel or attach your custom domain, enter it above to update all QR code destinations in real time!
          </p>
        </div>
      </div>

      {/* QR Code Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FAMILY_MEMBERS.map((member) => (
          <QRCodeCard key={member.slug} member={member} baseUrl={baseUrl} />
        ))}
      </div>

      {/* Instructions on how to add more people */}
      <div className="no-print bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <PlusCircle className="w-4 h-4" />
          <span>Adding More Family Members in the Future</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Because there is no heavy CMS, adding a new family member takes 10 seconds! Simply edit <code className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded font-mono text-[11px]">src/data/kits.ts</code> in GitHub and add an entry to the <code className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded font-mono text-[11px]">FAMILY_MEMBERS</code> array. Vercel will automatically build and deploy the new page and QR code instantly!
        </p>
      </div>
    </div>
  );
}
