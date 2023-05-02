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
    title: "Services",
    path: "#serv",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
  },

  {
    title: "Statistics",
    path: "#stats",
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

export const projects = [
  {
    id: 1,
    img: fittness,
    name: "Fitness",
    desc: "the ultimate destination for fitness enthusiasts! This sleek and dynamic website has been crafted to cater to all your fitness needs and goals, whether you are a gym-goer or an online coaching enthusiast. With a user-friendly interface and comprehensive information 'Fittness for Gym' is your go-to source for everything related to fitness. From detailed workout plans to success stories of real people who have transformed their lives with our online coaching program, we have it all. Get inspired by our transformation stories and take the first step towards a healthier, happier you. Whether you are a beginner or a pro, 'Fittness for Gym' has something for everyone. Download our app today and get access to exclusive workout plans and coaching packages tailored to your specific needs.",
    status: "in progress",
    tech: ["HTML", "CSS", "JS", "React JS", "Bootstrap", "Redux"],
    demo: "https://fitness.technomasrsystems.com/",
    delay: "400",
  },
  {
    id: 2,
    name: "El Shorouk Hospital",
    img: elshorouk,
    desc: "El Shorouk Hospital Website: A Comprehensive Platform for Patient Care As a front end developer, I had the opportunity to build a dynamic and user-friendly website for El Shorouk Hospital. This website is a one-stop solution for patients seeking information about the hospital and its doctors. With a clean and modern design, the website is easy to navigate, providing a seamless experience for users. The website features detailed information about the hospital's services, including specialties, departments, and medical procedures. Patients can easily browse through the doctors' profiles, where they can find information about their qualifications, experience, and areas of expertise. The website also includes a convenient doctor's appointment system, where patients can book appointments with their preferred doctors easily and efficiently. One of the most useful features of the website is the filter option, which allows patients to narrow down their search based on their preferred date or gender. With this feature, patients can quickly find the right doctor for their specific needs, ensuring they receive the best possible care. Overall, the El Shorouk Hospital website is a comprehensive platform that offers patients all the information they need to make informed decisions about their healthcare. It is designed to be accessible, informative, and user-friendly, providing a superior patient experience. As a front end developer, I am proud to have worked on this project and to have contributed to the betterment of healthcare services.",
    status: "Done",
    tech: ["HTML", "CSS", "JS", " React JS", "Tailwind CSS", "Redux"],
    demo: "http://elshoroukhospital.com/",
    delay: "500",
  },
  {
    id: 3,
    name: "Q-tab",
    img: qtab,
    desc: "Qtab is a stunning and innovative website that focuses on the world of NFC cards. As a front-end developer, I have brought this project to life with a modern, sleek, and user-friendly design that caters to all the needs of our clients. Qtab provides a complete and immersive experience, where users can find all the information about the institution and its products in one place. Our website offers a comprehensive authentication process that ensures the safety and security of our users' data, as well as a seamless cart cycle and checkout process. One of the key features of Qtab is the product details page, which provides users with all the information they need to make informed decisions about the products they want to purchase. Additionally, the website offers a user dashboard that allows users to personalize their cards with their preferred templates and information. They can add, delete, update and even share their cards with other users, making the process easy and convenient. ",
    status: "in Reveiw",
    tech: ["HTML", "CSS", "JS", "React JS", "Bootstrap", "Redux"],
    demo: "https://qutap.co/",
    delay: "600",
  },
  {
    id: 4,
    name: "Switch",
    img: switchIo,
    desc: "As a front-end developer, I had the opportunity to create a captivating landing page for Switch - a mobile application that revolutionizes the way we use NFC cards. The goal of the landing page was to provide users with all the necessary information about the application and entice them to download it from the Play and Apple stores. The landing page was designed to be visually appealing and easy to navigate, with a user-friendly interface that seamlessly guides visitors through the app's features and benefits. It also includes a section where users can purchase products related to the app, with a complete cart cycle that ensures a smooth shopping experience. I am particularly proud of how I integrated the app's functionality into the design, allowing users to get a glimpse of what they can expect from the app. With a strong focus on user experience, I ensured that the landing page provided all the necessary information while keeping the design minimalistic and clutter-free. Overall, I am confident that my work on the Switch landing page showcases my expertise in front-end development and highlights my ability to create visually stunning and functional web pages that drive user engagement and conversions.",
    status: "Done",
    tech: ["HTML", "CSS", "JS", "bootstrap", "Jquery"],
    demo: "https://switch-id.co/",
    delay: "700",
  },
  {
    id: 5,
    name: "Al-Mosawi",
    img: alMosawi,
    desc: "AllMosawi, a comprehensive website dedicated to all things Forex trading! As a front-end developer, I am proud to showcase this platform, which offers a wealth of knowledge and resources to help individuals learn about and master the art of Forex trading. At AllMosawi, visitors can discover everything they need to know about Ahmed al-Mosawi's company and its offerings. Our website boasts a sleek design that is both easy to navigate and visually appealing. From detailed information about Forex trading to insights into our Forex trading courses, users will find everything they need to succeed in the Forex market. Our team is dedicated to providing users with the most up-to-date information, trends, and strategies for Forex trading. With our in-depth articles, videos, and tutorials, users can gain valuable knowledge and hone their trading skills Whether you are a novice or an experienced trader, AllMosawi is the ultimate resource for Forex trading. Join our community today and take your trading to the next level!",
    status: "Done",
    tech: ["HTML", "CSS", "JS", "bootstrap", "React JS"],
    demo: "http://almosawi.technomasrsystems.com/",
    delay: "800",
  },

  {
    id: 6,
    name: "Dom",
    img: dom,
    desc: "As a front-end developer, I had the pleasure of creating a captivating landing page for a restaurant called Dom. The website is designed to showcase all the delicious meals and dishes available at the restaurant, while also making it easy for users to navigate and filter their search. One of the standout features of this landing page is the ability for users to filter the meals and foods by price and category. This ensures that users can quickly find the perfect meal to fit their budget or dietary preferences. In addition to the filtering system, the landing page also highlights the restaurant's best-selling meals, enticing users to try out their most popular dishes.Overall, the Dom landing page is a perfect blend of functionality and aesthetic appeal. It showcases the restaurant's offerings in a visually appealing way, while also providing users with the tools they need to find the perfect meal. As a front-end developer, I am proud to have played a role in creating this impressive website.",
    status: "Done",
    tech: ["HTML", "CSS", "JS", "Tailwind CSS", "React JS"],
    demo: "https://resturant-app-landing-page.netlify.app/",
    delay: "900",
  },
];
export const stats = [
  {
    title: "years of exeperience",
    num: "+1",
    delay: "500",
  },
  {
    title: "clients",
    num: "+20",
    delay: "600",
  },
  {
    title: "compeleted projects",
    num: "+20",
    delay: "700",
  },
];
