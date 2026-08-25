// Add travel entries here. This section renders automatically once
// entries are added — no other file needs to change.
//
// Each entry supports:
//   title       (required) - trip/expedition/conference name or destination
//   year        (optional) - e.g. "2019" or "March 2019"
//   description (optional) - a sentence or two of context
//   link        (optional) - URL to a report, gallery, or announcement
//   linkLabel   (optional) - text for the link, defaults to "Learn more"
//   images      (optional) - array of image paths, e.g. "/images/foo.jpg".
//                            Renders as a thumbnail strip on the card; click
//                            any photo to open it full-size with prev/next
//                            navigation (arrow keys work too).
//
// Example:
// {
//   title: "AMBER Fieldwork — Bahir Dar, Ethiopia",
//   year: "2019",
//   description: "Installed and calibrated magnetometer stations for the AMBER array.",
//   link: "/Publications/AMISR_workshop_report.pdf",
//   linkLabel: "View report",
//   images: ["/images/trip-1.jpg", "/images/trip-2.jpg", "/images/trip-3.jpg"],
// },

const travelData = [
    {
        title: "Rome and Florence, Italy (October 2025)",
        year: "2025",
        description: "BEACON Satellite Symposium and GNSS Workshop",
        images: ["/Travel/ITALY5/IMG_01.jpg", "/Travel/ITALY5/IMG_02.jpg", "/Travel/ITALY5/IMG_03.jpg", "/Travel/ITALY5/IMG_04.jpg", "/Travel/ITALY5/IMG_05.jpg",
              "/Travel/ITALY5/IMG_06.jpg", "/Travel/ITALY5/IMG_07.jpg", "/Travel/ITALY5/IMG_08.jpg"],
    },
    {
        title: "Seoul, Busan, and Jeju Island, South Korea (July 2024)",
        year: "2024",
        description: "COSPAR Conference",
        images: ["/Travel/SKOREA2/IMG_01.jpg", "/Travel/SKOREA2/IMG_02.jpg", "/Travel/SKOREA2/IMG_03.jpg", "/Travel/SKOREA2/IMG_04.jpg", "/Travel/SKOREA2/IMG_05.jpg", "/Travel/SKOREA2/IMG_06.jpg", "/Travel/SKOREA2/IMG_07.jpg",
              "/Travel/SKOREA2/IMG_08.jpg", "/Travel/SKOREA2/IMG_09.jpg", "/Travel/SKOREA2/IMG_10.jpg", "/Travel/SKOREA2/IMG_11.jpg", "/Travel/SKOREA2/IMG_12.jpg", "/Travel/SKOREA2/IMG_13.jpg", "/Travel/SKOREA2/IMG_14.jpg"],
    },
    {
        title: "Lusaka, Zambia (October 2023)",
        year: "2023",
        description: "ISWI Workshop",
        images: ["/Travel/ZAMBIA2/IMG_01.jpg", "/Travel/ZAMBIA2/IMG_02.jpg", "/Travel/ZAMBIA2/IMG_03.jpg", "/Travel/ZAMBIA2/IMG_04.jpg", "/Travel/ZAMBIA2/IMG_05.jpg",
              "/Travel/ZAMBIA2/IMG_06.jpg", "/Travel/ZAMBIA2/IMG_07.jpg", "/Travel/ZAMBIA2/IMG_08.PNG", "/Travel/ZAMBIA2/IMG_09.jpg"],
    },
    {
        title: "Sapporo, Japan (May 2023)",
        year: "2023",
        description: "URSI General Assembly ",
        images: ["/Travel/JAPAN2/IMG_01.jpg", "/Travel/JAPAN2/IMG_02.jpg", "/Travel/JAPAN2/IMG_03.jpg", "/Travel/JAPAN2/IMG_04.jpg"],
    },
   {
        title: "Oslo, Tromso, and Svalbard, Norway (May 2023)",
        year: "2023",
        description: "Vacation",
        images: ["/Travel/NORWAY/IMG_01.jpg", "/Travel/NORWAY/IMG_02.jpg", "/Travel/NORWAY/IMG_03.jpg", "/Travel/NORWAY/IMG_04.jpg", "/Travel/NORWAY/IMG_05.jpg", "/Travel/NORWAY/IMG_06.jpg",
              "/Travel/NORWAY/IMG_07.jpg", "/Travel/NORWAY/IMG_08.jpg", "/Travel/NORWAY/IMG_09.jpg", "/Travel/NORWAY/IMG_10.jpg", "/Travel/NORWAY/IMG_11.jpg", "/Travel/NORWAY/IMG_12.jpg", "/Travel/NORWAY/IMG_13.jpg",
              "/Travel/NORWAY/IMG_14.jpg", "/Travel/NORWAY/IMG_15.jpg", "/Travel/NORWAY/IMG_16.jpg", "/Travel/NORWAY/IMG_17.jpg", "/Travel/NORWAY/IMG_18.jpg", "/Travel/NORWAY/IMG_19.jpg", "/Travel/NORWAY/IMG_20.jpg"],
    },
    {
        title: "Athens, Greece (July 2022)",
        year: "2022",
        description: "COSPAR Conference",
        images: ["/Travel/GREECE/IMG_01.jpg", "/Travel/GREECE/IMG_02.jpg", "/Travel/GREECE/IMG_03.jpg", "/Travel/GREECE/IMG_04.jpg", "/Travel/GREECE/IMG_05.jpg",
              "/Travel/GREECE/IMG_06.jpg", "/Travel/GREECE/IMG_07.jpg", "/Travel/GREECE/IMG_08.jpg"],
    },
    {
        title: "Olsztyn, Poland (August 2019)",
        year: "2019",
        description: "BEACON Satellite Symposium",
        images: ["/Travel/POLAND/IMG_01.jpg", "/Travel/POLAND/IMG_02.jpg", "/Travel/POLAND/IMG_03.jpg", "/Travel/POLAND/IMG_04.jpg", "/Travel/POLAND/IMG_05.jpg",
              "/Travel/POLAND/IMG_06.jpg", "/Travel/POLAND/IMG_07.jpg", "/Travel/POLAND/IMG_08.jpg"],
    },
    {
        title: "Baku, Azerbaijan (October 2018)",
        year: "2018",
        description: "UN ISWI Workshop.",
        images: ["/Travel/AZERBAIJAN/IMG_01.jpg", "/Travel/AZERBAIJAN/IMG_02.jpg", "/Travel/AZERBAIJAN/IMG_03.jpg", "/Travel/AZERBAIJAN/IMG_04.jpg", "/Travel/AZERBAIJAN/IMG_05.jpg",
              "/Travel/AZERBAIJAN/IMG_06.jpg", "/Travel/AZERBAIJAN/IMG_07.jpg", "/Travel/AZERBAIJAN/IMG_08.jpg"],
    },
    {
        title: "Ahmedabad, India (October 2018)",
        year: "2018",
        description: "ISEA 15 Conference.",
       images: ["/Travel/INDIA4/IMAG_01.jpg", "/Travel/INDIA4/IMAG_02.jpg", "/Travel/INDIA4/IMAG_03.jpg", "/Travel/INDIA4/IMAG_04.jpg", "/Travel/INDIA4/IMAG_05.jpg", "/Travel/INDIA4/IMAG_06.jpg",
            "/Travel/INDIA4/IMAG_07.jpg", "/Travel/INDIA4/IMAG_08.jpg", "/Travel/INDIA4/IMAG_09.jpg", "/Travel/INDIA4/IMAG_10.jpg", "/Travel/INDIA4/IMAG_11.jpg"],
    },  
    {
        title: "Santiago and Pueto Varas, Chile (November 2017)",
        year: "2017",
        description: "MI Coupling Conference and SAMBA Bussiness meeting.",
        images: ["/Travel/CHILE2/IMG_01.jpg", "/Travel/CHILE2/IMG_02.jpg", "/Travel/CHILE2/IMG_03.jpg", "/Travel/CHILE2/IMG_04.jpg", "/Travel/CHILE2/IMG_05.jpg", 
            "/Travel/CHILE2/IMG_06.jpg", "/Travel/CHILE2/IMG_07.jpg", "/Travel/CHILE2/IMG_08.jpg", "/Travel/CHILE2/IMG_09.jpg"],
    },
    {
        title: "Abuja, Canaanland, and Ota, Nigeria (September 2017)",
        year: "2017",
        description: "Magnetometer Deployment and GNSS Summer School.",
        images: ["/Travel/NIGERIA2/IMG_01.jpg", "/Travel/NIGERIA2/IMG_02.jpg", "/Travel/NIGERIA2/IMG_03.jpg", "/Travel/NIGERIA2/IMG_04.jpg", "/Travel/NIGERIA2/IMG_05.jpg", 
            "/Travel/NIGERIA2/IMG_06.jpg", "/Travel/NIGERIA2/IMG_07.jpg", "/Travel/NIGERIA2/IMG_08.jpg", "/Travel/NIGERIA2/IMG_09.jpg", "/Travel/NIGERIA2/IMG_10.jpg"],
    },
    {
        title: "Rio de Janeiro, Brazil (March 2017)",
        year: "2017",
        description: "FAA Workshop.",
        images: ["/Travel/BRAZIL3/IMG_01.jpg", "/Travel/BRAZIL3/IMG_02.jpg", "/Travel/BRAZIL3/IMG_03.jpg", "/Travel/BRAZIL3/IMG_04.jpg", 
            "/Travel/BRAZIL3/IMG_05.jpg","/Travel/BRAZIL3/IMG_06.jpg","/Travel/BRAZIL3/IMG_07.jpg","/Travel/BRAZIL3/IMG_08.jpg"],
    },
    {
        title: "Bern and Geneva, Switzerland (April 2017)",
        year: "2017",
        description: "ISSI Meeting.",
        images: ["/Travel/SWITZERLAND/IMG_01.jpg", "/Travel/SWITZERLAND/IMG_02.jpg", "/Travel/SWITZERLAND/IMG_03.jpg", "/Travel/SWITZERLAND/IMG_04.jpg", "/Travel/SWITZERLAND/IMG_05.jpg", "/Travel/SWITZERLAND/IMG_06.jpg", 
            "/Travel/SWITZERLAND/IMG_07.jpg", "/Travel/SWITZERLAND/IMG_08.jpg", "/Travel/SWITZERLAND/IMG_09.jpg", "/Travel/SWITZERLAND/IMG_10.jpg", "/Travel/SWITZERLAND/IMG_11.jpg", "/Travel/SWITZERLAND/IMG_12.jpg"],
    },
    {
        title: "Taipei, Taiwan (March 2016)",
        year: "2016",
        description: "COSMIC Conference.",
        images: ["/Travel/TAIWAN/IMG_01.jpg", "/Travel/TAIWAN/IMG_02.jpg", "/Travel/TAIWAN/IMG_03.jpg", "/Travel/TAIWAN/IMG_04.jpg", 
            "/Travel/TAIWAN/IMG_05.jpg", "/Travel/TAIWAN/IMG_06.jpg", "/Travel/TAIWAN/IMG_07.jpg", "/Travel/TAIWAN/IMG_08.jpg", "/Travel/TAIWAN/IMG_09.jpg", "/Travel/TAIWAN/IMG_10.jpg"],
    },
    {
        title: "Trieste and L'Aquila, Italy (June 2016)",
        year: "2016",
        description: "BEACON Symposium and GNSS Workshop.",
        images: ["/Travel/ITALY3/IMAG_01.jpg", "/Travel/ITALY3/IMAG_02.jpg", "/Travel/ITALY3/IMAG_03.jpg", "/Travel/ITALY3/IMAG_04.jpg", "/Travel/ITALY3/IMAG_05.jpg"],
    },
    {
        title: "Sangli and Mumbai, India (November 2016)",
        year: "2016",
        description: "UN ISWI Workshop.",
        images: ["/Travel/INDIA3/IMAG_01.JPG", "/Travel/INDIA3/IMAG_02.JPG", "/Travel/INDIA3/IMAG_03.JPG", "/Travel/INDIA3/IMAG_04.JPG", "/Travel/INDIA3/IMAG_05.JPG", 
            "/Travel/INDIA3/IMAG_06.JPG","/Travel/INDIA3/IMG_07.jpg","/Travel/INDIA3/IMAG_08.jpg"],
    },
    {
        title: "Manila and Davao, Philippines (February 2016)",
        year: "2016",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/PHILIPPINES/IMG_01.jpg", "/Travel/PHILIPPINES/IMG_02.jpg", "/Travel/PHILIPPINES/IMG_03.jpg", "/Travel/PHILIPPINES/IMG_04.jpg", "/Travel/PHILIPPINES/IMG_05.jpg",
              "/Travel/PHILIPPINES/IMG_06.jpg", "/Travel/PHILIPPINES/IMG_07.jpg", "/Travel/PHILIPPINES/IMG_08.jpg", "/Travel/PHILIPPINES/IMG_09.jpg"],
    },
    {
        title: "Nagoya, Japan (January 2016)",
        year: "2016",
        description: "International Symposium Project for Solar-Terrestrial Environment Prediction (PSTEP)",
        images: ["/Travel/JAPAN/IMG_01.jpg", "/Travel/JAPAN/IMG_02.jpg", "/Travel/JAPAN/IMG_03.jpg", "/Travel/JAPAN/IMG_04.jpg", "/Travel/JAPAN/IMG_05.jpg",
              "/Travel/JAPAN/IMG_06.jpg", "/Travel/JAPAN/IMG_07.jpg"],
    },
    {
        title: "Belem and Petrolina, Brazil (February 2015)",
        year: "2015",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/BRAZIL2/IMG_01.jpg", "/Travel/BRAZIL2/IMG_02.jpg", "/Travel/BRAZIL2/IMG_03.jpg", "/Travel/BRAZIL2/IMG_04.jpg", "/Travel/BRAZIL2/IMG_05.jpg", 
            "/Travel/BRAZIL2/IMG_06.jpg", "/Travel/BRAZIL2/IMG_07.jpg", "/Travel/BRAZIL2/IMG_08.jpg", "/Travel/BRAZIL2/IMG_09.jpg"],
    },
    {
        title: "Xi'an, China (October 2014)",
        year: "2014",
        description: "SCOSTEP Conference.",
        images: ["/Travel/CHINA2/IMG_01.jpg", "/Travel/CHINA2/IMG_02.jpg", "/Travel/CHINA2/IMG_03.jpg","/Travel/CHINA2/IMG_04.jpg", "/Travel/CHINA2/IMG_05.jpg", "/Travel/CHINA2/IMG_06.jpg",
            "/Travel/CHINA2/IMG_07.jpg", "/Travel/CHINA2/IMG_08.jpg", "/Travel/CHINA2/IMG_09.jpg","/Travel/CHINA2/IMG_10.jpg", "/Travel/CHINA2/IMG_11.jpg", "/Travel/CHINA2/IMG_12.jpg"],
    },
    {
        title: "Kigali, Rwanda (July 2014)",
        year: "2014",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/RWANDA/IMG_01.jpg", "/Travel/RWANDA/IMG_02.jpg", "/Travel/RWANDA/IMG_03.jpg", "/Travel/RWANDA/IMG_04.jpg", "/Travel/RWANDA/IMG_05.jpg",
            "/Travel/RWANDA/IMG_06.jpg", "/Travel/RWANDA/IMG_07.jpg", "/Travel/RWANDA/IMG_08.jpg", "/Travel/RWANDA/IMG_09.jpg", "/Travel/RWANDA/IMG_10.jpg"],
    },
    {
        title: "Bangkok and Phuket, Thailand (April 2014)",
        year: "2014",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/THAILAND/IMG_01.jpg", "/Travel/THAILAND/IMG_02.jpg", "/Travel/THAILAND/IMG_03.jpg", "/Travel/THAILAND/IMG_04.jpg", "/Travel/THAILAND/IMG_05.jpg", "/Travel/THAILAND/IMG_06.jpg", 
            "/Travel/THAILAND/IMG_07.jpg","/Travel/THAILAND/IMG_08.jpg","/Travel/THAILAND/IMG_09.jpg","/Travel/THAILAND/IMG_10.jpg","/Travel/THAILAND/IMG_11.jpg","/Travel/THAILAND/IMG_12.jpg"],
    },
    {
        title: "Vienna, Austria (February 2014)",
        year: "2014",
        description: "UN ISWI Meeting.",
        images: ["/Travel/AUSTRIA/IMG_01.jpg","/Travel/AUSTRIA/IMG_02.jpg", "/Travel/AUSTRIA/IMG_03.jpg", "/Travel/AUSTRIA/IMG_04.jpg", "/Travel/AUSTRIA/IMG_05.jpg",
            "/Travel/AUSTRIA/IMG_06.jpg", "/Travel/AUSTRIA/IMG_07.jpg", "/Travel/AUSTRIA/IMG_08.jpg", "/Travel/AUSTRIA/IMG_09.jpg", "/Travel/AUSTRIA/IMG_10.jpg"],
    },
    {
        title: "Hermanus, Cape Town & Robin Island, South Africa (January 2014)",
        year: "2014",
        description: "Scientific Collaboration Meeting.",
        images: ["/Travel/SOUTH_AFRICA/IMG_01.jpg", "/Travel/SOUTH_AFRICA/IMG_02.jpg", "/Travel/SOUTH_AFRICA/IMG_03.jpg", "/Travel/SOUTH_AFRICA/IMG_04.jpg", "/Travel/SOUTH_AFRICA/IMG_05.jpg", "/Travel/SOUTH_AFRICA/IMG_06.jpg", 
            "/Travel/SOUTH_AFRICA/IMG_07.jpg","/Travel/SOUTH_AFRICA/IMG_08.jpg","/Travel/SOUTH_AFRICA/IMG_09.jpg","/Travel/SOUTH_AFRICA/IMG_10.jpg","/Travel/SOUTH_AFRICA/IMG_11.jpg","/Travel/SOUTH_AFRICA/IMG_12.jpg"],
   },
    {
        title: "Torres Del Paine National Park, Punta Arenas & La Serena, Chile (November 2013)",
        year: "2013",
        description: "MI Coupling Conference and SAMBA business meeting.",
        images: ["/Travel/CHILE/IMG_01.jpg", "/Travel/CHILE/IMG_02.jpg", "/Travel/CHILE/IMG_03.jpg", "/Travel/CHILE/IMG_04.jpg", "/Travel/CHILE/IMG_05.jpg", "/Travel/CHILE/IMG_06.jpg", "/Travel/CHILE/IMG_07.jpg",
            "/Travel/CHILE/IMG_08.jpg", "/Travel/CHILE/IMG_09.jpg", "/Travel/CHILE/IMG_10.jpg", "/Travel/CHILE/IMG_11.jpg", "/Travel/CHILE/IMG_12.jpg", "/Travel/CHILE/IMG_13.jpg", "/Travel/CHILE/IMG_14.jpg", 
            "/Travel/CHILE/IMG_15.jpg","/Travel/CHILE/IMG_16.jpg"],
    },
    {
        title: "Abidjan, Côte d’Ivoire (August 2013)",
        year: "2013",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/IVORYCOAST/IMAG_01.jpg", "/Travel/IVORYCOAST/IMAG_02.jpg", "/Travel/IVORYCOAST/IMAG_03.jpg", "/Travel/IVORYCOAST/IMAG_04.jpg", "/Travel/IVORYCOAST/IMAG_05.jpg",
            "/Travel/IVORYCOAST/IMAG_06.jpg", "/Travel/IVORYCOAST/IMAG_07.jpg", "/Travel/IVORYCOAST/IMAG_08.jpg", "/Travel/IVORYCOAST/IMAG_09.jpg"],
    },
    {
        title: "Conakry, Guinea (August 2013)",
        year: "2013",
        description: "Magnetometer Deployment for the AMBER array.",
        images: ["/Travel/GUINEA/IMG_01.jpg", "/Travel/GUINEA/IMG_02.jpg", "/Travel/GUINEA/IMG_03.jpg", "/Travel/GUINEA/IMG_04.jpg", "/Travel/GUINEA/IMG_05.jpg",
            "/Travel/GUINEA/IMG_06.jpg", "/Travel/GUINEA/IMG_07.jpg", "/Travel/GUINEA/IMG_08.jpg", "/Travel/GUINEA/IMG_09.jpg", "/Travel/GUINEA/IMG_10.jpg"],
    },
    {
        title: "Bath and London, UK (July 2013)",
        year: "2013",
        description: "BEACON Satellite Symposium.",
        images: ["/Travel/UKL/IMG_01.jpg", "/Travel/UKL/IMG_02.jpg", "/Travel/UKL/IMG_03.jpg", "/Travel/UKL/IMG_04.jpg", 
            "/Travel/UKL/IMG_05.jpg", "/Travel/UKL/IMG_06.jpg", "/Travel/UKL/IMG_07.jpg", "/Travel/UKL/IMG_08.jpg", "/Travel/UKL/IMG_09.jpg"],
    },
    {
        title: "Lalibela, Axum, & Addis Ababa, Ethiopia (November 2012)",
        year: "2012",
        description: "AGU Chapman Conference.",
        images: ["/Travel/ETHIOPIA/IMAG_056.jpg", "/Travel/ETHIOPIA/IMAG_035.jpg", "/Travel/ETHIOPIA/IMAG_121.jpg"],
    },
    {
        title: "Bandung, Indonesia (September 2012)",
        year: "2012",
        description: "ISWI Summer School.",
        images: ["/Travel/INDONESIA/IMAG_01.jpg", "/Travel/INDONESIA/IMAG_02.jpg", "/Travel/INDONESIA/IMAG_03.jpg", "/Travel/INDONESIA/IMAG_04.jpg", "/Travel/INDONESIA/IMAG_65.jpg"],
    },
    {
        title: "Mysore, India (July 2012)",
        year: "2012",
        description: "Scientific Collaboration Meeting.",
        images: ["/Travel/INDIA2/IMAG_056.jpg", "/Travel/INDIA2/IMAG_035.jpg", "/Travel/INDIA2/IMAG_121.jpg"],
    },
    {
        title: "Venice, Italy (April 2012)",
        year: "2012",
        description: "GNSS Workshop.",
        images: ["/Travel/ITALY2/IMAG_056.jpg", "/Travel/ITALY2/IMAG_035.jpg", "/Travel/ITALY2/IMAG_121.jpg"],
    },
    {
        title: "Paracas & Lima, Peru (March 2012)",
        year: "2012",
        description: "ISEA Conference.",
        images: ["/Travel/PERU/IMG_01.jpg", "/Travel/PERU/IMG_02.jpg", "/Travel/PERU/IMG_04.jpg", "/Travel/PERU/IMG_05.jpg", "/Travel/PERU/IMG_06.jpg",
            "/Travel/PERU/IMG_07.jpg", "/Travel/PERU/IMG_08.jpg", "/Travel/PERU/IMG_09.jpg", "/Travel/PERU/IMG_10.jpg"],
    },
    {
        title: "Kisumu, Kenya (January 2012)",
        year: "2012",
        description: "Ionosonde Development Campaign.",
        images: ["/Travel/KENYA/IMG_01.jpg", "/Travel/KENYA/IMG_02.jpg", "/Travel/KENYA/IMG_03.jpg", "/Travel/KENYA/IMG_04.jpg", "/Travel/KENYA/IMG_05.jpg"],
    },
    {
        title: "Sao Jose dos Campos, Brazil (November 2011)",
        year: "2011",
        description: "LISN Workshop.",
        images: ["/Travel/BRAZIL/IMG_01.JPG", "/Travel/BRAZIL/IMG_02.JPG", "/Travel/BRAZIL/IMG_03.JPG", "/Travel/BRAZIL/IMG_04.JPG", "/Travel/BRAZIL/IMG_05.JPG", "/Travel/BRAZIL/IMG_06.JPG", "/Travel/BRAZIL/IMG_07.JPG", "/Travel/BRAZIL/IMG_08.JPG"],
    },
    {
        title: "Abuja, Nigeria (August 2011)",
        year: "2011",
        description: "Magnetometer Deployment for AMBER Project.",
        images: ["/Travel/NIGERIA/IMG_01.jpg", "/Travel/NIGERIA/IMG_02.jpg", "/Travel/NIGERIA/IMG_03.jpg", "/Travel/NIGERIA/IMG_04.jpg", "/Travel/NIGERIA/IMG_05.jpg",
            "/Travel/NIGERIA/IMG_06.jpg", "/Travel/NIGERIA/IMG_07.jpg", "/Travel/NIGERIA/IMG_08.jpg", "/Travel/NIGERIA/IMG_09.jpg", "/Travel/NIGERIA/IMG_10.jpg"],
    },
    {
        title: "Breman, Germany (July 2010)",
        year: "2010",
        description: "COSPAR Conference.",
        images: ["/Travel/GERMANY/IMAG_056.jpg", "/Travel/GERMANY/IMAG_035.jpg", "/Travel/GERMANY/IMAG_121.jpg"],
    },
    {
        title: "Barcelona, Spain (June 2010)",
        year: "2010",
        description: "BEACON Satellite Symposium.",
        images: ["/Travel/SPAIN/IMG_01.jpg", "/Travel/SPAIN/IMG_02.jpg", "/Travel/SPAIN/IMG_03.jpg", "/Travel/SPAIN/IMG_04.jpg", 
            "/Travel/SPAIN/IMG_05.jpg", "/Travel/SPAIN/IMG_06.jpg", "/Travel/SPAIN/IMG_07.jpg", "/Travel/SPAIN/IMG_08.jpg", "/Travel/SPAIN/IMG_09.jpg"],
    },
    {
        title: "Windhock & Tsumeb, Namibia (Nov, 2009)",
        year: "2009",
        description: "Magnetometer Deployment for AMBER Project.",
        images: ["/Travel/NAMIBIA/IMG_01.jpg", "/Travel/NAMIBIA/IMG_02.jpg", "/Travel/NAMIBIA/IMG_03.jpg", "/Travel/NAMIBIA/IMG_04.jpg", "/Travel/NAMIBIA/IMG_05.jpg"],
    },
    {
        title: "Daejeon, South Korea (Sep 2009)",
        year: "2009",
        description: "UN IHY Meeting.",
        images: ["/Travel/SKOREA/IMG_01.jpg", "/Travel/SKOREA/IMG_02.jpg", "/Travel/SKOREA/IMG_03.jpg", "/Travel/SKOREA/IMG_04.jpg", "/Travel/SKOREA/IMG_05.jpg",
            "/Travel/SKOREA/IMG_06.jpg", "/Travel/SKOREA/IMG_07.jpg", "/Travel/SKOREA/IMG_08.jpg", "/Travel/SKOREA/IMG_09.jpg", "/Travel/SKOREA/IMG_10.jpg"],
    },
    {
        title: "Livingstone, Zambia (June 2009)",
        year: "2009",
        description: "IHY Meeting.",
        images: ["/Travel/ZAMBIA/IMG_01.jpg", "/Travel/ZAMBIA/IMG_02.jpg", "/Travel/ZAMBIA/IMG_03.jpg","/Travel/ZAMBIA/IMG_04.jpg", "/Travel/ZAMBIA/IMG_05.jpg",
            "/Travel/ZAMBIA/IMG_06.jpg", "/Travel/ZAMBIA/IMG_07.jpg", "/Travel/ZAMBIA/IMG_08.jpg", "/Travel/ZAMBIA/IMG_09.jpg"],
    },
    {
        title: "Addis Ababa & La Libela, Ethiopia (Nov, 2007)",
        year: "2007",
        description: "IHY Meeting.",
        images: ["/Travel/ETHIOPIA/IMAG_056.jpg", "/Travel/ETHIOPIA/IMAG_035.jpg", "/Travel/ETHIOPIA/IMAG_121.jpg"],
    },
    {
        title: "Amesterdam, Roterdam & The Hague, Netherland (July 2007)",
        year: "2007",
        description: "Vacation.",
        images: ["/Travel/HOLLAND/IMG_01.jpg", "/Travel/HOLLAND/IMG_02.jpg", "/Travel/HOLLAND/IMG_03.jpg","/Travel/HOLLAND/IMG_04.jpg", "/Travel/HOLLAND/IMG_05.jpg",
            "/Travel/HOLLAND/IMG_06.jpg", "/Travel/HOLLAND/IMG_07.jpg", "/Travel/HOLLAND/IMG_08.jpg", "/Travel/HOLLAND/IMG_09.jpg"],
    },
    {
        title: "Brussles, Belgium (July 2007)",
        year: "2007",
        description: "Vacation.",
        images: ["/Travel/BELGIUM/IMG_01.jpg", "/Travel/BELGIUM/IMG_02.jpg", "/Travel/BELGIUM/IMG_03.jpg", "/Travel/BELGIUM/IMG_04.jpg", "/Travel/BELGIUM/IMG_05.jpg", "/Travel/BELGIUM/IMG_06.jpg", "/Travel/BELGIUM/IMG_07.jpg"],
    },
    {
        title: "Paris, France(July, 2007)",
        year: "2007",
        description: "Vacation.",
        images: ["/Travel/FRANCE/IMG_01.jpg", "/Travel/FRANCE/IMG_02.jpg", "/Travel/FRANCE/IMG_03.jpg","/Travel/FRANCE/IMG_04.jpg", "/Travel/FRANCE/IMG_05.jpg", "/Travel/FRANCE/IMG_06.jpg",
            "/Travel/FRANCE/IMG_07.jpg", "/Travel/FRANCE/IMG_08.jpg", "/Travel/FRANCE/IMG_09.jpg", "/Travel/FRANCE/IMG_10.jpg"],
    },
    {
        title: "Perugia & Rome, Italy (July 2007)",
        year: "2007",
        description: "Vacation.",
        images: ["/Travel/ITALY/IMG_01.jpg", "/Travel/ITALY/IMG_02.jpg", "/Travel/ITALY/IMG_03.jpg", "/Travel/ITALY/IMG_05.jpg", "/Travel/ITALY/IMG_06.jpg",
            "/Travel/ITALY/IMG_07.jpg", "/Travel/ITALY/IMG_08.jpg", "/Travel/ITALY/IMG_09.jpg", "/Travel/ITALY/IMG_10.jpg", "/Travel/ITALY/IMG_11.jpg", "/Travel/ITALY/IMG_12.jpg"],
    },
    {
        title: "Bangalore, India (Nov, 2006)",
        year: "2006",
        description: "UN IHY Meeting.",
        images: ["/Travel/INDIA/IMAG_01.jpg", "/Travel/INDIA/IMAG_02.jpg", "/Travel/INDIA/IMAG_03.jpg", "/Travel/INDIA/IMAG_04.jpg", "/Travel/INDIA/IMAG_05.jpg"],
    },
    {
        title: "Brisbane, Sydney & Melbourne, Australia (Sep, 2006)",
        year: "2006",
        description: "AIP Meeting and Vacation.",
        images: ["/Travel/AUSTRALIA/IMAG_01.jpg", "/Travel/AUSTRALIA/IMAG_02.jpg", "/Travel/AUSTRALIA/IMAG_03.jpg", "/Travel/AUSTRALIA/IMAG_04.jpg", "/Travel/AUSTRALIA/IMAG_05.jpg", "/Travel/AUSTRALIA/IMAG_06.jpg"],
    },
    {
        title: "Bejing, China (July, 2006)",
        year: "2006",
        description: "COSPAR Conference.",
        images: ["/Travel/CHINA/IMG_01.jpg", "/Travel/CHINA/IMG_02.jpg", "/Travel/CHINA/IMG_03.jpg", "/Travel/CHINA/IMG_04.jpg", "/Travel/CHINA/IMG_05.jpg", "/Travel/CHINA/IMG_06.jpg", "/Travel/CHINA/IMG_07.jpg"],
    }
];

export default travelData;
