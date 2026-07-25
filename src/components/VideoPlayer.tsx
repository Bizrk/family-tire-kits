'use client';

import { useState } from 'react';
import { VideoLink } from '@/data/kits';
import { getYouTubeEmbedUrl } from '@/lib/youtube';
import { Play, ExternalLink, VideoOff, Eye } from 'lucide-react';

export default function VideoPlayer({ video }: { video: VideoLink }) {
  const [canEmbed, setCanEmbed] = useState<boolean>(video.embed);
  const { embedUrl, isShort } = getYouTubeEmbedUrl(video.url);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      {/* Video Header / Info */}
      <div className="p-4 bg-slate-800/80 border-b border-slate-700/60 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-amber-400 flex items-center gap-2">
            <Play className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
            {video.title}
          </h3>
          {video.description && (
            <p className="text-xs sm:text-sm text-slate-300 mt-1">{video.description}</p>
          )}
        </div>
        
        {/* Toggle Embed Option */}
        <button
          onClick={() => setCanEmbed(!canEmbed)}
          className="text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition shrink-0 flex items-center gap-1 border border-slate-600"
          title="Toggle between inline player and direct external link"
        >
          {canEmbed ? (
            <>
              <VideoOff className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Inline</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Direct Link</span>
            </>
          )}
        </button>
      </div>

      {/* Video Player or Fallback Card */}
      <div className="bg-black flex-1 flex items-center justify-center min-h-[220px]">
        {canEmbed ? (
          <div className={`w-full ${isShort ? 'max-w-[340px] mx-auto aspect-[9/16]' : 'aspect-video'}`}>
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="p-8 text-center flex flex-col items-center justify-center gap-4 bg-slate-950/80 w-full py-12">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Play className="w-7 h-7 fill-amber-400 ml-1" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">
                Direct External Video Link
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Tap below to open this demonstration directly in YouTube or your video browser.
              </p>
            </div>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Footer link to open in YouTube app */}
      <div className="p-3 bg-slate-900 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span>URL: <span className="font-mono text-slate-300">{video.url.slice(0, 35)}...</span></span>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
        >
          <span>Open in YouTube App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
