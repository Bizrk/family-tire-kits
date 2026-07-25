import { getFamilyMember, FAMILY_MEMBERS, DEFAULT_INSTRUCTION_STEPS } from '@/data/kits';
import VideoPlayer from '@/components/VideoPlayer';
import InstructionSteps from '@/components/InstructionSteps';
import { Info, PhoneCall, AlertTriangle } from 'lucide-react';

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
    title: `${member.name}'s Tire Kit`,
    description: `Emergency tire repair and spare installation guide for ${member.name}.`,
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
            No family tire kit registered for <span className="font-mono text-amber-400">"{params.slug}"</span>.
          </p>
        </div>
      </div>
    );
  }

  const steps = member.customSteps || DEFAULT_INSTRUCTION_STEPS;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Concise Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {member.name}'s <span className="text-amber-500">Tire Kit</span>
        </h1>
        {member.vehicle && (
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Vehicle: <span className="text-slate-200">{member.vehicle}</span>
          </p>
        )}
        {member.customNote && (
          <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{member.customNote}</span>
          </div>
        )}
      </section>

      {/* Video Demonstration Section */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {member.videos.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Rich Text / Instruction Steps */}
      <section className="pt-1">
        <InstructionSteps steps={steps} />
      </section>

      {/* Emergency Assistance Callout */}
      <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm">
          <PhoneCall className="w-4 h-4" />
          <span>Roadside Emergency Safety</span>
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          If you are on a busy highway shoulder, have a sidewall blowout, or feel unsafe, call Roadside Assistance or Emergency Services right away.
        </p>
      </section>
    </div>
  );
}
