import React from "react";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
// import { NewWindow } from "react-window-open";
// import { ReactNewWindowStyles } from "react-new-window-styles";
import NewWindow from "react-new-window";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
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
import {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";
import { GlobalContext } from "../../context/GlobalContext";

const LyricsContainer = styled("div")`
  ${(props) => props.fullHeight && "height: 100vh;"}
  text-align: center;
  padding-top: 3em;
  font-weight: bold;
  font-size: ${(props) => props.renderScale || "3"}em;
  ${(props) => props.dark && "background-color: black;"}
  ${(props) => props.dark && "color: white;"}
  & p {
    white-space: pre-wrap;
  }
`;

const PageNumber = styled("div")`
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 1rem;
  font-weight: normal;
  color: grey;
`;

const SettingsSection = styled("div")`
  margin: 3px 0;
  padding-left: 0.5rem;
  border-left: 2px solid lightgrey;
  &:hover {
    border-left: 2px solid grey;
  }
  transition: all 0.2s ease;
`;

function LyricSlidesPage() {
  const context = React.useContext(GlobalContext);
  const { showError, showSuccess } = context || {
    // Default values if context is null
    showError: () => {},
    showSuccess: () => {},
  };
  const theme = useTheme();

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
  const [useMarkdown, setUseMarkdown] = React.useState(false);
  const [usePlainPreview, setUsePlainPreview] = React.useState(false);
  const [styleStanzaTitle, setStyleStanzaTitle] = React.useState(true);
  const [styleIgnoreFirst, setStyleIgnoreFirst] = React.useState(true);

  const handleSplitTypeChange = (e, newType) =>
    newType !== null && setSplitType(newType);

  // Add one more slide at the end, which will be the 'finished' slide
  const pageNext = () =>
    slideText.length !== 0 && setPage(Math.min(page + 1, slideText.length - 1));
  const pagePrev = () => setPage(Math.max(page - 1, 0));

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") pagePrev();
    else if (event.key === "ArrowRight") pageNext();
  });

  // Update slide text (applying the new settings)
  const updateSlides = () => {
    let newSlideText = [];
    // Split raw input
    // Note: Non-capturing group is required because otherwise js
    // will insert the group between the outputs
    switch (splitType) {
      case "whitespace":
        // Split when there are at least new lines, including any between and
        // end-trailing whitespace (to not break markdown)
        newSlideText = text.split(/\n[^\S\n]*\n\s*/);
        break;

      case "configHeading":
        // Split between config headings (e.g. [some text here]) with new line before and after,
        // including any between and end-trailing whitespace
        newSlideText = text
          // Ignores config heading at the start of input, so it doesn't come with an initial blank slide
          .replace(/^\s*\[.*?\]\s*/, "")
          .split(/\n\s*\[.*?\][^\S\n]*\n\s*/);
        break;

      case "custom":
        try {
          newSlideText = text.split(new RegExp(String.raw`${customSplit}`));
        } catch (error) {
          showError(error.message);
        }
        break;

      default:
        break;
    }

    // Update styling
    // Note: using a nexted if to leave room to extend to more styling options
    if (useMarkdown) {
      if (styleStanzaTitle) {
        newSlideText = newSlideText.map((t, i) =>
          styleIgnoreFirst && i === 0
            ? // Ignore first slide
              t
            : t.replace(
                /^([^\r\n]*?(?:verse|chorus|bridge)[^\r\n]*?)(\n|$)/i,
                "*$1*$2"
              )
        );
      }
    }

    setSlideText(newSlideText);
    setPage((p) => Math.min(p, newSlideText.length - 1));
  };

  const parseInput = () => {
    updateSlides();

    if (!showSlides) {
      setShowSlides(true);
      showSuccess("Slides opened in new window.");
      setPage(0);
    }
  };

  // New Window keypress handlers
  React.useEffect(() => {
    if (popupRef.current) {
      // Attach keyboard event listener
      popupRef.current.window.document.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    // Remove keyboard event listener
    return () => {
      if (popupRef.current) {
        popupRef.current.window.document.removeEventListener(
          "keydown",
          handleKeyDown
        );
      }
    };
  }, [showSlides, handleKeyDown]);

  const onNewWindowUnload = () => {
    setShowSlides(false);
  };

  return (
    <>
      <Helmet>
        <title>Lyric Slides | dustbringer.github.io</title>
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
            Please close and reopen the slides after changing these settings.
            <SettingsSection>
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                }
                label="Dark Mode"
              />
            </SettingsSection>
            <SettingsSection>
              <Typography variant="body1">Split</Typography>
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
                  <ToggleButton
                    value="whitespace"
                    disableRipple
                    title="New lines; collapsing duplicates"
                  >
                    New Lines
                  </ToggleButton>
                  <ToggleButton
                    value="configHeading"
                    disableRipple
                    title="A heading in square brackets"
                  >
                    [Config]
                  </ToggleButton>
                  <ToggleButton
                    value="custom"
                    disableRipple
                    title="Custom slide splitter in regex"
                  >
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
            </SettingsSection>
            <SettingsSection>
              <Typography variant="body1">Styling</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={useMarkdown}
                    onChange={(e) => setUseMarkdown(e.target.checked)}
                  />
                }
                label="Use Markdown"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={usePlainPreview}
                    onChange={(e) => setUsePlainPreview(e.target.checked)}
                    disabled={!useMarkdown}
                  />
                }
                label="Plain Preview"
                title="Stop rendering markdown in preview"
              />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={styleStanzaTitle}
                    onChange={(e) => setStyleStanzaTitle(e.target.checked)}
                    disabled={!useMarkdown}
                  />
                }
                label="Style Stanza Title"
                title="Style first line of stanza if they include: verse, chorus, bridge"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={styleIgnoreFirst}
                    onChange={(e) => setStyleIgnoreFirst(e.target.checked)}
                    disabled={!useMarkdown}
                  />
                }
                label="Ignore First Slide"
              />
            </SettingsSection>
            <Button
              variant="contained"
              disableRipple
              onClick={updateSlides}
              title="Update"
            >
              Update
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
              {useMarkdown ? (
                <MarkdownNoContents children={slideText[page]} />
              ) : (
                <p>{slideText[page]}</p>
              )}
              <PageNumber>
                {page + 1}/{slideText.length}
              </PageNumber>
            </LyricsContainer>
          </NewWindow>
        )}
        <Box
          tabIndex="0"
          sx={{
            padding: "5px",
            borderRadius: "5px",
            border: `2px solid white`,
            "&:hover": { border: `2px solid lightgrey` },
            "&:focus": { border: `2px solid grey` },
          }}
          onKeyDown={handleKeyDown}
        >
          Preview
          <PageNavigation
            text={`${page + 1}/${slideText.length}`}
            onPrev={pagePrev}
            onNext={pageNext}
            prevDisabled={page + 1 <= 1}
            nextDisabled={page + 1 >= slideText.length}
          />
          <LyricsContainer renderScale={renderScale}>
            {useMarkdown && !usePlainPreview ? (
              <MarkdownNoContents children={slideText[page]} />
            ) : (
              <p>{slideText[page]}</p>
            )}
          </LyricsContainer>
        </Box>
      </Container>
    </>
  );
}

export default LyricSlidesPage;
