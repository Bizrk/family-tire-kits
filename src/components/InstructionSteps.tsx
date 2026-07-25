'use client';

import { InstructionStep } from '@/data/kits';
import { AlertTriangle, Lightbulb, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function InstructionSteps({ steps }: { steps: InstructionStep[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-amber-500" />
          <span>Step-by-Step Instructions</span>
        </h2>
        <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 font-medium">
          {steps.length} Key Steps
        </span>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-slate-700 transition"
          >
            {/* Header / Number */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                {step.stepNumber}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-100">{step.title}</h3>
                <p className="text-sm text-amber-400 font-medium mt-0.5">{step.summary}</p>
              </div>
            </div>

            {/* Details Bullet points */}
            <ul className="mt-4 space-y-2.5 pl-1 sm:pl-13 text-sm text-slate-300">
              {step.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Warning Callout if present */}
            {step.warning && (
              <div className="mt-4 p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-rose-300 uppercase tracking-wide text-[11px] mb-0.5">
                    Safety Warning
                  </strong>
                  <span>{step.warning}</span>
                </div>
              </div>
            )}

            {/* Tip Callout if present */}
            {step.tip && (
              <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200 text-xs sm:text-sm flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-300">Pro Tip: </strong>
                  <span>{step.tip}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
