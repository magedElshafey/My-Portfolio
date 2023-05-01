// social media icons
import mail from "../assets/social/icons8-gmail-logo-48.png";
import phone from "../assets/social/icons8-phone-48.png";
import linkedin from "../assets/social/icons8-linkedin-48.png";
import github from "../assets/social/icons8-github-48.png";
import whats from "../assets/social/icons8-whatsapp-48.png";
import face from "../assets/social/icons8-facebook-48.png";
import insta from "../assets/social/icons8-instagram-48.png";
// megz img
import megz1 from "../assets/megz/megz-01.jpeg";
import megz2 from "../assets/megz/megz-02.jpg";
import megz3 from "../assets/megz/megz-03.jpg";
import megz4 from "../assets/megz/megz-04.jpg";
import megz5 from "../assets/megz/megz-05.jpg";
import megz6 from "../assets/megz/megz-06.jpg";
// services

import productDesign from "../assets/services/icons8-designer-64.png";
import frontEnd from "../assets/services/icons8-developer-100.png";
import optimizing from "../assets/services/icons8-optimizing-64.png";
// projects
import fittness from "../assets/projects/fitness.png";
import elshorouk from "../assets/projects/elshorouk.png";
import qtab from "../assets/projects/q-tab.png";
import switchIo from "../assets/projects/switch.png";
import alMosawi from "../assets/projects/almosawi.png";
import dom from "../assets/projects/doom.png";
import beaches from "../assets/projects/beaches.png";
// nav bar content
export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Statistics",
    path: "#stats",
  },
  {
    title: "Services",
    path: "#serv",
  },
  {
    title: "contact",
    path: "#contact",
  },
];
export const social = [
  {
    img: mail,
    ref: "nailto:magedelshafey98@gmail.com",
  },
  {
    img: whats,
    ref: "https://wa.me/+201022153359",
  },
  {
    img: phone,
    ref: "tel:01019846513",
  },
  {
    img: linkedin,
    ref: "https://www.linkedin.com/in/maged-elshafey",
  },
  {
    img: github,
    ref: "https://github.com/magedElshafey",
  },
  {
    img: face,
    ref: "https://www.facebook.com/maged.mahmoud.1829?mibextid=ZbWKwL",
  },
  {
    img: insta,
    ref: "https://instagram.com/maged_el_shaf3y?igshid=NzMyMjgxZWIzNw==",
  },
];
export const megzImg = [megz1, megz2, megz3, megz4, megz5, megz6];
export const services = [
  {
    title: "Web design",
    desc: "As a front-end developer, I have a keen eye for design and can create beautiful and intuitive websites that will help your business stand out online. Whether you need a simple brochure website or a more complex e-commerce site, I can design and develop a custom solution that meets your needs.",
    img: productDesign,

    delay: "500",
  },
  {
    title: " Front-End Development",
    desc: "I specialize in front-end development and can help you bring your website to life with clean, well-structured code. From responsive design to custom animations and interactions, I can create a seamless user experience that will keep your visitors engaged and coming back for more.",
    img: frontEnd,
    isRed: true,
  },
  {
    title: "Website Optimization",
    desc: "In today's competitive online landscape, having a fast and optimized website is essential. I can help you optimize your site for speed, performance, and search engines, ensuring that your visitors have a seamless experience and that your site ranks well in search results.",
    img: optimizing,
    isRed: false,
  },
];
export const skills = [
  {
    name: "HTML",
    progress: "95%",
    bg: "linear-gradient(to right, #ff6b6b, #d62b2b)",
    delay: "300",
  },
  {
    name: "CSS",
    progress: "80%",
    bg: "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
    delay: "400",
  },
  {
    name: "Javascript & ES6",
    progress: "85%",
    bg: "linear-gradient(to right, #DECBA4, #3E5151)",
    delay: "500",
  },
  {
    name: "React JS",
    progress: "95%",
    bg: "linear-gradient(to right, #8360c3, #2ebf91)",
    delay: "600",
  },
  {
    name: "Next JS",
    progress: "70%",
    bg: "linear-gradient(to right, #8e2de2, #4a00e0)",
    delay: "700",
  },
  {
    name: "Bootstrap",
    progress: "95%",
    bg: "linear-gradient(to right, #fffbd5, #b20a2c)",
    delay: "800",
  },
  {
    name: "Tailwind CSS",
    progress: "85%",
    bg: "linear-gradient(to right, #fc5c7d, #6a82fb)",
    delay: "900",
  },
  {
    name: "Redux toolkit",
    progress: "95%",
    bg: " linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
    delay: "1000",
  },
  {
    name: "SASS",
    progress: "90%",
    bg: "linear-gradient(to right, #00b4db, #0083b0)",
    delay: "1100",
  },
  {
    name: "Github",
    progress: "85%",
    bg: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
    delay: "1200",
  },
  {
    name: "Jquery",
    progress: "65%",
    bg: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    delay: "1300",
  },
  {
    name: "C++",
    progress: "65%",
    bg: "linear-gradient(to right, #00b09b, #96c93d)",
    delay: "1400",
  },
  {
    name: "OOP",
    progress: "65%",
    bg: "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
    delay: "1500",
  },
];
export const stats = [
  {
    title: "years of exeperience",
    num: "+1",
  },
  {
    title: "clients",
    num: "+20",
  },
  {
    title: "compeleted projects",
    num: "+20",
  },
];
export const projects = [
  {
    id: 1,
    img: fittness,
    name: "Fitness",
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "in progress",
    tech: ["HTML , CSS , JS , React JS , Bootstrap, Redux"],
    demo: "https://fitness.technomasrsystems.com/",
    delay: "400",
  },
  {
    id: 2,
    name: "El Shorouk Hospital",
    img: elshorouk,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "Done",
    tech: ["HTML , CSS , JS , React JS , Tailwind CSS, Redux"],
    demo: "http://elshoroukhospital.com/",
    delay: "500",
  },
  {
    id: 3,
    name: "Q-tab",
    img: qtab,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "in Reveiw",
    tech: ["HTML , CSS , JS , React JS, Bootstrap, Redux"],
    demo: "https://qutap.co/",
    delay: "600",
  },
  {
    id: 4,
    name: "Switch",
    img: switchIo,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "Done",
    tech: ["HTML , CSS , JS , bootstrap, Jquery "],
    demo: "https://switch-id.co/",
    delay: "700",
  },
  {
    id: 5,
    name: "Al-Mosawi",
    img: alMosawi,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "Done",
    tech: ["HTML , CSS , JS , bootstrap, React JS "],
    demo: "http://almosawi.technomasrsystems.com/",
    delay: "800",
  },
  {
    id: 7,
    name: "Beaches",
    img: beaches,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "Done",
    tech: ["HTML , CSS , JS , Tailwind CSS, React JS "],
    demo: "https://trips-around-the-world.netlify.app/",
    delay: "1000",
  },
  {
    id: 6,
    name: "Dom",
    img: dom,
    desc: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "Done",
    tech: ["HTML , CSS , JS , Tailwind CSS, React JS "],
    demo: "https://resturant-app-landing-page.netlify.app/",
    delay: "900",
  },
];
