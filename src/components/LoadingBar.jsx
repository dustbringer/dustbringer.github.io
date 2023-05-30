import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

const Border = styled("div")`
  outline: 2.5px solid darkgrey;
  border-radius: 100px;
  height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Bar = styled("div")`
  background-color: ${(props) => props.color || "skyblue"};
  width: ${(props) => props.fill || 0}%;
  height: 1rem;
  border-radius: ${(props) =>
    props.fill >= 100 ? "10px" : "10px 4px 4px 10px"};
  display: flex;
  align-items: center;
  transition: all 0.75s ease-in-out;
`;

const Number = styled(Typography)`
  font-weight: bold;
  margin-left: auto;
  padding: 0 4px;
`;

function LoadingBar({ cur, max }) {
  const theme = useTheme();

  return (
    <Border>
      <Bar color={theme.palette.primary.light} fill={(cur / max) * 100}>
        <Number variant="body2">{Math.min(cur, max)}</Number>
      </Bar>
      {cur < max && <Number variant="body2">{max}</Number>}
    </Border>
  );
}

export default LoadingBar;
