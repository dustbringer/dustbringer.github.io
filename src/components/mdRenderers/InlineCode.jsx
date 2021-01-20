import React from "react";
import styled from "styled-components";

const Inline = styled.code`
  color: #000;
  background-color: #f0f0f0;
  border-radius: 3px;
  padding: 0.2em 0.3em;
`;

const InlineCode = (props) => {
  return <Inline>{props.value}</Inline>;
};


export default InlineCode;
