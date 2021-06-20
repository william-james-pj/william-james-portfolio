import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Footer from './Footer';
import ScrollUp from '../../components/ScrollUp';

function LandingPage() {
  const [activeScroll, setActiveScroll] = useState(false);
  const [activeScrollUp, setActiveScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, ['']);

  const scroll = () => {
    if (window.scrollY >= 80) setActiveScroll(true);
    else setActiveScroll(false);

    if (window.scrollY >= 560) setActiveScrollUp(true);
    else setActiveScrollUp(false);
  };

  return (
    <>
      <Nav scroll={activeScroll} />
      <Home />
      <About />
      <Blog />
      <Skills />
      <Qualification />
      <Portfolio />
      <Footer />
      <ScrollUp scroll={activeScrollUp} />
    </>
  );
}

export default LandingPage;
