import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

const Border = styled("div")`
  outline: 2px solid ${(props) => props.color || "darkgrey"};
  border-radius: 100px;
  height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

type BarProps = { fill: number };
const Bar = styled("div")`
  background-color: ${(props) => props.color || "skyblue"};
  width: ${(props: BarProps) => props.fill || 0}%;
  height: 1rem;
  border-radius: ${(props: BarProps) =>
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

function LoadingBar({
  cur,
  max,
  dispCur,
  dispMax,
}: {
  cur: number;
  max: number;
  dispCur: number;
  dispMax: number;
}) {
  const theme = useTheme();
  cur = Math.max(cur, 0); // ignore negative cur
  dispCur = Math.max(dispCur, 0);

  const shownCur =
    dispCur !== undefined && dispMax !== undefined
      ? cur < max // show dispCur/dispMax depending on finer details in cur and max (seconds)
        ? dispCur
        : dispMax
      : Math.min(cur, max);

  const shownMax = dispMax ? dispMax : max;

  return (
    <Border title={`${shownCur}/${shownMax} min`}>
      <Bar color={theme.palette.primary.main} fill={(cur / max) * 100}>
        <Number
          variant="body2"
          color={theme.palette.mode === "light" ? "#F4F4F4" : "black"}
        >
          {shownCur}
        </Number>
      </Bar>

      <NumberRight variant="body2">{shownMax}</NumberRight>
    </Border>
  );
}

export default LoadingBar;
