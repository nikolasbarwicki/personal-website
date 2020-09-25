import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 15rem 0 15rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = styled(Link)`
  display: block;
  height: 5rem;
  width: 16rem;
  background-color: ${(props) => props.theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadowBlue};
  margin-right: 5rem;
`;

const InvertedButtonLink = styled.a`
  display: block;
  height: 5rem;
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.blue};
  font-weight: 500;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.blue};
`;

const LinksWrapper = styled.div`
  display: flex;
  margin: 5rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <h1>
        Hi,
        <span role="img" aria-label="Waving hand emoji">
          {' '}
          👋
          <br />
        </span>
        I am Nikolas, Junior Frontend Developer
      </h1>
      <p>
        23 year old frontend developer and designer, based in Wroclaw, Poland.
        I&apos;m passionate about improving the lives of others through coding
        and constantly looking to learn new things everyday.
      </p>
      <LinksWrapper>
        <ButtonLink to="/blog">Visit blog</ButtonLink>
        <InvertedButtonLink href="https://github.com/nikolasbarwicki">
          See projects
        </InvertedButtonLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Hero;
