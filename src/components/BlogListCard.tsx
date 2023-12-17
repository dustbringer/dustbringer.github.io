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
    margin: "10px",
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

function BlogListCard({
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
          <CardContent>
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant="h5" component="h5" display="inline">
                {title ? title : "Unknown Title"}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="i">
                {" "}
                {date && moment(date).isValid()
                  ? moment(date).format("DD MMMM YYYY")
                  : ""}
              </Typography>

              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </Box>
            {tags &&
              tags.map((tag, i) => {
                return (
                  <Chip key={i} sx={styles.tag} size="small" label={tag} />
                );
              })}
          </CardContent>
        </CardActionArea>
      </InternalLink>
    </Card>
  );
}

export default BlogListCard;
