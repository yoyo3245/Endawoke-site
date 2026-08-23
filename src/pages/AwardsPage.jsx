import AwardItem from '../AwardItem';
import awardsData from '../awardsData';

const AwardsPage = () => {
  return (
    <section className="page-section">
      <h2>Awards &amp; Honors</h2>
      {
        awardsData.length > 0 ? (
          <div className="awards-grid">
            {
              awardsData.map((item, index) => (
                <AwardItem
                  key={index}
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  link={item.link}
                  linkLabel={item.linkLabel}
                  youtubeUrl={item.youtubeUrl}
                  previewImage={item.previewImage}
                />
              ))
            }
          </div>
        ) : (
          /* Empty state: populate src/awardsData.js to fill this section in automatically. */
          <div className="empty-state">
            <p>Awards and honors will be listed here soon.</p>
          </div>
        )
      }
    </section>
  );
};

export default AwardsPage;
