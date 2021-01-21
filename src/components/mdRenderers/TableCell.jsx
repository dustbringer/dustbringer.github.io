import React from "react";
import styled, { css } from "styled-components";

function getCoreProps(props) {
  const source = props["data-sourcepos"];
  return source ? { "data-sourcepos": source } : {};
}

const cellStyling = css`
  border: 1px solid #dddddd;
  padding: 6px 13px;
`;

const StyledHeaderCell = styled.th`
  ${cellStyling};
`;

const StyledCell = styled.td`
  ${cellStyling};
`;


// Original with edit for borders and jsx
const TableCell = (props) => {
  const style = props.align ? { textAlign: props.align } : undefined;
  const coreProps = getCoreProps(props);

  const Element = props.isHeader ? StyledHeaderCell : StyledCell;

  return (
    <Element style={style ? { ...style, ...coreProps } : coreProps}>
      {props.children}
    </Element>
  );
};

export default TableCell;
