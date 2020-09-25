import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

  }

  *::selection {
    color: #fff;
    background: ${theme.darkBlue};
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    color: ${theme.darkGray};
    line-height: 1.6;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
      color: ${theme.darkBlue};
      font-family: "Asap", sans-serif;
      line-height: 1.2;
  }

  h1 {
      font-size: 4.8rem;
      margin-bottom: 4rem;
  }

  h2 {
      font-size: 4.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
      font-size: 2rem;
  }
`;

export default GlobalStyle;
