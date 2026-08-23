import { useState } from 'react';

const MediaItem = ({ imageSrc, imageAlt, textContent }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="media-card">
      <div className="media-card-image">
        {imgFailed ? (
          <div className="media-image-fallback" role="img" aria-label={imageAlt}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8.5 4.5 11v2l4.5 2.5V8.5Z" />
              <path
                d="M15.5 9.2a4 4 0 0 1 0 5.6M18 7a7 7 0 0 1 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="media-image"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <div className="media-card-text">
        <p dangerouslySetInnerHTML={{ __html: textContent }}></p>
      </div>
    </div>
  );
};

export default MediaItem;
