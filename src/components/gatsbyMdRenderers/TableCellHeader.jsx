import React from "react";
import styled, { css } from "styled-components";

const cellStyling = css`
  border: 1px solid #dddddd;
  padding: 6px 13px;
`;

const TableCellHeader = styled.th`
  ${cellStyling};
`;

export default TableCellHeader;