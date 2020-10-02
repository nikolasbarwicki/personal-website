import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Blockquote = styled.blockquote`
  padding: 3rem;
  margin: 2rem 0;
  background-color: #f1f5ff;
  color: #383b40;
  border-left: 3px solid #59a1ff;

  ${({ variant }) =>
    (variant === 'danger' &&
      css`
        background-color: #ffe2e2;
        border-left: 3px solid #ea6d50;
      `) ||
    (variant === 'warning' &&
      css`
        background-color: #fff3e4;
        border-left: 3px solid #ff8113;
      `) ||
    (variant === 'success' &&
      css`
        background-color: #e2f7e9;
        border-left: 3px solid #46da57;
      `)}

  p {
    margin: 0;
    line-height: 1.75;
  }
`;

const Callout = ({ children, variant }) => {
  return <Blockquote variant={variant}>{children}</Blockquote>;
};

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

Callout.defaultProps = {
  variant: null,
};

export default Callout;
