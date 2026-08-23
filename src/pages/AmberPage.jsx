import amberStations from '../amberData';

const AMBER_LOGO = '/Travel/AMBER/AMBERLOG.jpg';

const AmberPage = () => {
  return (
    <section className="page-section">
      <h2>AMBER</h2>

      <div className="amber-intro">
        <div className="amber-top-box">
          <div className="amber-top-cell amber-top-logo">
            <a href="http://magnetometers.bc.edu/index.php/amber2" target="_blank" rel="noopener noreferrer">
              <img src={AMBER_LOGO} alt="AMBER magnetometer array logo" />
            </a>
          </div>
          <div className="amber-top-cell amber-top-text">
            <p>
              <em><strong>AMBER</strong> is also the name of a small town located in the northwestern part of Ethiopia</em>
            </p>
          </div>
          <div className="amber-top-cell amber-top-logo">
            <img src={AMBER_LOGO} alt="AMBER magnetometer array logo" />
          </div>
        </div>
        <p className="amber-quick-links">
          <a href="http://magnetometers.bc.edu/index.php/amber2" target="_blank" rel="noopener noreferrer">Official Page:</a>
          {' '}
          <a href="http://magnetometers.bc.edu/index.php/downloads" target="_blank" rel="noopener noreferrer">Data:</a>
          {'  '}
          <a href="/Travel/Collaborators.html" target="_blank" rel="noopener noreferrer">Collaborators:</a>
          {'  '}
          <a href="/Travel/spaceweather.html" target="_blank" rel="noopener noreferrer">Space weather:</a>
        </p>
      </div>

      <h3 className="amber-title">
        <a href="/Publications/AMBER_Paper.pdf" target="_blank" rel="noopener noreferrer">
          AMBER (African Meridian B-field Education and Research)
        </a>
      </h3>
      <p className="amber-subtitle">NASA IHY Funded Project</p>
      <p className="amber-pis">
        PIs: Endawoke Yizengaw (PI) and Mark Moldwin (Co-I) from Boston College and University of Michigan, respectively
      </p>

      <div className="amber-body">
        <p>
          It was quickly recognized that the observation of ionospheric processes over Africa represented the
          best opportunity for new science. In order to have a complete global understanding of equatorial
          ionosphere motions, deployment of ground-base magnetometers in Africa is essential. One focus of IHY
          is the deployment of networks of small instruments, including the development of research
          infrastructure in developing nations through the United Nations Basic Space Science (UNBSS) Small
          Instrument Array. Today over 30 new instrument installations are either installed or in process, and
          the NASA funded AMBER (African Meridian B-Field Education and Research) magnetometer array is one of
          those deployed in Africa. The AMBER magnetometer array is comprised of four magnetometers. All of
          them are already stationed in Adigrat in Ethiopia, Algiers in Algeria, Yaounde in Cameroon, and
          Tsumeb in Namibia. Recently, in colaboration with SAMBA project, the fifth magnetometer, known as
          AMBER-SAMBA magnetometer, has been deployed in Abuja, Nigeria. The Figure shows the location of AMBER
          and SAMBA-AMBER magnetometer network. The specific location of each stations is shown in Table 1.
          While polar-cap to equatorial coverage exist in the American meridian with the deployment of McMAC
          array linking the expanded Canadian CARISMA (formerly CANOPUS) and the SAMBA arrays, in Europe the
          coverage essentially ends with SEGMA in Italy. AMBER array is now connecting the European
          magnetometer array to low latitudes by filling the largest land-based gap in global magnetometer
          coverage in Africa, as is shown in the Figure. AMBER stations in Algiers, Abuja, Yaounde, and in
          Tsumeb will be used for connecting IMAGE-SAMNET-SEGMA array to low and dip-equator latitudes, and
          link up with South African Intermagnet and Antarctic magnetometers in the southern hemisphere so
          that we can have complete meridian observation in the region.
        </p>

        <p>
          In addition to filling the largest land-based gap in global magnetometer coverage, the AMBER array
          will address two fundamental areas of space physics:
        </p>

        <p>
          (1) the processes governing electrodynamics of the equatorial ionosphere as a function of latitude
          (or L-shell), local time, longitude, magnetic activity, and season, and
        </p>

        <p>
          (2) ULF pulsation strength and its connection with equatorial electrojet strength at low/mid-latitude
          regions.
        </p>

        <p>
          In coordination with GPS receivers in Africa, AMBER magnetometer array will provide a great
          opportunity to understand the electrodynamics that governs equatorial ionosphere motions. By
          combining AMBER in Adigrat (~6.0 N magnetic) and INTERMAGNET in Addis Ababa (~0.13 N magnetic) for
          east-african sector and AMBER in Yaounde (~5.9 S magnetic) and SAMBA-AMBER in Abuja (~0.55 S
          magnetic) for west-African sector, the strength of equatorial electrojet (EEJ) and thus vertical ExB
          drift is routinely estimated using a well known pair of magnetometers drift estimation technique.
          Therefore, while the magnetometers routinely observe the F region plasma drift mechanism (ExB
          drift), the GPS stations will monitor the structure of plasma at low/mid-latitudes in the African
          sectors. Such combined observations provide enormous opportunity to understand the unique equatorial
          ionospheric structures in the African sector that have been often detected by satellite observations.
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
          Recently, AMBER project received funding to expand (red dots in Figure shown here) the existing
          magnetometer network in order to address the following fundamental science problems: (1) What are
          the processes governing the formation of the four-cell pattern in a day-to-day basis as function of
          local time, magnetic activity, season, and solar cycle? (2) what are the longitudinal differences in
          the generation and development of plasma bubbles/irregularities, especially at the longitudes where
          the four-cell pattern peaks are located; Is there any connection between the dayside drifts and the
          formation of the bubbles/irregularities, primarily at the nodes of the four-cell pattern where the
          drifts are believed to be stronger?
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
