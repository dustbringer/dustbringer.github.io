import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 100%;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Image(props) {
  return (
    <CenterDiv>
      <StyledImg {...props} />
    </CenterDiv>
  );
}

export default Image;
