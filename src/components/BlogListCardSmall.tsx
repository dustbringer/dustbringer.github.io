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
    "&:hover": {
      borderColor: "secondary.main",
    },
    transition: "all 0.25s ease-in-out",
  },
  media: {
    height: 140,
  },
  tag: {
    margin: "0 2px",
  },
};

function BlogListCardSmall({
  name,
  title,
  description,
  date,
  tags,
  path,
}: {
  name?: string;
  title?: string;
  description: string;
  date?: string;
  tags?: string[];
  path: string;
}) {
  return (
    <Card sx={styles.root} variant="outlined">
      <InternalLink to={path}>
        <CardActionArea title={name}>
          <CardContent sx={{ padding: "6px 10px" }}>
            <Typography
              variant="body1"
              display="inline"
              sx={{ fontWeight: "600", fontSize: "1.3em" }}
            >
              {title ? title : "Unknown Title"}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="i"
              sx={{ margin: "0 3px" }}
            >
              {" "}
              {date && moment(date).isValid()
                ? moment(date).format("DD MMMM YYYY")
                : ""}
            </Typography>

            <Typography variant="body2" component="p">
              {description}
            </Typography>
            <Box sx={{ margin: "3px 0" }}>
              {tags &&
                tags.map((tag, i) => {
                  return (
                    <Chip key={i} sx={styles.tag} size="small" label={tag} />
                  );
                })}
            </Box>
          </CardContent>
        </CardActionArea>
      </InternalLink>
    </Card>
  );
}

export default BlogListCardSmall;
