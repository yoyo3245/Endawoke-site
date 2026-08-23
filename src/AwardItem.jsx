import { useState } from 'react';

function getYoutubeId(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.replace(/^www\./, '') === 'youtu.be') {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.replace(/^www\./, '') === 'youtube.com') {
      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.pathname.split('/embed/')[1] || null;
      }
      if (parsed.pathname.startsWith('/shorts/')) {
        return parsed.pathname.split('/shorts/')[1] || null;
      }
      return parsed.searchParams.get('v');
    }
  } catch {
    return null;
  }
  return null;
}

// Parses a "t" query value into seconds. Accepts plain seconds ("3408"),
// YouTube's "1h2m3s" / "56m49s" / "49s" shorthand, and tolerates malformed
// trailing junk (e.g. a stray extra "?t=..." appended to the URL) by just
// reading the leading number.
function parseStartSeconds(raw) {
  if (!raw) return null;
  if (/^\d*(h|m|s)/i.test(raw)) {
    const match = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)/i);
    if (match && (match[1] || match[2] || match[3])) {
      const h = parseInt(match[1] || '0', 10);
      const m = parseInt(match[2] || '0', 10);
      const s = parseInt(match[3] || '0', 10);
      return h * 3600 + m * 60 + s;
    }
  }
  const digits = raw.match(/^(\d+)/);
  return digits ? parseInt(digits[1], 10) : null;
}

function getYoutubeStartSeconds(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const raw = parsed.searchParams.get('t') || parsed.searchParams.get('start');
    return parseStartSeconds(raw);
  } catch {
    return null;
  }
}

const AwardItem = ({ title, year, description, link, linkLabel, youtubeUrl, previewImage }) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeId(youtubeUrl);
  const startSeconds = getYoutubeStartSeconds(youtubeUrl);
  const thumbSrc = previewImage || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null);
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1${
    startSeconds ? `&start=${startSeconds}` : ''
  }`;

  return (
    <div className="award-card">
      {videoId && (
        <div className="award-video">
          {playing ? (
            <iframe
              src={embedSrc}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="award-video-thumb"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
            >
              <img src={thumbSrc} alt="" loading="lazy" />
              <span className="award-video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" />
                  <path d="M10 8.5v7l6-3.5z" fill="#fff" />
                </svg>
              </span>
            </button>
          )}
        </div>
      )}
      <div className="award-card-body">
        <div className="award-card-header">
          <h3>{title}</h3>
          {year && <span className="award-year">{year}</span>}
        </div>
        {description && <p>{description}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="award-link">
            {linkLabel || 'Learn more'}
          </a>
        )}
      </div>
    </div>
  );
};

export default AwardItem;
