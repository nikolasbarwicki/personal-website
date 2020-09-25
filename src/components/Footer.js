import React from 'react';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaDribbble, FaEnvelope } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  color: ${(props) => props.theme.lightGray};

  hr {
    border: 1px solid ${(props) => props.theme.lightGray};
  }
`;

const IconsWrapper = styled.div`
  svg {
    margin-left: 2.5rem;
  }
`;

const Footer = () => {
  return (
    <>
      <footer>
        <hr />
        <Wrapper>
          <span>© 2020 Nikolas Barwicki</span>
          <IconContext.Provider value={{ size: '2.5rem' }}>
            <IconsWrapper>
              <FaEnvelope />
              <FaDribbble />
              <FiGithub />
              <FiLinkedin />
            </IconsWrapper>
          </IconContext.Provider>
        </Wrapper>
      </footer>
    </>
  );
};

export default Footer;
