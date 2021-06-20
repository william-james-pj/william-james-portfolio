import { createGlobalStyle } from 'styled-components';
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
        background-color: ${({ theme }) => theme.primaryColor};
        font-family: 'Roboto', sans-serif;
        font-size: ${fonts.normalFontSize};
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
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
