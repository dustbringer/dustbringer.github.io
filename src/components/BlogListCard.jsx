import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

const BlogListCard = ({ name, title, description, date, tags }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        onClick={() => navigate(`posts/${name}`)}
        title={`${name}.md`}
      >
        <CardContent>
          <Box mb={1}>
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
