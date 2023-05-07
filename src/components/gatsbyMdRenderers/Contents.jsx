import React from "react";
import { styled, css } from "@mui/material/styles";
import { useTheme } from '@mui/material/styles';

/**
 * NOTES
 *     white-space is for single new lines to be registered
 */
const FormatDiv = styled("div")`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  font-size: 16px;
  user-select: none;
  white-space: pre-line;
  width: 200px;
  position: sticky;
  top: 1vw;
  margin-left: -210px;
  margin-top: 50px;
  border-left: 2px solid
    ${(props) => (props.colormode === "dark" ? "#333" : "#BBB")};
  transition: all 0.25s ease-in-out;
  @media (max-width: 1375px) {
    display: none;
  }
`;

const contentsEntry = (props) => css`
  display: block;
  margin: 0;
  padding: 0;
  padding-left: ${props.depth * 10}px;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
  opacity: 60%;
  color: ${props.colormode === "dark" ? "#DDD" : "black"};
  &:hover {
    opacity: 75%;
    background-color: ${props.colormode === "dark" ? "#222" : "#efefef"};
  }
  &:active {
    opacity: 90%;
  }
  transition: all 0.25s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledA = styled("a")`
  text-decoration: none;
  ${contentsEntry}
`;

const Top = styled("span")`
  ${contentsEntry};
  background-color: ${(props) =>
    props.colormode === "dark" ? "#222" : "#efefef"};
`;

const stripHTMLTags = (str) => str.replace(/(<([^>]+)>)/gi, "");

function Contents({ headings }) {
  const theme = useTheme();

  return (
    <FormatDiv colormode={theme.palette.mode}>
      <Top
        depth={1}
        title="Top"
        role="button"
        onClick={() => window.scrollTo(0, 0)}
        colormode={theme.palette.mode}
      >
        Top
      </Top>

      {headings.map((h, i) => {
        return (
          <StyledA
            depth={h.depth}
            title={stripHTMLTags(h.value)}
            role="button"
            colormode={theme.palette.mode}
            key={i}
            href={`#${h.id}`}
          >
            {stripHTMLTags(h.value)}
          </StyledA>
        );
      })}
    </FormatDiv>
  );
}

export default Contents;
