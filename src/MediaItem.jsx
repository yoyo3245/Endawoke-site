import { useState } from 'react';

const MediaItem = ({ imageSrc, imageAlt, textContent, imageLink }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const image = imgFailed ? (
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
  );

  return (
    <div className="media-card">
      <div className="media-card-image">
        {imageLink ? (
          <a href={imageLink} target="_blank" rel="noopener noreferrer" className="media-image-link">
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      <div className="media-card-text">
        <p dangerouslySetInnerHTML={{ __html: textContent }}></p>
      </div>
    </div>
  );
};

export default MediaItem;
