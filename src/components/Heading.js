import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;

  a {
    color: ${(props) => props.theme.blue};
    font-weight: 500;
  }
`;

const Heading = ({ headingText, linkText, linkTo, anchor }) => {
  return (
    <Wrapper>
      <h2>{headingText}</h2>
      {anchor ? (
        <a href={linkTo}>{linkText}</a>
      ) : (
        <Link to={linkTo}>{linkText}</Link>
      )}
    </Wrapper>
  );
};

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
  anchor: PropTypes.bool,
};

Heading.defaultProps = {
  linkText: null,
  linkTo: null,
  anchor: false,
};

export default Heading;
