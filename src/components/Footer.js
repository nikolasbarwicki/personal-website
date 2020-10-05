import React from 'react';
import styled from 'styled-components';
import MailIcon from '../assets/icons/mail.svg';
import DribbbleIcon from '../assets/icons/dribbble.svg';
import GithubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  color: ${(props) => props.theme.lightGray};

  svg {
    margin-left: 2.5rem;
    fill: ${(props) => props.theme.lightGray};
    cursor: pointer;

    :hover {
      fill: ${(props) => props.theme.blue};
    }
  }
`;

const Footer = () => {
  return (
    <footer style={{ marginTop: '3.5rem' }}>
      <hr />
      <Wrapper>
        <span>© 2020 Nikolas Barwicki</span>
        <div style={{ height: '25px' }}>
          <a href="mailto:hello@nikolasbarwicki.com">
            <MailIcon width="25" height="25" />
          </a>
          <a href="https://github.com/nikolasbarwicki">
            <GithubIcon width="25" height="25" />
          </a>
          <a href="https://www.linkedin.com/in/nikolas-barwicki/">
            <LinkedInIcon width="25" height="25" />
          </a>
          <a href="https://dribbble.com/barwicki">
            <DribbbleIcon width="25" height="25" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
