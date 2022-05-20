import React from "react";
import styled from "styled-components";

import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { LinkBare as InternalLink } from "./InternalLink";

const styles = {
  root: {
    textAlign: "left",
    margin: "10px",
    backgroundColor: "#fdfdfd",
    width: "200px",
    height: "160px",
    transition: "border-color 0.25s",
    "&:hover": {
      borderColor: "secondary.main",
    },
  },
};

function CardSmall({ name, type = "", title, description, path }) {
  return (
    <Card sx={styles.root} variant="outlined">
      <InternalLink to={path}>
        <CardActionArea title={name ? name : title}>
          <CardContent>
            <Typography variant="h5" component="h5">
              {title ? title : "Unknown Title"}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              {description}
            </Typography>
            {type && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                {type}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </InternalLink>
    </Card>
  );
}

export default CardSmall;
