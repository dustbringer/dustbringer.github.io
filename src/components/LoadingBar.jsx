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
  position: relative;
`;

const Bar = styled("div")`
  background-color: ${(props) => props.color || "skyblue"};
  width: ${(props) => props.fill || 0}%;
  height: 1rem;
  border-radius: ${(props) =>
    props.fill >= 100 ? "10px" : "10px 4px 4px 10px"};
  display: flex;
  align-items: center;
  transition: all 1s linear;
  overflow: hidden; // hides number inside when short
`;

const Number = styled(Typography)`
  font-weight: bold;
  margin-left: auto;
  padding: 0 4px;
`;

const NumberRight = styled(Typography)`
  font-weight: bold;
  position: absolute;
  right: 4px;
  z-index: -1;
`;
const NumberLeft = styled(Typography)`
  font-weight: bold;
  position: absolute;
  left: 4px;
  z-index: -1;
`;

function LoadingBar({ cur, max, dispCur, dispMax }) {
  const theme = useTheme();
  cur = Math.max(cur, 0); // ignore negative cur

  return (
    <Border>
      <Bar color={theme.palette.primary.main} fill={(cur / max) * 100}>
        <Number variant="body2" color="black">
          {dispCur ? dispCur : Math.min(cur, max)}
        </Number>
      </Bar>

      <NumberRight variant="body2">{dispMax ? dispMax : max}</NumberRight>
    </Border>
  );
}

export default LoadingBar;
