import React from 'react';
import style from './details.module.css';
import { CiSettings } from 'react-icons/ci';
const Details = ({ data }) => {
	return (
		<div className='container'>
			<h4 data-aos='fade-down' data-aos-delay='400' className={style.title}>
				Projects
			</h4>
			<p className='text-white fw-bolder fs-2' data-aos='fade-up' data-aos-delay='500'>
				Overview
			</p>
			<div className='row justify-content-center mt-4 py-5'>
				<div className='col-12 mb-4 mb-md-0 col-md-8'>
					<p className='text-white-50 lh mb-5' data-aos='fade-down' data-aos-delay='600'>
						{data.desc}
					</p>

					<a className={style.link} href={data.demo} target='_blank'>
						Demo
					</a>
				</div>
        <div data-aos='zoom-in-left' data-aos-delay='500' className={`col-10 col-md-4 p-3 ${style.techContainer}`}>
          <p className='mb-3 fw-bolder fs-4 text-center'>Technologies</p>
					<div className='d-flex flex-column gap-2'>
						{data.tech.map((item, index) => (
							<div key={index} className='d-flex gap-2 align-items-center'>
								<CiSettings size={20} />
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
