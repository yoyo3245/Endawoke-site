// Add awards and honors here. This section renders automatically once
// entries are added — no other file needs to change.
//
// Each entry supports:
//   title       (required) - name of the award/honor
//   year        (optional) - e.g. "2018"
//   description (optional) - a sentence or two of context
//   link        (optional) - URL to a certificate, article, or announcement
//   linkLabel   (optional) - text for the link, defaults to "Learn more"
//   youtubeUrl    (optional) - a YouTube video link (youtube.com/watch?v=…,
//                              youtu.be/…, or /shorts/…). Renders a clickable
//                              video thumbnail at the top of the card that
//                              plays inline when clicked.
//   previewImage  (optional) - path to a custom image (e.g. "/images/foo.jpg")
//                              to use as that thumbnail instead of YouTube's
//                              auto-generated one. Only used when youtubeUrl
//                              is also set.
//
// Example:
// {
//   title: "AGU Fellow",
//   year: "2018",
//   description: "Elected Fellow of the American Geophysical Union for contributions to ionospheric research.",
//   link: "/Publications/Fellow.pdf",
//   linkLabel: "View certificate",
//   youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
//   previewImage: "/images/my-custom-thumbnail.jpg",
// },

const awardsData = [
    {
    title: "AGU Joanne Simpson Medalist and AGU Fellow",
    year: "2018",
    description: "For his significant contributions to the Earth and space sciences as an outstanding mid-career scientist.",
    link: "/Publications/Fellow.pdf",
    linkLabel: "View certificate",
    youtubeUrl: "https://youtu.be/GS3gbURz590?si=3Lc6eywWxYIypBfh&t=3408?t=56m49s",
    previewImage: "/images/eaward.png",
    },
    {
    title: "Associate Fellow of Ethiopian Academy of Sciences",
    year: "2018",
    description: "For his significant contributions to...",
    link: "/Publications/Fellow.pdf",
    linkLabel: "View certificate",
    previewImage: "/images/eaward.png",
    },
   {
    title: "Associate Fellow of African Geophysical Society",
    year: "2014",
    description: "For his significant contributions to...",
    link: "/Publications/AF_Fellow.pdf",
    linkLabel: "View certificate",
    imageSrc: "/images/IMG_03.jpg"
    },
   {
    title: "UCLA Chancellor’s Award for Postdoctoral Research",
    year: "2006",
    description: "For his significant contributions to...",
    link: "/Publications/Fellow.pdf",
    linkLabel: "View certificate",
    previewImage: "/images/gqspring2006.png",
    },
 ];


export default awardsData;
