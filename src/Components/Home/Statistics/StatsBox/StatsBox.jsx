import React from 'react';
import style from '../stats.module.css';
const StatsBox = ({ title, num }) => {
	return (
		<div className={`col-12 col-md-3 ${style.mainBox} p-3 text-center`}>
			<p className={`${style.num} fs-2 fw-bolder mb-2`}>{num}</p>
			<p className='text-center text-white fw-bold'>{title}</p>
		</div>
	);
};

export default StatsBox;
