import React from "react";
import styled from "styled-components";

const StyledHr = styled.hr`
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
`;

const HorizontalRule = (props) => {
  return <StyledHr />;
};

export default HorizontalRule;
