import { getFamilyMember, FAMILY_MEMBERS, DEFAULT_INSTRUCTION_STEPS } from '@/data/kits';
import VideoPlayer from '@/components/VideoPlayer';
import InstructionSteps from '@/components/InstructionSteps';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Wrench, ShieldAlert, ArrowLeft, Info, PhoneCall, AlertTriangle } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return FAMILY_MEMBERS.map((member) => ({
    slug: member.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const member = getFamilyMember(params.slug);
  if (!member) return { title: 'Tire Kit Not Found' };
  return {
    title: `${member.name}'s Tire Repair Guide`,
    description: `Roadside tire repair and spare installation guide for ${member.name}.`,
  };
}

export default function MemberKitPage({ params }: PageProps) {
  const member = getFamilyMember(params.slug);

  if (!member) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Kit Not Found</h1>
          <p className="text-slate-400 text-sm mt-2">
            No family tire kit registered for slug <span className="font-mono text-amber-400">"{params.slug}"</span>.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-left space-y-2">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Available Kits:</p>
          <div className="flex flex-wrap gap-2">
            {FAMILY_MEMBERS.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                {m.name} (/{m.slug})
              </Link>
            ))}
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    );
  }

  const steps = member.customSteps || DEFAULT_INSTRUCTION_STEPS;

  return (
    <div className="space-y-8">
      {/* Top Header Card */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>Personalized Tire Kit Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {member.name}'s <span className="text-amber-500">Tire Kit</span>
            </h1>
            {member.vehicle && (
              <p className="text-slate-300 text-sm font-medium">
                Assigned Vehicle: <span className="text-amber-400 font-semibold">{member.vehicle}</span>
              </p>
            )}
          </div>

          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold self-start sm:self-center transition"
          >
            <span>View QR Code</span>
          </Link>
        </div>

        {/* Custom Storage Note */}
        {member.customNote && (
          <div className="mt-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3 text-sm text-slate-300">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-400 font-semibold">Kit Location & Note: </strong>
              <span>{member.customNote}</span>
            </div>
          </div>
        )}
      </section>

      {/* Video Demonstration Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-500" />
            <span>Video Demonstrations</span>
          </h2>
          <span className="text-xs text-slate-400">
            {member.videos.length} Instructional Videos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {member.videos.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Rich Text / Instruction Steps */}
      <section className="pt-2">
        <InstructionSteps steps={steps} />
      </section>

      {/* Emergency Assistance Callout */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
          <PhoneCall className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-100">Unsure or Unsafety Conditions?</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          If you are on a busy highway shoulder, have a sidewall blowout, or feel unsafe, call Roadside Assistance or Emergency Services right away.
        </p>
      </section>
    </div>
  );
}
