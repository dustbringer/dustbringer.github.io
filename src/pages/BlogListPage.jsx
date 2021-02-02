import React from "react";
// import { useHistory } from "react-router-dom";
import yamlParser from "markdown-yaml-metadata-parser";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { GlobalContext } from "../GlobalContext";
import BlogListCard from "../components/BlogListCard";
import { DivFlexCenterHInside } from "../components/styled/Divs";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

// TODO Pagination

// HELPFUL https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f

// Import all the files in folder
const importAll = (r) =>
  r.keys().map((key) => {
    return {
      key,
      file: r(key),
    };
  });

const BlogListPage = () => {
  const classes = useStyles();
  // const history = useHistory();
  const [posts, setPosts] = React.useState([]);

  // TODO Put this inside the useffect when everyhting is done
  React.useEffect(() => {
    const postFiles = require.context("../posts", false, /\.md$/);
    const markdownFiles = importAll(postFiles);
    Promise.all(
      markdownFiles.map((fileData) =>
        fetch(fileData.file.default)
          .then((res) => res.text())
          .then((text) => {
            const yaml = yamlParser(text);
            setPosts((posts) => [
              ...posts,
              {
                meta: yaml.metadata,
                // Match file name without extension
                name: fileData.key.match(/.*\/(.+)\.md/)[1],
              },
            ]);
          })
          .catch((err) =>
            console.log(`Failed to fetch ${fileData.file.default}`)
          )
      )
    )
      // .then() sort the files by date
      .catch((err) => console.log(err.message));
  }, []);

  React.useEffect(() => {
    console.log("POSTS", posts);
  }, [posts]);

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Mildly Interesting Blog Posts
        </Typography>
        <div>
          {posts.length > 0 &&
            posts.map((post, i) => {
              const { meta, name } = post;
              return (
                <BlogListCard
                  key={i}
                  title={meta.title}
                  date={meta.date}
                  tags={meta.tags}
                  name={name}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default BlogListPage;
