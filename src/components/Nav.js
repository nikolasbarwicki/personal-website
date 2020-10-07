import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
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
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Link to="/">
        <div>
          <Img fixed={data.file.childImageSharp.fixed} alt="dummy text" />
        </div>
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
