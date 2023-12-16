// Input options from https://katex.org/docs/options.html
// Supported latex https://katex.org/docs/supported.html
// Macros with inputs: https://github.com/KaTeX/KaTeX/issues/2070#issuecomment-519833558

const macros = {
  "\\op": "\\operatorname{#1}",
  "\\vec": "\\mathbf{#1}",
  "\\norm": "{\\left\\lVert #1 \\right\\rVert}",
  "\\angl": "{\\left\\langle #1 \\right\\rangle}",
  "\\anglsmall": "{\\langle #1 \\rangle}",
  "\\ceil": "{\\left\\lceil #1 \\right\\rceil}",
  "\\floor": "{\\left\\lfloor #1 \\right\\rfloor}",
  "\\what": "\\widehat{#1}",
  "\\wtilde": "\\widetilde{#1}",
  "\\xto": "\\xrightarrow{#1}",
  "\\ol": "\\overline{#1}",
  "\\ul": "\\underline{#1}",
  "\\cat": "\\mathbf{#1}",
  "\\ep": "\\varepsilon",
  "\\vn": "\\varnothing",
  "\\Hom": "\\operatorname{Hom}",
};

export default macros;
