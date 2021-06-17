import GlobalStyles from './styles/GlobalStyles';

import Nav from './components/Nav/index';
import Home from './components/Home/index';
import About from './components/About/index';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <GlobalStyles />
    </>
  );
}

export default App;
