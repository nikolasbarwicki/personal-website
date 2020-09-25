import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../styles/theme';

const Wrapper = styled.nav`
  position: fixed;
  width: 110rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Link to="/">
        <span>Logo</span>
      </Link>
      <NavLinks>
        <Link
          to="/blog"
          activeStyle={{ color: theme.darkBlue, fontWeight: 500 }}
        >
          Blog
        </Link>
        <Link
          to="/about"
          activeStyle={{ color: theme.darkBlue, fontWeight: 500 }}
        >
          About
        </Link>
      </NavLinks>
    </Wrapper>
  );
};

export default Nav;
