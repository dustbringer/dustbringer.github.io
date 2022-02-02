import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import moment from "moment";

import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  root: {
    textAlign: "left",
    margin: "10px",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 140,
  },
  tag: {
    margin: "0 2px",
  },
};

function BlogListCard({ name, title, description, date, tags, path }) {
  return (
    <Card sx={styles.root} variant="outlined">
      <CardActionArea onClick={() => navigate(path)} title={`${name}.md`}>
        <CardContent>
          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="h5" component="h5" display="inline">
              {title ? title : "Unknown Title"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="i">
              {" "}
              {date && moment(date).isValid()
                ? moment(date).format("YYYY-MM-DD")
                : "Unknown Date"}
            </Typography>

            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </Box>
          {tags &&
            tags.map((tag, i) => {
              return <Chip key={i} sx={styles.tag} size="small" label={tag} />;
            })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogListCard;
