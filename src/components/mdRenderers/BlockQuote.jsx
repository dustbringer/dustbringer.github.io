import React from "react";
import styled from "styled-components";

function getCoreProps(props) {
  const source = props['data-sourcepos']
  return source ? {'data-sourcepos': source} : {}
}

const Quote = styled.blockquote`
  color: #6a737d;
  border-left: 4px solid #dfe2e5;
  padding: 0.25em 1em;
  margin: 0.75em;
  & > p {
    margin: 0.25em 0;
  }
`;

const InlineCode = (props) => {
  return <Quote {...getCoreProps(props)}>{props.children}</Quote>;
};

export default InlineCode;
