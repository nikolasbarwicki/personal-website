/* eslint-disable */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';

const Pre = styled.pre`
  text-align: left;
  margin: 0.5rem -2.5rem 2.5rem -2.5rem;
  padding: 2rem;
  border-radius: 1rem;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const Code = (props) => {
  const className = props.children.props.className || '';

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children.props.children.trim()}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNumber>{i + 1}</LineNumber>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
