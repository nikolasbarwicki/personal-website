import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 7rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  background-color: ${(props) => props.theme.blue};
  border-radius: 3rem;
  margin: 7rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 60%;
  }

  a {
    display: block;
    height: 5rem;
    width: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.blue};
    background-color: #ffffff;
    font-weight: 500;
    border-radius: 1rem;
    border: 2px solid ${(props) => props.theme.blue};
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <span>
        Want to get in touch? Feel free to reach out for collaborations or just
        a friendly hello
      </span>
      <a href="mailto:hello@nikolasbarwicki.com">@ email</a>
    </Wrapper>
  );
};

export default Banner;
