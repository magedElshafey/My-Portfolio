// social media icons
import mail from '../assets/social/icons8-gmail-logo-48.png';
import phone from '../assets/social/icons8-phone-48.png';
import linkedin from '../assets/social/icons8-linkedin-48.png';
import github from '../assets/social/icons8-github-48.png';
import whats from '../assets/social/icons8-whatsapp-48.png';
import face from '../assets/social/icons8-facebook-48.png';
import insta from '../assets/social/icons8-instagram-48.png';
// services
import { MdOutlineDesignServices } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import { SiGoogleoptimize } from 'react-icons/si';
// nav bar content
export const navLinks = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Skills',
		path: '#skills',
	},
	{
		title: 'Projects',
		path: '#projects',
	},
	{
		title: 'Statistics',
		path: '#stats',
	},
	{
		title: 'Services',
		path: '#serv',
	},
	{
		title: 'contact',
		path: '#contact',
	},
];
export const social = [
	{
		img: mail,
		ref: 'nailto:magedelshafey98@gmail.com',
	},
	{
		img: whats,
		ref: 'https://wa.me/+201022153359',
	},
	{
		img: phone,
		ref: 'tel:01019846513',
	},
	{
		img: linkedin,
		ref: 'https://www.linkedin.com/in/maged-elshafey',
	},
	{
		img: github,
		ref: 'https://github.com/magedElshafey',
	},
	{
		img: face,
		ref: 'https://www.facebook.com/maged.mahmoud.1829?mibextid=ZbWKwL',
	},
	{
		img: insta,
		ref: 'https://instagram.com/maged_el_shaf3y?igshid=NzMyMjgxZWIzNw==',
	},
];
export const services = [
	{
		title: 'Web design',
		desc: 'As a front-end developer, I have a keen eye for design and can create beautiful and intuitive websites that will help your business stand out online. Whether you need a simple brochure website or a more complex e-commerce site, I can design and develop a custom solution that meets your needs.',
		img: <MdOutlineDesignServices size={50} />,
		isRed: false,
		delay: '500',
	},
	{
		title: ' Front-End Development',
		desc: 'I specialize in front-end development and can help you bring your website to life with clean, well-structured code. From responsive design to custom animations and interactions, I can create a seamless user experience that will keep your visitors engaged and coming back for more.',
		img: <BsCodeSlash size={50} />,
		isRed: true,
		delay: '600',
	},
	{
		title: 'Website Optimization',
		desc: "In today's competitive online landscape, having a fast and optimized website is essential. I can help you optimize your site for speed, performance, and search engines, ensuring that your visitors have a seamless experience and that your site ranks well in search results.",
		img: <SiGoogleoptimize size={50} />,
		isRed: false,
		delay: '700',
	},
];
export const skills = [
	{
		name: 'HTML',
		progress: '95%',
		bg: 'linear-gradient(to right, #ff6b6b, #d62b2b)',
		delay: '300',
	},
	{
		name: 'CSS',
		progress: '80%',
		bg: 'linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )',
		delay: '400',
	},
	{
		name: 'Javascript & ES6',
		progress: '85%',
		bg: 'linear-gradient(to right, #DECBA4, #3E5151)',
		delay: '500',
	},
	{
		name: 'React JS',
		progress: '95%',
		bg: 'linear-gradient(to right, #8360c3, #2ebf91)',
		delay: '600',
	},
	{
		name: 'Next JS',
		progress: '70%',
		bg: 'linear-gradient(to right, #8e2de2, #4a00e0)',
		delay: '700',
	},
	{
		name: 'Bootstrap',
		progress: '95%',
		bg: 'linear-gradient(to right, #fffbd5, #b20a2c)',
		delay: '800',
	},
	{
		name: 'Tailwind CSS',
		progress: '85%',
		bg: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
		delay: '900',
	},
	{
		name: 'Redux toolkit',
		progress: '95%',
		bg: ' linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
		delay: '1000',
	},
	{
		name: 'SASS',
		progress: '90%',
		bg: 'linear-gradient(to right, #00b4db, #0083b0)',
		delay: '1100',
	},
	{
		name: 'Github',
		progress: '85%',
		bg: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
		delay: '1200',
	},
	{
		name: 'Jquery',
		progress: '65%',
		bg: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
		delay: '1300',
	},
	{
		name: 'C++',
		progress: '65%',
		bg: 'linear-gradient(to right, #00b09b, #96c93d)',
		delay: '1400',
	},
	{
		name: 'OOP',
		progress: '65%',
		bg: 'radial-gradient(circle farthest-side, #fceabb, #f8b500)',
		delay: '1500',
	},
];
export const stats = [
	{
		title: 'years of exeperience',
		num: '+1',
	},
	{
		title: 'clients',
		num: '+20',
	},
	{
		title: 'compeleted projects',
		num: '+20',
	},
];
