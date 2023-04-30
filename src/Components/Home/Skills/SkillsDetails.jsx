import React, { useEffect, useRef, useState } from 'react';
import style from './skillsDetails.module.css';
import { skills } from '../../../fakers/data';
import skillsImg from '../../../assets/skills.avif';
import MainTitle from '../../Utiltes/mainTitle/MainTitle';
const SkillsDetails = () => {
	const ref = useRef();
	const [userEnterd, setUserEnterd] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (scrollY >= ref.current.offsetTop) {
				setUserEnterd(true);
			} else {
				setUserEnterd(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<div data-aos='fade-down' data-aos-delay='300' data-aos-offset='50' ref={ref} id='skills' className='my-5 py-5 container'>
			<MainTitle title='skills' question='what can i do ? ' />

			<div className='row justify-content-center mt-5 pt-5'>
				<div className='col-12 col-md-6 mb-4 mb-md-0'>
					<img data-aos='zoom-in-right' data-aos-delay='500' src={skillsImg} alt='skills/img' className={` ${style.mainImg}`} />
				</div>
				<div className='col-12 col-md-6 mb-4 mb-md-0'>
					<div className='row gap-4 gap-md-5 justify-content-center'>
						{skills.map((skill, index) => (
							<div data-aos='fade-up' key={index} className='col-12 col-md-5'>
								<p className='text-white fw-bold mb-1'>{skill.name}</p>
								<div className={style.wraper}>
									<div className={style.progress} style={{ width: userEnterd ? skill.progress : '0', backgroundImage: skill.bg }}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsDetails;
