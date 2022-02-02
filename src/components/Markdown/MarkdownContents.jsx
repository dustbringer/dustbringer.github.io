import React from "react";
import styled from "styled-components";

/**
 * NOTES
 *     white-space is for single new lines to be registered
 */
const FormatDiv = styled.div`
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

const StyledSpan = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  padding-left: ${(props) => props.depth * 10}px;
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

/**
 * NOTE
 * This current system has a global "contents" state. Contents will only
 * display correctly if only one Markdown document is displayed per page
 */
function MarkdownContents({ headings }) {
  return (
    <FormatDiv>
      {headings.map((h, i) => {
        return (
          <StyledSpan
            depth={h.depth}
            title={h.text}
            role="button"
            key={i}
            onClick={() =>
              h && h.ref && h.ref.current && h.ref.current.scrollIntoView()
            }
          >
            {h.text}
          </StyledSpan>
        );
      })}
    </FormatDiv>
  );
}

export default MarkdownContents;
