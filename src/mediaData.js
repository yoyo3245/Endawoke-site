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
    imageLink: "https://www.dw.com/am/.../audio-47016756",
    imageAlt: "audio clip",
    textContent: "<i><b>In January 2019 the German radio <a href=\"https://www.dw.com/am/.../audio-47016756\"><u><b> Amahric Science program </b></u></a> invited me to talk about my AGU Medal award. </b></i>"
  },
  {
    imageSrc: "/images/deutsche-welle-logo.png",
    imageAlt: "audio clip",
    textContent: "<i><b>In November 2014 the German radio <a href=\"https://www.dw.com/am/no-title/audio-18073716\"><u><b> Amahric Science program </b></u></a> host Tekle Yehuala invited me to his show to comment on the scientific meaning of <a href=\"http://en.wikipedia.org/wiki/Lightning\"><u><b>Lightning</b></u></a>. </b></i>"
  },
  {
    imageSrc: "images/deutsche-welle-logo.png",
    imageAlt: "audio clip",
    textContent: "<i><b>In March 2014 the German radio <a href=\"https://www.dw.com/am/no-title/audio-17521384\"><u><b> Amahric Science program </b></u></a> host Tekle Yehuala asked me to comment on the <a href=\"http://www.nytimes.com/2014/03/18/science/space/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html?_r=0\"><u><b>new discovery </b></u></a>about <a href=\"https://en.wikipedia.org/wiki/Big_Bang\"><u><b>Big-Bang theory</b></u></a>. </b></i>"
  },
  {
    imageSrc: "images/SBS_Amharic.png",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"images/Yizengaw_on_SBS_Part_11.mp3\">Part One </a> and <a href=\"images/Yizengaw_on_SBS_Part_2.mp3\">Part Two</a></b></i><br/><i><b>In October 2013 the Australian SBS Amahric program’s Martha Tsegaw interviewed me about my AMBER project and personal life background. </b></i>"
  },
  {
    imageSrc: "images/Endawoke1.jpg",
    imageAlt: "audio clip",
    textContent: "<i><b>In November 2010 the <a href=\"https://www.youtube.com/watch?v=FTgXopEaQkA\">Ethiopian TV (Amhara region branch)</a> interviewed me about the 2010 International Space Weather Initiative (ISWI) summer school that I co-organized. The school was held in Bahir Dar, Ethiopia during 28 October – 4 November 2010.</b></i>"
  },
  {
    imageSrc: "images/Endawoke_IHY2.jpg",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"images/Endawoke_on_AMBER.mp4\">Closing the Gaps! New Magnetometers & New Researchers</a> </b></i><br/><i><b>My comment on AMBER project in particular and about the unique space weather properties in Africa (courtesy of <a href=\"http://passporttoknowledge.com/suntostars\"><u><b><i>Passport-to-Knowledge team</i></b></u></a>). For more detail see <a href=\"http://passporttoknowledge.com/suntostars/ihy\"><u><b><i>Passport-to-Knowledge team products </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/Endawoke_IHY.jpg",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"images/opening_eyes.mp4\">Opening Eyes --- to Sun-Earth Connection</a> </b></i><br/><i><b>This documentary (courtesy of <a href=\"Http://passporttoknowledge.com/suntostars\"><u><b><i>Passport-to-Knowledge team</i></b></u></a>) has been taken at one of the workshop that I co-organized in Addis Ababa, Ethiopia back in November 2007. For more detail see <a href=\"http://sunearthday.nasa.gov/podcasts/video/opening_eyes.mp4\"><u><b><i>NASA TV's podcast </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/Endawoke_IHY3.jpg",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"images/Endawoke_on_Spaceweather.mp4\">Space Weather & Global Society - Blowing in the Solar Wind</a> </b></i><br/><i><b>How important is space weather for developing countries? Here is how I consider the importance of space weather for African socio economic development (courtesy of <a href=\"http://passporttoknowledge.com/suntostars\"><u><b><i>Passport-to-Knowledge team</i></b></u></a>). For more detail see <a href=\"http://passporttoknowledge.com/suntostars/ihy\"><u><b><i> Passport-to-Knowledge team products </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/Endawoke_IHY4.jpg",
    imageAlt: "audio clip",
    textContent: "<i><b><a href=\"images/IHY_Legacy.mp4\">Legacy of the IHY</a> </b></i><br/><i><b>Documentary about the legacy of the International Heliophysical Year (IHY) and its practical applications and fundamental breakthroughs (courtesy of <a href=\"Http://passporttoknowledge.com/suntostars\"><u><b><i>Passport-to-Knowledge team</i></b></u></a>). For more detail see <a href=\"http://passporttoknowledge.com/suntostars/ihy\"><u><b><i> Passport-to-Knowledge team products </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/Hammer.png",
    imageAlt: "audio clip",
    textContent: "<i><b>During my trip to Ethiopia for Scientific mission Hammer Magazine interviewed me about my scientific role in Africa in general and in Ethiopia in particular. <a href=\"Publications/Interview_Hammer_2009.pdf\"><u><b><i> See full interview (in Amharic) </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/VOAnews_logo.JPG",
    imageAlt: "audio clip",
    textContent: "<i><b>On 10 May 2006 VOA Amahric program’s Fregenet Asseged interviewed me about my Chancellor’s award winning research and my background. <a href=\"Publications/2006-05-10-voa2.pdf\"><u><b><i> (See text version) </i></b></u></a></b></i> <a href=\"https://amharic.voanews.com/a/2149051.html\"><u><b><i> (See audio version) </i></b></u></a></b></i>"
  },
  {
    imageSrc: "images/gqspring2006.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The 2006 UCLA Postdoctoral Scholars <a href=\"http://www2.bc.edu/endawoke-kassie/award2006.html\">Reception Ceremony</a> was featured in UCLA’s <a href=\"http://www.gdnet.ucla.edu/asis/library/gqintro.html\">Graduate Quarterly</a> Bulletin, Spring 2006 issue.</b></i>"
  },
  {
    imageSrc: "images/simatsidek.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The 2006 UCLA Postdoctoral Scholars <a href=\"http://www2.bc.edu/endawoke-kassie/award2006.html\">award</a> was featured in Sema Tsidk News Paper of <a href=\"http://www.eotc-mkidusan.org/Amharic/Enastewawkachihu/index_21.html\">August 2006 </a> issue.</b></i>"
  },
  {
    imageSrc: "images/AddisAdmasslogo.JPG",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The 1st July 2006 issue of Addis Admas’s (<a href=\"http://www.addisadmass.com/Science/news_item.asp?NewsID=36\"><u><b><i>Amharic news paper</i></b></u></a>) highlighted my life story and my award winning research in its Science and Technology section.</b></i>"
  },
  {
    imageSrc: "images/jbhe.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The weekly Journal of Blacks in Higher Education mentioned my award winning research as its latest news for 29 June 2006.</b></i>"
  },
  {
    imageSrc: "images/Latrobe.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The space physics department of La Trobe University, Australia, mentioned my award winning research as its latest news for March 2006. </b></i>"
  },
  {
    imageSrc: "images/URSI_logo.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>The International Radio Science Bulletin, in its June 2004 issue (<a href=\"www.ursi.org/RSBissues/RSBJune2004.pdf\"><u><b><i>see page 53</i></b></u></a>), talked about my best student presentation award, which has been held in Hobart, Australia in February 2004.</b></i>"
  },
  {
    imageSrc: "images/Latrobe.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>School of Engineering and Mathematical Sciences of La Trobe University, Australia, declared the successful completion of my PhD in its May 2004 news.</b></i>"
  },
  {
    // imageSrc: "images/archive_aug02.gif",
    imageSrc: "images/Latrobe.png",
    imageAlt: "Text version (PDF)",
    textContent: "<i><b>August 2002 issue of <a href=\"http://www.latrobe.edu.au/bulletin/\">La Trobe University Bulletin</a> detailed the successful development of Australian micro Satellite (FedSat), where I was a part.</b></i>"
  }
];

export default mediaData;

