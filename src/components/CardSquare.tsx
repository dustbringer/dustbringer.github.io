import React from "react";

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
    // backgroundColor: "#fdfdfd",
    width: "200px",
    height: "160px",
    transition: "all 0.25s ease-in-out",
    "&:hover": {
      borderColor: "secondary.main",
    },
  },
  cardContent: {
    position: "relative",
    padding: "16px",
  },
  type: {
    position: "absolute",
    fontStyle: "italic",
  },
};

function CardSquare({
  name,
  type,
  title,
  description,
  path,
  externalLink = false,
}: {
  name?: string;
  type?: string;
  title?: string;
  description: string;
  path: string;
  externalLink?: boolean;
}) {
  return (
    <Card sx={styles.root} variant="outlined">
      <InternalLink to={path} inPlace={externalLink}>
        <CardActionArea title={name}>
          <CardContent
            sx={{
              height: styles.root.height,
              ...styles.cardContent,
            }}
          >
            <Typography variant="h6" component="h6" sx={{ lineHeight: "1.2" }}>
              {title ? title : "Unknown Title"}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              {description}
            </Typography>
            {type && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  bottom: styles.cardContent.padding,
                  ...styles.type,
                }}
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

export default CardSquare;
