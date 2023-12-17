import React from "react";
import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

const Background = styled("div")`
  position: relative;
  background-color: ${(props) => props.color || "#EEE"};
  height: 3px;
  border-radius: 2px;
  display: flex;
  justify-content: start;
  overflow: hidden;
`;

type ForegroundProps = { fill: number };
const Foreground = styled("div")`
  background-color: ${(props) => props.color || "skyblue"};
  width: ${(props: ForegroundProps) => Math.min(props.fill || 0, 100)}%;
  height: 3px;
  border-radius: 2px 0px 0px 2px;
  transition: all 1s linear;
`;

const Dot = styled("div")`
  background-color: ${(props) => props.color || "white"};
  height: 3px;
  width: 5px;
`;

/*
  A thin horizontal loading bar. No text.
 */
function LoadingBarThin({ cur, max }: { cur: number; max: number }) {
  const theme = useTheme();
  cur = Math.max(cur, 0); // ignore negative cur

  return (
    <Background color={theme.palette.mode === "light" ? "darkgrey" : "grey"}>
      <Foreground color={theme.palette.primary.main} fill={(cur / max) * 100} />
      <Dot />
    </Background>
  );
}

export default LoadingBarThin;
