import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/UseDarkMode';
import { lightTheme, darkTheme } from './config/Themes';

import LandingPage from './views/LandingPage/index';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <LandingPage themeToggler={themeToggler} theme={theme} />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
