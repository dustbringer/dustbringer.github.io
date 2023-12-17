import React from "react";
import { styled, css, useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import type { Heading } from "../../context/GlobalContext";

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

// Type of prop in components using this css module know the implicitly passed 'theme'
// but type of prop here does not. To avoid the component requiring a theme component,
// we ask for 'theme' in styled component using this, by
//   ${(props) => contentsEntry(props.theme)};
const contentsEntry = (theme: Theme) => (props: { depth: number }) =>
  css`
    display: block;
    margin: 0;
    padding: 0;
    padding-left: ${props.depth * 10}px;
    font-size: 0.8em;
    font-weight: 600;
    cursor: pointer;
    opacity: 60%;
    color: ${theme.palette.mode === "dark" ? "#DDD" : "black"};
    &:hover {
      opacity: 75%;
      background-color: ${theme.palette.mode === "dark" ? "#222" : "#efefef"};
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
  ${(props) => contentsEntry(props.theme)};
  background-color: ${(props) =>
    props.theme.palette.mode === "dark" ? "#333" : "#efefef"};
`;

const StyledA = styled("a")`
  text-decoration: none;
  ${(props) => contentsEntry(props.theme)};
`;

const StyledSpan = styled("span")`
  ${(props) => contentsEntry(props.theme)};
`;

const stripHTMLTags = (str: string) => str && str.replace(/(<([^>]+)>)/gi, "");

/**
 * NOTE
 * This current system has a global "contents" state. Contents will only
 * display correctly if only one Markdown document is displayed per page
 */

type Props = {
  headings: Heading[];
};

function Contents({ headings }: Props) {
  return (
    <FormatDiv>
      {headings.map((h, i) => {
        return (
          <StyledSpan
            depth={h.depth}
            title={stripHTMLTags(h.text)}
            role="button"
            key={i}
            onClick={() => h?.ref?.current?.scrollIntoView()}
          >
            {stripHTMLTags(h.text)}
          </StyledSpan>
        );
      })}
    </FormatDiv>
  );
}

export function ContentsWithTop({ headings }: Props) {
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
            onClick={() => h?.ref?.current?.scrollIntoView()}
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
export function ContentsWithLinksTop({ headings }: Props) {
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
