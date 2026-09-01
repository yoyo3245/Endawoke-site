// AMBER magnetometer station table (src/pages/AmberPage.jsx).
//
// Each entry supports:
//   city    (required) - station city name
//   country (optional)  - country name, shown next to the city
//   flag    (optional)  - path to a flag image (e.g. "/Travel/foo-flag.gif"),
//                         shown before the city name. Omit when no flag
//                         asset is available.
//   code, geogLat, geogLong, magLat, magLong, lShell, status (required) -
//                         table values, taken from the original AMBER page.
//   href    (required)  - link to the station's detail page.

const amberStations = [
  { city: "Medea", country: "Algeria", flag: "/Travel/algeria-flag.gif", code: "ALGR", geogLat: "36.85 N", geogLong: "2.93 E", magLat: "27.98 N", magLong: "77.67 E", lShell: "1.3", status: "Deployed"},
  { city: "Adigrat", country: "Ethiopia", flag: "/Travel/ethiopia_flag.png", code: "ETHI", geogLat: "14.28 N", geogLong: "39.46 E", magLat: "5.90 N", magLong: "111.06 E", lShell: "1.0", status: "Deployed"},
  { city: "Yaounde", country: "Cameroon", flag: "/Travel/cameroon_flag.gif", code: "CMRN", geogLat: "3.87 N", geogLong: "11.52 E", magLat: "5.30 S", magLong: "83.12 E", lShell: "1.0", status: "Deployed"},
  { city: "Tsumeb", country: "Namibia", flag: "/Travel/namibia-flag.gif", code: "NMBA", geogLat: "19.20 S", geogLong: "17.58 E", magLat: "29.91 S", magLong: "86.16 E", lShell: "1.3", status: "Deployed"},
  { city: "Abuja", country: "Nigeria", flag: "/Travel/nigeria-flag.gif", code: "ABJA", geogLat: "10.5 N", geogLong: "7.55 E", magLat: "0.55 S", magLong: "79.63 E", lShell: "1.0", status: "Deployed"},
  { city: "Belem", country: "Brazil", flag: "/Travel/Brazil-flag.gif", code: "BELM", geogLat: "1.45 S", geogLong: "48.50 W", magLat: "1.05 S", magLong: "25.34 E", lShell: "1.0", status: "Deployed"},
  { city: "Petrolina", country: "Brazil", flag: "/Travel/Brazil-flag.gif", code: "PETA", geogLat: "9.4 S", geogLong: "40.5 W", magLat: "6.95 S", magLong: "30.21 E", lShell: "1.0", status: "Deployed"},
  { city: "Conakry", country: "Guinea", flag: "/Travel/guinea-flag.gif", code: "CNKY", geogLat: "10.5 N", geogLong: "13.71 W", magLat: "0.46 S", magLong: "60.37 E", lShell: "1.0", status: "Deployed"},
  { city: "Abidjan", country: "Cote d'Ivoire", flag: "/Travel/Ivorycoast-flag.gif", code: "ABAN", geogLat: "4.60 N", geogLong: "6.64 W", magLat: "6.0 S", magLong: "65.82 E", lShell: "1.0", status: "Deployed"},
  { city: "Bangkok", country: "Thailand", flag: "/Travel/Thailand-flag.gif", code: "SONG", geogLat: "14.1 N", geogLong: "100.6 E", magLat: "6.2 N", magLong: "172.17 E", lShell: "1.0", status: "Deployed"},
  { city: "Puhket", country: "Thailand", flag: "/Travel/Thailand-flag.gif", code: "PUKT", geogLat: "7.89 N", geogLong: "98.40 E", magLat: "0.63 S", magLong: "169.95 E", lShell: "1.0", status: "Deployed"},
  { city: "Manila", country: "Philippines", flag: "/Travel/Philippines-flag.gif", code: "MNLA", geogLat: "14.58 N", geogLong: "120.90 E", magLat: "7.02 N", magLong: "167.86 W", lShell: "1.0", status: "Deployed"},
  { city: "Davao", country: "Philippines", flag: "/Travel/Philippines-flag.gif", code: "DAVO", geogLat: "7.06 N", geogLong: "125.60 E", magLat: "0.96 S", magLong: "163.27 W", lShell: "1.0", status: "Deployed"},
  { city: "Kwajalein", country: null, flag: "/Travel/marshallislands-flag.png", code: "KWJL", geogLat: "9.19 N", geogLong: "167.46 E", magLat: "5.12 N", magLong: "122.22 W", lShell: "1.0", status: "Deployed"},
  { city: "Wajir", country: "Kenya", flag: "/Travel/kenya-flag.png", code: "KNYA", geogLat: "1.747 N", geogLong: "40.057 E", magLat: "6.52 S", magLong: "113.896 E", lShell: "1.0", status: "To be Deployed"},
  { city: "Christmas Island", country: null, flag: "/Travel/kiribati-flag.png", code: "CHIS", geogLat: "1.87 N", geogLong: "157.40 W", magLat: "1.4 N", magLong: "86.39 W", lShell: "1.0", status: "To be Deployed"},
];

export default amberStations;
