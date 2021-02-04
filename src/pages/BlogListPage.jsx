import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
import yamlParser from "markdown-yaml-metadata-parser";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { GlobalContext } from "../GlobalContext";
import BlogListCard from "../components/BlogListCard";

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

const DivFlexCenterInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

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
  const context = React.useContext(GlobalContext);
  const { showError } = context;
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // TODO Put this inside the useffect when everyhting is done
  React.useEffect(() => {
    setLoading(true);
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
      .then(() => {
        setPosts((posts) =>
          [...posts].sort((p1, p2) => {
            const diff = moment(p2.meta.date, "DD-MM-YYYY", true).diff(
              moment(p1.meta.date, "DD-MM-YYYY", true),
              "days"
            );
            return diff;
          })
        );
      })
      .catch((err) => showError(err.message))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Mildly Interesting Blog Posts
        </Typography>
        <div>
          {loading ? (
            <DivFlexCenterInside>
              <CircularProgress />
            </DivFlexCenterInside>
          ) : posts.length > 0 ? (
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
            })
          ) : (
            <Typography>There seems to be nothing here...</Typography>
          )}
        </div>
      </Container>
    </>
  );
};

export default BlogListPage;
