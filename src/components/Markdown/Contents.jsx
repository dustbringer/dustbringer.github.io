import React from "react";
import { styled, css } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

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
    ${(props) => (props.theme.palette.mode === "dark" ? "#333" : "#BBB")};
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
  color: ${props.theme.palette.mode === "dark" ? "#DDD" : "black"};
  &:hover {
    opacity: 75%;
    background-color: ${props.theme.palette.mode === "dark"
      ? "#222"
      : "#efefef"};
  }
  &:active {
    opacity: 90%;
  }
  transition: all 0.25s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Top = styled("span")`
  ${contentsEntry};
  background-color: ${(props) =>
    props.theme.palette.mode === "dark" ? "#333" : "#efefef"};
`;

const StyledA = styled("a")`
  text-decoration: none;
  ${contentsEntry}
`;

const StyledSpan = styled("span")`
  ${contentsEntry}
`;

const stripHTMLTags = (str) => str && str.replace(/(<([^>]+)>)/gi, "");

/**
 * NOTE
 * This current system has a global "contents" state. Contents will only
 * display correctly if only one Markdown document is displayed per page
 */
function Contents({ headings }) {
  return (
    <FormatDiv>
      {headings.map((h, i) => {
        return (
          <StyledSpan
            depth={h.depth}
            title={stripHTMLTags(h.text)}
            role="button"
            key={i}
            onClick={() =>
              h && h.ref && h.ref.current && h.ref.current.scrollIntoView()
            }
          >
            {stripHTMLTags(h.text)}
          </StyledSpan>
        );
      })}
    </FormatDiv>
  );
}

export function ContentsWithTop({ headings }) {
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
          <StyledSpan
            depth={h.depth}
            title={stripHTMLTags(h.text)}
            role="button"
            key={i}
            onClick={() =>
              h && h.ref && h.ref.current && h.ref.current.scrollIntoView()
            }
          >
            {stripHTMLTags(h.text)}
          </StyledSpan>
        );
      })}
    </FormatDiv>
  );
}

// Navigation using hash links
// For use with gatsby markdown
export function ContentsWithLinksTop({ headings }) {
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
