import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import theme from '../styles/theme';

const Wrapper = styled.nav`
  z-index: 10;
  position: fixed;
  width: 110rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);

  @media screen and (max-width: 1100px) {
    width: calc(100% - 6rem);
    justify-content: space-between;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
`;

const LogoWrapper = styled.div`
  width: 50px;
  @media screen and (max-width: 600px) {
    max-width: 10vw;
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Link to="/">
        <LogoWrapper>
          <Img fluid={data.file.childImageSharp.fluid} alt="dummy text" />
        </LogoWrapper>
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
