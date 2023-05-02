import React from 'react';
import style from './stats.module.css';
import { stats } from '../../../fakers/data';
import MainTitle from '../../Utiltes/mainTitle/MainTitle';
const Statistics = () => {
	return (
		<div id='stats' data-aos='fade-up' data-aos-delay='400' data-aos-offset='100' className={style.mainContainer}>
			<div className='container'>
				<MainTitle title='statistics' />
				<div className='d-flex justify-content-center align-items-center flex-column flex-md-row flex-wrap gap-5 my-5 '>
					{stats.map((item, index) => (
						<div data-aos='zoom-in-right' data-aos-delay={item.delay} className={`d-flex justify-content-center align-items-center p-3 ${style.mainBox}`} key={index}>
							<div className='text-center'>
								<p className={`fw-bolder mb-0 ${style.num}`}>{item.num}</p>
								<p className={` ${style.title}`}>{item.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Statistics;
