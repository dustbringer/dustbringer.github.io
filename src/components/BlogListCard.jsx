import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { GlobalContext } from "../GlobalContext";

const useStyles = makeStyles({
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
});

const BlogListCard = ({ name, title, date, tags }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        onClick={() => history.push(`posts/${name}`)}
        title={`${name}.md`}
      >
        <CardContent>
          <Box mb={1}>
            <Typography variant="h5" component="h2" display="inline">
              {title ? title : "Unknown Title"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="i">
              {" "}
              {date ? date : "Unknown Date"}
            </Typography>
          </Box>
          {tags &&
            tags.map((tag, i) => {
              return (
                <Chip
                  key={i}
                  className={classes.tag}
                  size="small"
                  label={tag}
                />
              );
            })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogListCard;
