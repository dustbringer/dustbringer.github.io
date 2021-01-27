import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 100%;
`;

const Image = (props) => {
  return <StyledImg {...props} />;
};

export default Image;
