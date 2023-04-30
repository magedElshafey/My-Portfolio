import React from 'react';
import Hero from '../Components/Home/hero/Hero';

import About from '../Components/Home/about/About';
import SkillsDetails from '../Components/Home/Skills/SkillsDetails';
import Servies from '../Components/Home/Services/Servies';
import Statistics from '../Components/Home/Statistics/Statistics';

const Home = () => {
	return (
		<div>
			<Hero />
			<Servies />
			<About />
			<SkillsDetails />
			<Statistics />
		</div>
	);
};

export default Home;
