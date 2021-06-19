import Nav from './Nav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import Blog from './Blog';

function LandingPage() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Blog />
      <Skills />
      <Qualification />
      <Portfolio />
    </>
  );
}

export default LandingPage;
