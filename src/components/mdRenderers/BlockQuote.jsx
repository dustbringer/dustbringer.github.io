import React from "react";
import styled from "styled-components";

const Quote = styled.blockquote`
  color: #6a737d;
  background-color: #fbfbfc;
  border-left: 4px solid #dfe2e5;
  padding: 0 0.6em;
  margin: 0.75em;
`;

const InlineCode = (props) => {
  return <Quote>{props.children}</Quote>;
};

export default InlineCode;
