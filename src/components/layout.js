import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

import Nav from './Nav';
import Footer from './Footer';

const Wrapper = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

const Main = styled.main`
  padding-top: 10rem;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
