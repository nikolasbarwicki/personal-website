import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 15rem 0 15rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 10rem 0 10rem;
  }
`;

const Button = styled.button`
  display: block;
  height: 5rem;
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.blue};
  color: white;
  box-shadow: ${(props) => props.theme.shadowBlue};
  margin-right: 5rem;

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${(props) => props.theme.blue};
      background-color: white;
      border: 2px solid ${(props) => props.theme.blue};
      box-shadow: none;
    `}
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
      <div style={{ display: 'flex', margin: '5rem' }}>
        <Button as={Link} to="/blog">
          Visit blog
        </Button>
        <Button secondary as="a" href="https://github.com/nikolasbarwicki">
          See projects
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
