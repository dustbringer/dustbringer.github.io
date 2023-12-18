import React from "react";
import { styled, css } from "@mui/material/styles";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Container from "../../components/Container";
import Link from "../../components/Link";

const SmallText = styled(Typography)`
  font-size: 0.8em;
  color: #aaaaaa;
`;

// Edited from https://stackoverflow.com/a/61599269
// need this "extends unknown" otherwise the generic is read as JSX
const remDupe = <T extends unknown>(
  arr: (T | string)[],
  caseInsensitive: boolean
) => {
  const temp: (T | string)[] = [];
  return [
    ...new Set(
      !caseInsensitive
        ? arr
        : arr.filter((x) => {
            const _x = typeof x === "string" ? x.toLowerCase() : x;
            if (!temp.includes(_x)) {
              temp.push(_x);
              return true;
            }
            return false;
          })
    ),
  ];
};

// Arguments: text list, options
// Return: array of parsed text with duplicates removed
const parseInput = (
  text: string,
  useCustomInSep: boolean = false,
  customInSep: string = "",
  caseIns: boolean = false,
  ignoreEmpty: boolean = false,
  keepTrailingWhitespace: boolean = false
) => {
  let temp = text;
  let result = [];

  if (keepTrailingWhitespace) {
    // temp = temp.split(/,|\r\n|\n|\r/);
    result = temp.split(
      new RegExp(useCustomInSep ? customInSep : /,|\r\n|\n|\r/)
    );
  } else {
    result = temp
      // Strip whitespace off the ends of the input
      .replace(/^\s+|\s+$/g, "")
      // Split the input into an array
      // temp = temp.split(/\s*,\s*|\s*\n\s*|\s*\r\s*/);
      .split(
        new RegExp(
          useCustomInSep
            ? String.raw`\s*${customInSep}\s*`
            : /\s*,\s*|\s*\n\s*|\s*\r\s*/
        )
      );
    // Note: Brackets in regex = keep the match in the resulting string
    // Examples/Source: https://stackoverflow.com/questions/12001953/javascript-and-regex-split-string-and-keep-the-separator
  }

  // Remove duplicates
  // Using sets: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  result = remDupe(result, caseIns);
  if (ignoreEmpty) result = result.filter((x) => x);

  return { inputSize: temp.length, result: result };
};

function DuplicateRemoverPage() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  // Input Settings
  const [useCustomInSep, setUseCustomInSep] = React.useState(false);
  const [customInSep, setCustomInSep] = React.useState("");
  const [caseIns, setCaseIns] = React.useState(false);
  const [ignoreEmpty, setIgnoreEmpty] = React.useState(false);
  const [keepTrailingWhitespace, setKeepTrailingWhitespace] =
    React.useState(false);

  // Output Settings
  const [useCustomOutSep, setUseCustomOutSep] = React.useState(false);
  const [customOutSep, setCustomOutSep] = React.useState("");
  const [outputDisplay, setOutputDisplay] = React.useState("none");
  const [outputSort, setOutputSort] = React.useState("none");

  const handleOutputDisplayChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newDisplay: string
  ) => newDisplay !== null && setOutputDisplay(newDisplay);
  const handleOutputSortChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newSort: string
  ) => newSort !== null && setOutputSort(newSort);

  // Extra data
  const [inputSize, setInputSize] = React.useState(0);
  const [outputSize, setOutputSize] = React.useState(0);

  const run: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const parsedInput = parseInput(
      input,
      useCustomInSep,
      customInSep,
      caseIns,
      ignoreEmpty,
      keepTrailingWhitespace
    );
    let outputList = parsedInput.result;

    setInputSize(parsedInput.inputSize);
    setOutputSize(outputList.length);

    // Sort
    if (outputSort === "asc") outputList = outputList.sort();
    else if (outputSort === "desc") outputList = outputList.sort().reverse();

    let output = outputList.join(useCustomOutSep ? customOutSep : "\n");
    // Lowercase
    if (outputDisplay === "uppercase") output = output.toUpperCase();
    else if (outputDisplay === "lowercase") output = output.toLowerCase();

    setOutput(output);
  };

  return (
    <>
      <Helmet>
        <title>Duplicate Remover | dustbringer.github.io</title>
        <meta name="description" content="Duplicate Remover" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Duplicate Remover</Typography>
        <Typography variant="body1" gutterBottom>
          Enter a list of strings into the box either comma or new line
          separated (default). Duplicate items in the list will be removed and
          the cleaned list will be displayed below. Use at your own risk.
          Inspired by <Link href="https://dedupelist.com/">DeDupeList</Link>.
        </Typography>

        <TextField
          label="Input"
          rows={6}
          multiline
          margin="dense"
          size="small"
          fullWidth
          autoFocus
          variant="outlined"
          inputProps={{
            style: {
              fontFamily: "Roboto Mono",
            },
          }}
          sx={{ marginTop: "8px", marginBottom: "8px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Box
          component="form"
          onSubmit={run}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormControl>
            <FormLabel>Input Settings</FormLabel>
            <FormGroup sx={{ margin: "8px 11px", marginLeft: "0px" }}>
              <FormGroup
                row
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                }}
              >
                <Checkbox
                  checked={useCustomInSep}
                  onChange={(e) => setUseCustomInSep(e.target.checked)}
                />
                <TextField
                  placeholder="Custom Separator (supports regex)"
                  value={customInSep}
                  onChange={(e) => setCustomInSep(e.target.value)}
                  disabled={!useCustomInSep}
                  size="small"
                  fullWidth
                />
              </FormGroup>

              <FormGroup row sx={{ marginLeft: "11px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={caseIns}
                      onChange={(e) => setCaseIns(e.target.checked)}
                    />
                  }
                  label="Case Insensitive"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ignoreEmpty}
                      onChange={(e) => setIgnoreEmpty(e.target.checked)}
                    />
                  }
                  label="Ignore Empty Input"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={keepTrailingWhitespace}
                      onChange={(e) =>
                        setKeepTrailingWhitespace(e.target.checked)
                      }
                    />
                  }
                  label="Keep Trailing Whitespace"
                />
              </FormGroup>
            </FormGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Output Settings</FormLabel>

            <FormGroup sx={{ margin: "8px 11px", marginLeft: "0px" }}>
              <FormGroup
                row
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                }}
              >
                <Checkbox
                  checked={useCustomOutSep}
                  onChange={(e) => setUseCustomOutSep(e.target.checked)}
                />
                <TextField
                  placeholder="Custom Separator"
                  value={customOutSep}
                  onChange={(e) => setCustomOutSep(e.target.value)}
                  disabled={!useCustomOutSep}
                  size="small"
                  fullWidth
                />
              </FormGroup>

              <FormGroup row sx={{ marginLeft: "11px" }}>
                <ToggleButtonGroup
                  color="primary"
                  size="small"
                  exclusive
                  fullWidth
                  sx={{ mt: "3px" }}
                  value={outputDisplay}
                  onChange={handleOutputDisplayChange}
                >
                  <ToggleButton value="none" disableRipple>
                    First Match
                  </ToggleButton>
                  <ToggleButton value="uppercase" disableRipple>
                    Uppercase
                  </ToggleButton>
                  <ToggleButton value="lowercase" disableRipple>
                    Lowercase
                  </ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup
                  color="primary"
                  size="small"
                  exclusive
                  fullWidth
                  sx={{ mt: "3px" }}
                  value={outputSort}
                  onChange={handleOutputSortChange}
                >
                  <ToggleButton value="none" disableRipple>
                    No Sort
                  </ToggleButton>
                  <ToggleButton value="asc" disableRipple>
                    Ascending
                  </ToggleButton>
                  <ToggleButton value="desc" disableRipple>
                    Descending
                  </ToggleButton>
                </ToggleButtonGroup>
              </FormGroup>
            </FormGroup>
          </FormControl>

          <Button
            variant="contained"
            disableRipple
            sx={{ margin: "8px", marginRight: 0 }}
            type="submit"
            title="Run"
          >
            <DirectionsRunIcon />
          </Button>
        </Box>

        <TextField
          label="Output"
          rows={6}
          multiline
          margin="dense"
          size="small"
          fullWidth
          variant="outlined"
          inputProps={{
            style: {
              fontFamily: "Roboto Mono",
            },
          }}
          sx={{ marginTop: "8px", marginBottom: "8px" }}
          value={output}
          onFocus={(e) => e.target.select()}
        />
        {/* Count occurences? */}
        {/* Sort by occurences? */}

        <SmallText variant="body1">
          {inputSize} input, {outputSize} output, {inputSize - outputSize}{" "}
          removed
        </SmallText>
        {/* Input count, output count, removed count */}
      </Container>
    </>
  );
}

export default DuplicateRemoverPage;
