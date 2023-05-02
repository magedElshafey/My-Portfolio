import React from 'react';
import style from './heroProject.module.css';
const HeroProject = ({ data }) => {
	return (
		<div className='mb-5'>
			<div className={style.imgContainer}>
				<img alt='project/img' src={data.img} className={style.mainImg} />
				<div className={`d-flex justify-content-center align-items-center ${style.overlay}`}>
					<div className='d-flex flex-column align-items-center text-white'>
						<p className =  {`${style.name} fw-bolder`}>{data.name}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroProject;
