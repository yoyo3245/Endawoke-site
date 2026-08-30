import TravelItem from '../TravelItem';
import travelData from '../travelData';

const TravelPage = () => {
  return (
    <section className="page-section">
      <h2>Travel</h2><i>Checkout <b> <a href="https://endawokeonscientificmission.blogspot.com"><u><b><i>my travel blog </i></b></u></a> </b></i>

      {
        travelData.length > 0 ? (
          <div className="travel-grid">
            {
              travelData.map((item, index) => (
                <TravelItem
                  key={index}
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  link={item.link}
                  linkLabel={item.linkLabel}
                  images={item.images}
                />
              ))
            }
          </div>
        ) : (
          /* Empty state: populate src/travelData.js to fill this section in automatically. */
          <div className="empty-state">
            <p>Travel and fieldwork will be listed here soon.</p>
          </div>
        )
      }
    </section>
  );
};

export default TravelPage;
