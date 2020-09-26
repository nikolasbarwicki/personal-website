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
  margin: 0 auto;
  padding-top: 10rem;
  max-width: ${(props) => (props.fullWidth ? '110rem' : '72rem')};
`;

const Layout = ({ children, fullWidth }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Nav />
        <Main fullWidth={fullWidth}>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  fullWidth: false,
};

export default Layout;
