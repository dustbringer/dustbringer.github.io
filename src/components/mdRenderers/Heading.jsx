import React from "react";
import styled, { css } from "styled-components";
import { LinkIcon } from "@primer/octicons-react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import { GlobalContext } from "../../GlobalContext";
import { createTag } from "../../util/mdHeadings";

// From default renderer
function getCoreProps(props) {
  const source = props["data-sourcepos"];
  return source ? { "data-sourcepos": source } : {};
}

// Styled components
const removeMargin = css`
  margin: 0;
`;

const hover = css`
  &:hover a {
    visibility: visible;
  }
`;

const StyledH1 = styled.h1`
  ${removeMargin};
  font-size: 3em;
  font-weight: 500;
`;

const StyledH2 = styled.h2`
  ${removeMargin};
  font-size: 2.5em;
  font-weight: 500;
`;

const StyledH3 = styled.h3`
  ${removeMargin};
  font-size: 2em;
  font-weight: 600;
`;

const StyledH4 = styled.h4`
  ${removeMargin};
  font-size: 1.75em;
  font-weight: 600;
`;

const StyledH5 = styled.h5`
  ${removeMargin};
  font-size: 1.5em;
  font-weight: 700;
`;

const StyledH6 = styled.h6`
  ${removeMargin};
  font-size: 1.25em;
  font-weight: 700;
`;

const Anchor = styled.a`
  color: #24292e;
  padding: 8px;
  visibility: hidden;
`;

/**
 * Anchor helper functions.
 * Base code from https://github.com/remarkjs/react-markdown/issues/69
 */

// Not a very nice way to generate incrementing id
let id = 0;
const generateId = () => ++id;

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

const Heading = (props) => {
  const context = React.useContext(GlobalContext);
  const { addMdHeading } = context;
  const location = useLocation();
  const headingRef = React.useRef(null);

  // Get styled heading type
  let HeadingType;
  switch (props.level) {
    case 1:
      HeadingType = StyledH1;
      break;
    case 2:
      HeadingType = StyledH2;
      break;
    case 3:
      HeadingType = StyledH3;
      break;
    case 4:
      HeadingType = StyledH4;
      break;
    case 5:
      HeadingType = StyledH5;
      break;
    case 6:
      HeadingType = StyledH6;
      break;
    default:
      HeadingType = "p";
  }

  /*
   * remark-slug and remark-autolink-headings plugins not working, so I did it myself
   * (see above for the original slug generator code)
   */

  // Get text in children
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");

  /* FOR anchor link:
    Remove non-(alphanumeric+whitespace) characters and replace non-word with dashes
  */
  // const slug = createTag(text, generateId());

  React.useEffect(() => {
    // Add heading to list (for table of contents)
    addMdHeading(text, props.level, headingRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

/*
  React.useEffect(() => {
    id = 0; // reset id
    if (qs.parse(location.search, { ignoreQueryPrefix: true }).ref === slug) {
      headingRef.current.scrollIntoView();
    }
  }, [location.search, slug]);
*/

  return (
    <HeadingType ref={headingRef} {...getCoreProps(props)}>
      {props.children}
      {/* Anchor links (not aligned on fresh pages)

      props.children.length > 0 && (
        <Anchor href={`#${location.pathname}?ref=${slug}`}>
          <LinkIcon verticalAlign="middle" />
        </Anchor>
      )*/}
    </HeadingType>
  );
};

export default Heading;
