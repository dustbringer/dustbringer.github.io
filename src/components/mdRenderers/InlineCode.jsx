import React from "react";
import styled from "styled-components";

function getCoreProps(props) {
  const source = props['data-sourcepos']
  return source ? {'data-sourcepos': source} : {}
}

const Inline = styled.code`
  color: #000;
  background-color: #f0f0f0;
  border-radius: 2px;
  padding: 0.2em 0.3em;
`;

const InlineCode = (props) => {
  return <Inline {...getCoreProps(props)}>{props.value}</Inline>;
};


export default InlineCode;
