import { createGlobalStyle } from 'styled-components';
import * as fonts from '../config/fonts';
import * as variables from '../config/variables';

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
        background-color: ${({ theme }) => theme.primaryColor};
        font-family: 'Roboto', sans-serif;
        font-size: ${fonts.normalFontSize};
        transition: ${variables.delay};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      transition: ${variables.delay};
    }
    p, span {
      transition: ${variables.delay};
    }
    ::-webkit-scrollbar {
      width: 0.6rem;
      background-color:  ${({ theme }) => theme.scrollBar};
      border-radius: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color:  ${({ theme }) => theme.scrollThumb};
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color:  ${({ theme }) => theme.h2};
    }
`;
