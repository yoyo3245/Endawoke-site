import amberStations from '../amberData';

const AMBER_LOGO = '/Travel/AMBER/AMBERLOG.jpg';
const EEJS_LOGO = '/Travel/AMBER/animated_eej.gif';

const AmberPage = () => {
  return (
    <section className="page-section">
      <h2>AMBER</h2>

      <div className="amber-intro">
        <div className="amber-top-box">
          <div className="amber-top-cell amber-top-logo">
            <a href="https://sites.bc.edu/magnetometers/amber-network/" target="_blank" rel="noopener noreferrer">
              <img src={AMBER_LOGO} alt="AMBER magnetometer array logo" />
            </a>
          </div>
          <div className="amber-top-cell amber-top-text">
            <p>
              <em><strong>AMBER</strong> is also the name of a small town located in the northwestern part of Ethiopia</em>
            </p>
          </div>
          <div className="amber-top-cell amber-top-logo">
            <a href="https://earthsky.org/space/space-weather-threatens-equatorial-regions-too/" target="_blank" rel="noopener noreferrer">
              <img src={EEJS_LOGO} alt="AMBER magnetometer array logo" />
            </a>
          </div>
        </div>
        <p className="amber-quick-links">
          <a href="https://sites.bc.edu/magnetometers/" target="_blank" rel="noopener noreferrer">Official Page:</a>
          {' '}
          <a href="https://sites.bc.edu/magnetometers/downloads/" target="_blank" rel="noopener noreferrer">Data:</a>
          {'  '}
          <a href="https://www.spaceweather.com/" target="_blank" rel="noopener noreferrer">Space weather:</a>
        </p>
        <p className="amber-inquiries"> For any inquiries about AMBER project,<a href="mailto:endawokekassie@gmail.com"> contact us</a></p>
      </div>

      <h3 className="amber-title">
        <a href="/Publications/AMBER_Paper.pdf" target="_blank" rel="noopener noreferrer">
          AMBER (African Meridian B-field Education and Research)
        </a>
      </h3>
      <p className="amber-subtitle"><a href="https://science.nasa.gov/heliophysics/"><u><b> NASA IHY </b></u></a>, <a href="https://www.afrl.af.mil/AFOSR/"><u><b> AFOSR</b></u></a>, and <a href="https://www.nsf.gov/funding/opportunities/aeronomy/"><u><b> NSF </b></u></a> NSF Funded Project</p>
      <p className="amber-pis">
        PIs: <b>Endawoke Yizengaw (PI)</b> and Mark Moldwin (Co-I) from Aerospace Corporation and University of Michigan, respectively </p>

      <div className="amber-body">
        <p>
          Africa was quickly recognized as a promising region offering the best opportunity for new science on 
          ionospheric processes. A complete global understanding of equatorial ionospheric motions requires the 
          deployment of ground-based magnetometers on the continent. A key focus of the IHY is the deployment of 
          networks of small instruments and the development of research infrastructure in developing nations through 
          the United Nations Basic Space Science (UNBSS) Small Instrument Array. Over 30 new instruments were installed 
          under the IHY programme, among them the NASA-funded AMBER (African Meridian B-Field Education and Research) 
          magnetometer array in Africa. The initial AMBER array comprised four magnetometers, at Adigrat (Ethiopia), 
          Algiers (Algeria), Yaoundé (Cameroon), and Tsumeb (Namibia). During the final phase of the IHY programme, 
          a fifth instrument — the AMBER–SAMBA magnetometer — was deployed at Abuja, Nigeria, in collaboration with the 
          SAMBA project. Since the start of the ISWI programme, the array has expanded further with the support from AFOSR: 
          as of August 2026, <a href="https://sites.bc.edu/magnetometers/amber-network/"><u><b> fifteen magnetometers are deployed </b></u></a> at the locations listed in Table 1, and three more are scheduled for deployment.
        </p>

        <p>
          In addition to filling the largest land-based gap in global magnetometer coverage, the AMBER array 
          will address two fundamental areas of space physics:
        </p>

        <p>
          (1) the processes governing the electrodynamics of the equatorial ionosphere as a function of latitude 
          (or L-shell), local time, longitude, magnetic activity, and season, and
        </p>
        <p>
          (2) ULF pulsation strength and its relationship to equatorial electrojet strength at low and middle latitudes.
        </p>

        <p>
          In coordination with GPS receivers across Africa, the AMBER array offers an excellent opportunity to investigate 
          the electrodynamics governing equatorial ionospheric motions. By pairing AMBER stations located on and off the 
          magnetic equator, the strength of the equatorial electrojet (EEJ) — and hence the vertical E×B drift — can be 
          estimated routinely using the well-established magnetometer-pair technique. While the magnetometers track 
          F-region plasma drift, the GPS stations monitor plasma structure at low and middle latitudes in the same sectors. 
          Together, these observations provide a valuable means of characterising the distinctive equatorial ionospheric 
          structures over Africa that satellite measurements have frequently detected.
        </p>

        <p>
          In addition to new scientific discoveries and advancing the space science research into Africa by
          establishing scientific collaborations between scientists in the developing and developed nations,
          the AMBER project also contributes to the effort in developing the basic science of heliophysics
          through cross disciplinary studies of universal process. This includes the creation of sustainable
          research/training infrastructure within the African universities. This will then create
          opportunities for undergraduate students to enhance their inspiration to space science and perform
          research activities in the future within their own countries. Data from AMBER magnetometer array
          will be directly accessible to space weather forecasters and the space science community at large.
        </p>
        
        <p>
          While polar-cap to equatorial coverage already exists along the American meridian, European coverage 
          effectively ends with SEGMA in Italy. By closing this gap — extending the IMAGE–SAMNET–SEGMA chain to 
          low and dip-equatorial latitudes and linking it to the South African INTERMAGNET stations — the AMBER 
          network provides an opportunity to track ULF wave penetration along the European–African meridian.
        </p>
        <p>
          Beyond enabling new scientific discoveries and advancing space science in Africa through collaborations 
          between researchers in developing and developed nations, the AMBER project contributes to the broader 
          development of heliophysics through cross-disciplinary studies of universal processes. It also supports 
          the creation of sustainable research and training infrastructure at African universities, giving undergraduate 
          students the opportunity to engage with space science and to pursue research careers within their own countries. 
          Data from the AMBER array are freely available to space weather forecasters and to the wider space science community.
        </p>
      </div>

      <h3 className="amber-table-title">
        Table 1: The geographic and geomagnetic locations of AMBER magnetometer stations
      </h3>

      <div className="amber-table-wrapper">
        <table className="amber-table">
          <thead>
            <tr>
              <th>Name of Stations</th>
              <th>Code</th>
              <th>Geog. Lat</th>
              <th>Geog. Long</th>
              <th>Mag. Lat</th>
              <th>Mag. Long</th>
              <th>L-Shell</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {amberStations.map((s) => (
              <tr key={s.code}>
                <td className="amber-station-cell">
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.flag && <img src={s.flag} alt="" className="amber-flag" />}
                    {s.country ? `${s.city}, ${s.country}` : s.city}
                  </a>
                </td>
                <td>{s.code}</td>
                <td>{s.geogLat}</td>
                <td>{s.geogLong}</td>
                <td>{s.magLat}</td>
                <td>{s.magLong}</td>
                <td>{s.lShell}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AmberPage;
