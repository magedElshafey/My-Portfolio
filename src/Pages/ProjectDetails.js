import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../fakers/data';
import HeroProject from '../Components/Project/HeroProject/HeroProject';
import Details from '../Components/Project/ProjectDetails/Details';
const ProjectDetails = () => {
	const params = useParams();
	const data = projects.filter((item) => item.id == params.id);

	return (
		<div>
			<HeroProject data={data[0]} />
			<Details data={data[0]} />
		</div>
	);
};

export default ProjectDetails;
