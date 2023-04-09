import React from "react";
import { styled, css } from "@mui/material/styles";

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
  border-left: 2px solid #2f324155;
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
  font-weight: 700;
  cursor: pointer;
  opacity: 50%;
  &:hover {
    opacity: 75%;
    background-color: #efefef;
  }
  &:active {
    opacity: 100%;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledA = styled("a")`
  color: black;
  text-decoration: none;
  ${contentsEntry}
`;

const Top = styled("span")`
  ${contentsEntry};
  background-color: #dddddd;
  opacity: 60%;
  &:hover {
    background-color: #dddddd;
  }
`;

const stripHTMLTags = (str) => str.replace(/(<([^>]+)>)/gi, "");

function Contents({ headings }) {
  return (
    <FormatDiv>
      <Top
        depth={1}
        title="Top"
        role="button"
        onClick={() => window.scrollTo(0, 0)}
      >
        Top
      </Top>

      {headings.map((h, i) => {
        return (
          <StyledA
            depth={h.depth}
            title={stripHTMLTags(h.value)}
            role="button"
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
