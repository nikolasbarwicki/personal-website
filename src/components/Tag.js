import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Wrapper = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.lightBlue};
  padding: 0.6rem 1.3rem;
  border-radius: 2rem;
  margin-left: 1rem;
`;

const Tag = ({ linkTo, text }) => {
  return <Wrapper to={linkTo}>{text}</Wrapper>;
};

Tag.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tag;
