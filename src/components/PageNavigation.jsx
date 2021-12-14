import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PageNavigation = ({ text, onPrev, onNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton color="primary" onClick={onPrev} size="large">
        <NavigateBeforeIcon fontSize="small" />
      </IconButton>
      <Typography color="primary">{text}</Typography>
      <IconButton color="primary" onClick={onNext} size="large">
        <NavigateNextIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

PageNavigation.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default PageNavigation;
