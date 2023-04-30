import React, { useState, useEffect, useRef } from 'react';
import style from './stats.module.css';
import { stats } from '../../../fakers/data';
import StatsBox from './StatsBox/StatsBox';
const Statistics = () => {
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const [number, setNumber] = useState(0);
	console.log('hello from number', number);
	useEffect(() => {
		if (window.scrollY >= el.current.offsetTop - 2000) {
			setShouldAnimate(true);
		} else {
			setShouldAnimate(false);
		}
	}, []);
	useEffect(() => {
		if (shouldAnimate) {
			stats.forEach((item) => {
				let goalNum = parseInt(item.num);
				console.log(goalNum);
				setNumber(goalNum);
			});
		}
	}, [shouldAnimate]);
	const el = useRef();

	return (
		<div ref={el} id='stats' className='container py-5 my-5'>
			<div className='row gap-5 justify-content-center'>
				{stats.map((item, index) => (
					<div className='col-12 col-md-4 mb-3 mb-md-0' key={index}></div>
				))}
			</div>
		</div>
	);
};

export default Statistics;
