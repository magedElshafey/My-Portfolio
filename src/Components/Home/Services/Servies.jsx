import React from 'react';
import style from './services.module.css';
import { services } from '../../../fakers/data';
import MainTitle from '../../Utiltes/mainTitle/MainTitle';
const Servies = () => {
	return (
		<div id='serv' className='container py-5 my-5' data-aos='fade-down' data-aos-offset='100'>
			<MainTitle title='our services' question='what I Offer ? ' />
			<div className='row mt-5 gap-4 justify-content-center'>
				{services.map((item, index) => (
					<div key={index} className={`${style.mainBox} ${item.isRed ? style.red : style.gray} col-12 col-md-3 mb-4 mb-md-0 p-3`}>
						<div className={`mb-4 d-flex justify-content-center ${item.isRed ? 'text-white' : style.redColor}`}>{item.img}</div>
						<p className='mb-3 text-center text-white fw-bold fs-4'>{item.title}</p>
						<p className={`lh ${item.isRed ? style.grayColor : 'text-white-50'}`}>{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Servies;
