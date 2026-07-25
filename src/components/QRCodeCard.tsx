'use client';

import { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FamilyMemberKit } from '@/data/kits';
import { Download, Copy, Check, ExternalLink, Wrench } from 'lucide-react';
import Link from 'next/link';

interface QRCodeCardProps {
  member: FamilyMemberKit;
  baseUrl: string;
}

export default function QRCodeCard({ member, baseUrl }: QRCodeCardProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Normalize base URL without trailing slash
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  const targetUrl = `${cleanBaseUrl}/${member.slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector('canvas');
    if (!canvas) return;

    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `tire-kit-qr-${member.slug}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="print-card bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-amber-500/50 transition">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-100">{member.name}'s Kit</h3>
              <p className="text-xs text-slate-400 font-mono">/{member.slug}</p>
            </div>
          </div>
          <Link
            href={`/${member.slug}`}
            className="no-print p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition"
            title="Preview Landing Page"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* QR Canvas Display */}
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl border border-slate-700 my-2 shadow-inner">
          <div ref={canvasRef}>
            <QRCodeCanvas
              value={targetUrl}
              size={180}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-[11px] font-bold text-slate-800 font-mono mt-2 text-center max-w-[200px] truncate">
            {targetUrl}
          </p>
        </div>

        {member.vehicle && (
          <p className="text-xs text-slate-400 text-center mt-2 italic">
            Assigned: {member.vehicle}
          </p>
        )}
      </div>

      {/* Action Buttons (Hidden on Print) */}
      <div className="no-print grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy URL</span>
            </>
          )}
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Save PNG</span>
        </button>
      </div>
    </div>
  );
}
