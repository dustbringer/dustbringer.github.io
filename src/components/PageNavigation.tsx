import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function PageNavigation({
  text,
  onPrev,
  onNext,
  prevDisabled = true,
  nextDisabled = true,
}: {
  text: string;
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        color="primary"
        onClick={onPrev}
        size="large"
        disabled={prevDisabled}
      >
        <NavigateBeforeIcon fontSize="small" />
      </IconButton>
      <Typography variant="body1">{text}</Typography>
      <IconButton
        color="primary"
        onClick={onNext}
        size="large"
        disabled={nextDisabled}
      >
        <NavigateNextIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default PageNavigation;
