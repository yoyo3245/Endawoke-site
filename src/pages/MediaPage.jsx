import MediaItem from '../MediaItem';
import mediaData from '../mediaData';

const MediaPage = () => {
  return (
    <section className="page-section">
      <h2>Media</h2>
      <div className="media-grid">
        {
          mediaData.map((item, index) => (
            <MediaItem
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              textContent={item.textContent}
            />
          ))
        }
      </div>
    </section>
  );
};

export default MediaPage;
