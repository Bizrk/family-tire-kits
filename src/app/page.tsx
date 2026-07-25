import Link from 'next/link';
import { FAMILY_MEMBERS } from '@/data/kits';
import { Wrench, QrCode, ArrowRight, ShieldCheck, Video, FileText, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl text-center sm:text-left relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Emergency Preparedness & Safe Driving</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Family Tire Repair & <span className="text-amber-500">Emergency Guide</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Quick roadside instructions and demonstration videos for using tire plug patch kits and changing to a spare tire. Scan the QR code on your kit to open your custom guide.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg transition"
            >
              <QrCode className="w-5 h-5" />
              <span>Generate / View QR Codes (/codes)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-base">Video Demonstrations</h3>
            <p className="text-xs text-slate-400 mt-1">
              Embedded YouTube Shorts showing plug kit repair and tire swapping step-by-step.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-base">Clear Instructions</h3>
            <p className="text-xs text-slate-400 mt-1">
              High-visibility roadside steps, safety warnings, sidewall puncture alerts, and tips.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-base">Printable QR Codes</h3>
            <p className="text-xs text-slate-400 mt-1">
              Custom QR code stickers/cards for each kit with dynamic base domain configuration.
            </p>
          </div>
        </div>
      </div>

      {/* Family Member Profiles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-500" />
            <span>Family Landing Pages</span>
          </h2>
          <span className="text-xs text-slate-400">
            {FAMILY_MEMBERS.length} Active Kits Registered
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAMILY_MEMBERS.map((member) => (
            <Link
              key={member.slug}
              href={`/${member.slug}`}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-5 transition shadow-md flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-slate-100 group-hover:text-amber-400 transition">
                  {member.name}'s Kit
                </h3>
                <p className="text-xs text-slate-400">
                  {member.vehicle || 'Standard Vehicle'}
                </p>
                <div className="text-[11px] font-mono text-amber-400/90 pt-1">
                  /{member.slug}
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
