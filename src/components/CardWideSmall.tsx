import React from "react";
import moment from "moment";

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
    margin: "8px 0",
    // backgroundColor: "#fdfdfd",
    "&:hover": {
      borderColor: "secondary.main",
    },
    transition: "all 0.25s ease-in-out",
  },
};

function CardWideSmall({
  name,
  type,
  title,
  description,
  date = "",
  path,
  externalLink = false,
}: {
  name?: string;
  type?: string;
  title?: string;
  description: string;
  date?: string;
  path: string;
  externalLink?: boolean;
}) {
  return (
    <Card sx={styles.root} variant="outlined" title={name}>
      <InternalLink to={path} inPlace={externalLink}>
        <CardActionArea>
          <CardContent sx={{ padding: "6px 10px" }}>
            <Typography
              variant="body1"
              display="inline"
              sx={{ fontWeight: "600", fontSize: "1.3em" }}
            >
              {title ? title : "Unknown Title"}
            </Typography>
            {date && (
              <Typography variant="body2" color="textSecondary" component="i">
                {" "}
                {date && moment(date).isValid()
                  ? moment(date).format("YYYY-MM-DD")
                  : "Unknown Date"}
              </Typography>
            )}
            <Typography variant="body2">{description}</Typography>
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

export default CardWideSmall;
