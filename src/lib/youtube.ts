export function getYouTubeEmbedUrl(url: string): { embedUrl: string; isShort: boolean; videoId: string | null } {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;
    let isShort = false;

    if (parsed.pathname.startsWith('/shorts/')) {
      videoId = parsed.pathname.split('/shorts/')[1]?.split('?')[0] || null;
      isShort = true;
    } else if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.slice(1).split('?')[0] || null;
    } else if (parsed.searchParams.has('v')) {
      videoId = parsed.searchParams.get('v');
    }

    if (videoId) {
      return {
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`,
        isShort,
        videoId,
      };
    }
  } catch (err) {
    console.error('Failed to parse YouTube URL:', url, err);
  }

  return { embedUrl: url, isShort: false, videoId: null };
}
