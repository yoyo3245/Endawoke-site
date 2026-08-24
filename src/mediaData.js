// Each entry supports:
//   imageSrc    (required) - path to the card's image, e.g. "/images/foo.jpg"
//   imageAlt    (required) - alt text for the image
//   textContent (required) - HTML string rendered as the card's caption
//   imageLink   (optional) - URL to open when the image is clicked (e.g. the
//                            article, video, or audio clip the image represents).
//                            Without it the image is just displayed, not clickable.
//
// Example:
// {
//   imageSrc: "/images/foo.jpg",
//   imageAlt: "audio clip",
//   textContent: "<i><b>Some caption text</b></i>",
//   imageLink: "https://example.com/article",
// },

const mediaData = [
  {
    imageSrc: "/images/Latrobe.png",
    imageAlt: "audio clip",
    textContent: "<i><b>In June 2019 La Trobe University Published article on my academic journey </b></i>"
  },
   {
    imageSrc: "/images/deutsche-welle-logo.png",
    imageLink: "images/medal_awar.mp3",
    imageAlt: "audio clip",
    textContent: "<i><b>In January 2019 the German radio Amahric Science program invited me to talk about my AGU Medal award. </b></i>"
  },
  {
    imageSrc: "/images/deutsche-welle-logo.png",
    imageAlt: "audio clip",
    textContent: "<i><b>In November 2014 the German radio <a href=\"https://www.dw.com/am/no-title/audio-18073716\"><u><b> Amahric Science program </b></u></a> host Tekle Yehuala invited me to his show to comment on the scientific meaning of <a href=\"http://en.wikipedia.org/wiki/Lightning\"><u><b>Lightning</b></u></a>. </b></i>"
  },
  {
    imageSrc: "images/deutsche-welle-logo.png",
    imageLink: "images/Endawoke_on_Big_BANG.mp3",
    imageAlt: "audio clip",
    textContent: "<i><b>In March 2014 the German radio Amahric Science program host Tekle Yehuala asked me to comment on the <a href=\"http://www.nytimes.com/2014/03/18/science/space/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html?_r=0\"><u><b>new discovery </b></u></a>about <a href=\"https://en.wikipedia.org/wiki/Big_Bang\"><u><b>Big-Bang theory</b></u></a>. </b></i>"
  },
  {
    imageSrc: "images/SBS_Amharic.png",
    imageLink: "images/Yizengaw_on_SBS_Part_11.mp3",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"/images/Yizengaw_on_SBS_Part_2.mp3\"><h3>Part Two</h3></a></b></i><br/><i><b>In October 2013 the Australian SBS Amahric program’s Martha Tsegaw interviewed me about my AMBER project and personal life background. </b></i>"
  },
  {
    imageSrc: "images/Amratv_Guest.png",
    imageLink: "images/Special_Guest_Yezengaw.mp4",
    imageAlt: "audio clip",
    textContent: "<i><b>In November 2010 the <a href=\"https://www.youtube.com/watch?v=FTgXopEaQkA\">Ethiopian TV (Amhara region branch)</a> interviewed me about the 2010 International Space Weather Initiative (ISWI) summer school that I co-organized. The school was held in Bahir Dar, Ethiopia during 28 October – 4 November 2010.</b></i>"
  },
  {
    imageSrc: "images/Amber_NASA_TV.png",
    imageLink: "images/Endawoke_on_AMBER.mp4",
    imageAlt: "audio clip",
    textContent: "<i><b>Closing the Gaps! New Magnetometers & New Researchers: </b></i><br/><i><b>My comment on AMBER project in particular and about the unique space weather properties in Africa on NASA TV </b></i>"
  },
   {
    imageSrc: "images/On_IHY_Legacy.png",
    imageLink: "images/Endawoke_on_Spaceweather.mp4",
    imageAlt: "audio clip",
    textContent: "<br/><i><b>My comment on space weather research in a developing country on NASA TV </i></b>"
  },
  {
    imageSrc: "images/open_eyes.png",
    imageLink: "images/opening_eyes.mp4",
    imageAlt: "audio clip",
    textContent: "<i><b>My comment on NASA documentary - 'Opening Eyes... to Sun-Earth Connection' - produced by <i><b><a href=\"http://passporttoknowledge.com/suntostars\"><u><b><i>Passport-to-Knowledge team</i></b></u></a> in Addis Ababa, Ethiopia. </b></i>"
  },
  {
    imageSrc: "images/Hammer.png",
    imageLink: "Publications/Interview_Hammer_2009.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>During my trip to Ethiopia for Scientific mission Hammer Magazine interviewed me (in Amharic) about my scientific role in Africa in general and in Ethiopia in particular </b></i>"
  },
  {
    imageSrc: "images/VOAnews_logo.JPG",
    imageLink: "images/VOA_Interview.mp3",
    imageAlt: "audio clip",
    textContent: "<i><b>On 10 May 2006 VOA Amahric program’s Fregenet Asseged interviewed me about my Chancellor’s award winning research and my background. </b></i>"
  },
  {
    imageSrc: "images/gqspring2006.png",
    imageLink: "Publications/gqspring06a.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>The 2006 UCLA Postdoctoral Scholars Reception Ceremony was featured in UCLA’s Graduate Quarterly Bulletin, Spring 2006 issue.</b></i>"
  },
  {
    imageSrc: "images/simatsidek.png",
    imageLink: "Publications/SemaTsedk.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>The 2006 UCLA Postdoctoral Scholars was featured in Sema Tsidk News Paper of August 2006 issue.</b></i>"
  },
  {
    imageSrc: "images/AddisAdmasslogo.JPG",
    imageLink: "Publications/AddisAdmass.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>The 1st July 2006 issue of Addis Admas Amharic news paper highlighted my life story and my award winning research in its Science and Technology section.</b></i>"
  },
  {
    imageSrc: "images/jbhe.png",
    imageLink: "Publications/Weekly_JBHE_Bulletin1.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>The weekly Journal of Blacks in Higher Education mentioned my award winning research as its latest news for 29 June 2006.</b></i>"
  },
  {
    imageSrc: "images/Latrobe.png",
    imageLink: "Publications/Latrobe_pacephys_news.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>The space physics department of La Trobe University, Australia, mentioned my award winning research as its latest news for March 2006. </b></i>"
  },
  {
    imageSrc: "images/Latrobe.png",
    imageLink: "Publications/Latrobe_bulletin_aug02.pdf",
    imageAlt: "audio clip",
    textContent: "<i><b>August 2002 issue of La Trobe University Bulletin detailed the successful development of Australian micro Satellite (FedSat), where I was a part.</b></i>"
  }
];

export default mediaData;

