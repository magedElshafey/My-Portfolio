import React, { useState, useEffect } from 'react';
import style from './FixedBtns.module.css';
import whats from '../../../assets/social/icons8-whatsapp-48.png';
import phone from '../../../assets/social/icons8-phone-48.png';
import { AiOutlineArrowUp } from 'react-icons/ai';
const FixedBtns = () => {
	const [showArrow, setShowArrow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowArrow(true);
			} else {
				setShowArrow(false);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div>
			<div className={`${style.box}  ${showArrow ? style.show : style.hide}`} onClick={scrollToTop}>
				<AiOutlineArrowUp size={30} />
			</div>
			<a className={style.whats} href='https://wa.me/+201022153359' target='_blank'>
				<img src={whats} alt='whats/img' />
			</a>
			<a className={style.phone} href='tel:01019846513' target='_blank'>
				<img src={phone} alt='whats/img' />
			</a>
		</div>
	);
};

export default FixedBtns;
