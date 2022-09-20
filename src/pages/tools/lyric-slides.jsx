import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
// import { NewWindow } from "react-window-open";
// import { ReactNewWindowStyles } from "react-new-window-styles";
import NewWindow from "react-new-window";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import TextField from "../../components/TextFieldPaddingFixed";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { DivMarginBottom } from "../../components/styled/Divs";
import Accordion from "../../components/Accordion";
import PageNavigation from "../../components/PageNavigation";
import Code from "../../components/Markdown/Code";
import Container from "../../components/Container";
import HorizontalRule from "../../components/Markdown/HorizontalRule";
import { GlobalContext } from "../../context/GlobalContext";

const LyricsContainer = styled.div`
  ${(props) => props.fullHeight && "height: 100vh;"}
  white-space: pre-wrap;
  text-align: center;
  padding-top: 3em;
  font-weight: bold;
  font-size: ${(props) => props.renderScale || "3"}em;
  ${(props) => props.dark && "background-color: black;"}
  ${(props) => props.dark && "color: white;"}
`;

const PageNumber = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 1rem;
  font-weight: normal;
  color: grey;
`;

function LyricSlidesPage() {
  const context = React.useContext(GlobalContext);
  const { showError, showSuccess } = context || {
    // Default values if context is null
    showError: () => {},
    showSuccess: () => {},
  };

  // Access new window through a ref
  // https://github.com/rmariuzzo/react-new-window/issues/34#issuecomment-651939230
  const popupRef = React.useRef(null);
  const [text, setText] = React.useState("");
  const [slideText, setSlideText] = React.useState([""]);
  const [showSlides, setShowSlides] = React.useState(false);
  const [page, setPage] = React.useState(0);

  // Settings
  const [renderScale, setRenderScale] = React.useState(3);
  const [darkMode, setDarkMode] = React.useState(true);
  const [splitType, setSplitType] = React.useState("whitespace");
  const [customSplit, setCustomSplit] = React.useState("");

  const handleSplitTypeChange = (e, newType) =>
    newType !== null && setSplitType(newType);

  // Add one more slide at the end, which will be the 'finished' slide
  const pageNext = () =>
    slideText.length !== 0 && setPage(Math.min(page + 1, slideText.length - 1));
  const pagePrev = () => setPage(Math.max(page - 1, 0));

  const handleKeyPress = React.useCallback((event) => {
    if (event.key === "ArrowLeft") pagePrev();
    else if (event.key === "ArrowRight") pageNext();
  });

  React.useEffect(() => {
    // Attach keyboard event listener
    document.addEventListener("keydown", handleKeyPress);

    // Remove keyboard event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Update slides with choice of how to split input
  const updateSlides = () => {
    switch (splitType) {
      case "whitespace":
        // Split when there are multiple new lines, ignoring whitespace
        setSlideText(text.split(/\n(?:[^\S\n]*\n)+/));
        break;

      case "configHeading":
        // Split between config headings (e.g. [some text here]) separated by new lines, ignoring whitespace
        // Also ignores first occurence, so it doesn't come with an initial blank slide
        setSlideText(
          text
            .replace(/^\s*\[.*?\]\s*/, "")
            .split(/(?:[^\S\n]*\n)*\[.*?\](?:[^\S\n]*\n)+/)
        );
        break;

      case "custom":
        try {
          setSlideText(text.split(new RegExp(String.raw`${customSplit}`)));
        } catch (error) {
          showError(error.message);
        }
        break;

      default:
        break;
    }
  };

  const parseInput = () => {
    updateSlides();

    if (!showSlides) {
      setShowSlides(true);
      showSuccess("Slides opened in new window.");
      setPage(0);
    }
  };

  // New Window
  React.useEffect(() => {
    if (popupRef.current) {
      // Attach keyboard event listener
      popupRef.current.window.document.addEventListener(
        "keydown",
        handleKeyPress
      );
    }

    // Remove keyboard event listener
    return () => {
      if (popupRef.current) {
        popupRef.current.window.document.removeEventListener(
          "keydown",
          handleKeyPress
        );
      }
    };
  }, [showSlides, handleKeyPress]);

  const onNewWindowUnload = () => {
    setShowSlides(false);
  };

  return (
    <>
      <Helmet>
        <title>Lyric Slides - dustbringer.github.io</title>
        <meta name="description" content="Lyric Slides" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Lyric Slides</Typography>
        <Typography variant="body1" gutterBottom>
          Shows lyrics with slides.
        </Typography>
        <DivMarginBottom>
          <Accordion title="Settings">
            <strong>Warning!</strong> Changing these display settings while the
            slides are being presented will result in styling being removed.
            <HorizontalRule />
            Rendered font size (in <Code inline>em</Code>)
            <Slider
              value={renderScale}
              onChange={(e) => setRenderScale(e.target.value)}
              step={0.1}
              marks
              min={0.5}
              max={5.0}
              valueLabelDisplay="auto"
            />
            <Box sx={{ marginLeft: "11px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                }
                label="Dark Mode"
              />
            </Box>
            Split:
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <ToggleButtonGroup
                color="primary"
                size="small"
                exclusive
                sx={{ m: "6px" }}
                value={splitType}
                onChange={handleSplitTypeChange}
              >
                <ToggleButton value="whitespace" disableRipple>
                  New Lines
                </ToggleButton>
                <ToggleButton value="configHeading" disableRipple>
                  Headings in square brackets
                </ToggleButton>
                <ToggleButton value="custom" disableRipple>
                  Custom
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                placeholder="Custom Split"
                value={customSplit}
                onChange={(e) => setCustomSplit(e.target.value)}
                disabled={splitType !== "custom"}
                size="small"
              />
            </Box>
            <Button
              variant="contained"
              disableRipple
              sx={{ margin: "8px", marginRight: 0 }}
              onClick={updateSlides}
              title="Update"
            >
              Update Text
            </Button>
          </Accordion>
        </DivMarginBottom>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <TextField
            label="Input"
            rows={10}
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            disableRipple
            sx={{ margin: "8px", marginRight: 0 }}
            onClick={parseInput}
            title="Run"
          >
            <PresentToAllIcon />
          </Button>
        </Box>
        {/* Using window.open (react-new-window and react-popout do not work with gatsby) */}
        {showSlides && (
          <NewWindow ref={popupRef} onUnload={onNewWindowUnload}>
            <LyricsContainer
              renderScale={renderScale}
              dark={darkMode}
              fullHeight
            >
              {slideText[page]}
              <PageNumber>
                {page + 1}/{slideText.length}
              </PageNumber>
            </LyricsContainer>
          </NewWindow>
        )}
        Preview:
        <PageNavigation
          text={`${page + 1}/${slideText.length}`}
          onPrev={pagePrev}
          onNext={pageNext}
        />
        <LyricsContainer renderScale={renderScale}>
          {slideText[page]}
        </LyricsContainer>
      </Container>
    </>
  );
}

export default LyricSlidesPage;
