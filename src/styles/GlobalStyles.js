import { createGlobalStyle } from 'styled-components';
import * as color from '../config/colors';
import * as fonts from '../config/fonts';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
        width: 100%;
        height: 100%;
        background-color: ${color.primaryColor};
        margin: 0 0 3rem 0;

        font-family: 'Roboto', sans-serif;
        font-size: ${fonts.normalFontSize};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
`;
