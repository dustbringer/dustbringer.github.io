import * as React from "react";
import { styled, css } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Prism } from "react-syntax-highlighter";
import {
  prism,
  tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type StyledCodeInlineProps = {
  prismstyle: {
    [key: string]: React.CSSProperties;
  };
};

const StyledCodeInline = styled("code")`
  color: ${(props: StyledCodeInlineProps) =>
    props.prismstyle?.[`pre[class*="language-"]`]?.color};
  background-color: ${(props) =>
    props.prismstyle?.['pre[class*="language-"]']?.background};
  border-radius: 2px;
  padding: 0.2em 0.3em;
`;

function Code(props: {
  inline: boolean;
  language: string;
  children: string | string[];
}) {
  const theme = useTheme();
  const style = theme.palette.mode === "dark" ? tomorrow : prism;

  return props.inline !== undefined ? (
    <StyledCodeInline {...props} prismstyle={style}>
      {props.children}
    </StyledCodeInline>
  ) : (
    <Prism language={props.language} style={style} children={props.children} />
  );
}

// function Code(props) {
//   return <code>{props.children}</code>;
// }

export default Code;
