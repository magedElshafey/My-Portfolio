import React, { useEffect } from "react";
import Aos from "aos";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Meta from "./Components/Utiltes/Meta/Meta";
import Nav from "./Components/Layout/Nav/Nav";
import Home from "./Pages/Home";
import FixedBtns from "./Components/Utiltes/FixedBtns/FixedBtns";
import Footer from "./Components/Layout/Footer/Footer";
const App = () => {
  // initiate animation
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);

  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <Router>
      <Meta />
      <ScrollToTopAfterChangePage />
      <FixedBtns />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
/*
    <Footer /> 
*/
