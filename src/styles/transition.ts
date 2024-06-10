import { styled, css } from "@mui/material/styles";

// default transition for switching light-dark mode
const transition = (type: string = "all") => css`
  transition: ${type} 0.25s ease-in-out;
`;

export default transition;
