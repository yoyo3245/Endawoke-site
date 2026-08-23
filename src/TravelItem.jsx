import { useEffect, useState } from 'react';

const SLIDE_INTERVAL_MS = 3500;

const TravelItem = ({ title, year, description, link, linkLabel, images }) => {
  const gallery = images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % gallery.length);

  // Auto-advance the slideshow, pausing on hover or while the lightbox is open.
  useEffect(() => {
    if (gallery.length <= 1 || paused || lightboxOpen) return undefined;
    const id = setInterval(goNext, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gallery.length, paused, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, gallery.length]);

  return (
    <div className="award-card">
      {gallery.length > 0 && (
        <div
          className="travel-slideshow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="travel-slide-frame"
            role="button"
            tabIndex={0}
            onClick={() => setLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            aria-label={`View photo ${activeIndex + 1} of ${gallery.length}: ${title}`}
          >
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`travel-slide-image${i === activeIndex ? ' active' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="travel-slide-nav travel-slide-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous photo"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="travel-slide-nav travel-slide-next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next photo"
              >
                &#8250;
              </button>
              <div className="travel-slide-dots">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`travel-slide-dot${i === activeIndex ? ' active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(i);
                    }}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
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

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photos`}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>

          {gallery.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
          )}

          <img
            src={gallery[activeIndex]}
            alt={`${title} — photo ${activeIndex + 1} of ${gallery.length}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          {gallery.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          )}

          {gallery.length > 1 && (
            <div className="lightbox-counter">
              {activeIndex + 1} / {gallery.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TravelItem;
