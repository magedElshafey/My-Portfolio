import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Meta from './Components/Utiltes/Meta/Meta';
import Nav from './Components/Layout/Nav/Nav';
import Home from './Pages/Home';
import FixedBtns from './Components/Utiltes/FixedBtns/FixedBtns';
import Footer from './Components/Layout/Footer/Footer';
import Spinner from './Components/Spinner/Spinner';
import ProjectDetails from './Pages/ProjectDetails';
const App = () => {
	// initiate animation
	useEffect(() => {
		Aos.init({
			offset: 0,
			duration: 1200,
		});
	}, []);
	// handle scroll
	function ScrollToTopAfterChangePage() {
		const { pathname } = useLocation();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
		return null;
	}
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<Router>
					<Meta />
					<ScrollToTopAfterChangePage />
					<FixedBtns />
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
					<Routes>
						<Route path='/:id' element={<ProjectDetails />} />
					</Routes>
					<Footer />
				</Router>
			)}
		</div>
	);
};

export default App;
/*
    <Footer /> 
*/
