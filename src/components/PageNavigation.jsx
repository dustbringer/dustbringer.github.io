import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const PageNavigation = ({ text, onPrev, onNext }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton color="primary" onClick={onPrev}>
          <NavigateBeforeIcon fontSize="small" />
        </IconButton>
        <Typography color="primary">{text}</Typography>
        <IconButton color="primary" onClick={onNext}>
          <NavigateNextIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};

PageNavigation.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default PageNavigation;
