// Input options from https://katex.org/docs/options.html
// Supported latex https://katex.org/docs/supported.html
// Macros with inputs: https://github.com/KaTeX/KaTeX/issues/2070#issuecomment-519833558

export default {
  "\\op": "\\operatorname{#1}",
  "\\vec": "\\mathbf{#1}",
  "\\norm": "{\\left\\lVert #1 \\right\\rVert}",
  "\\angl": "{\\left\\langle #1 \\right\\rangle}",
  "\\ol": "\\overline{#1}",
  "\\ep": "\\varepsilon",
};
