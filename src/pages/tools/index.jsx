import React from "react";
import { Link, navigate, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import moment from "moment";
import qs from "query-string";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Container from "../../components/Container";
import CardLarge from "../../components/CardLarge";
import PageNavigation from "../../components/PageNavigation";

import { N_PER_PAGE, getPage } from "../../util/pagination";

// HELPFUL https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
// In gatsby: https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/

const ListContainer = styled.div`
  min-height: 75vh;
`;

const tools = [
  {
    title: "Markdown Renderer",
    description: "Online renderer for Markdown and LaTeX.",
    path: "/tools/markdown-renderer",
  },
  {
    title: "Duplicate Remover",
    description: "Remove duplicate items from a list.",
    path: "/tools/duplicate-remover",
  },
  {
    title: "Japanese File Reader",
    description: "Render Japanese text file, with included furigana.",
    path: "/tools/japanese-file-reader",
  },
  {
    title: "Image Viewer",
    description:
      "View images from a JSON list of links. Written during Syncs Hack 2021 to help manually filter collected images.",
    path: "/tools/syncshack2021-image-viewer",
  },
];

function ToolListPage({ location }) {
  // const [tools, setTools] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const queryPage = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }).page;
    if (
      queryPage &&
      !isNaN(parseInt(queryPage, 10)) &&
      queryPage > 0 &&
      queryPage <= Math.ceil(tools.length / N_PER_PAGE)
    ) {
      setPage(parseInt(queryPage, 10));
    }
  }, [location.search, tools.length]);

  return (
    <>
      <Helmet>
        <title>Tools - dustbringer.github.io</title>
        <meta name="description" content="List of tools" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Tools
        </Typography>
        <Typography variant="body1" gutterBottom>
          A bunch of online tools that I made and use myself, available for your
          convenience...
        </Typography>
        <div>
          {tools.length > 0 ? (
            <>
              <ListContainer>
                {getPage(tools, page, N_PER_PAGE).map((t, i) => {
                  const { type, title, description, path } = t;
                  return (
                    <CardLarge
                      key={`${i}-${title}`}
                      type={type}
                      title={title}
                      description={description}
                      path={path}
                    />
                  );
                })}
              </ListContainer>
              <PageNavigation
                text={page}
                onPrev={() =>
                  page > 1 &&
                  navigate(`${location.pathname}?page=${Math.max(page - 1, 1)}`)
                }
                onNext={() => {
                  page < Math.ceil(tools.length / N_PER_PAGE) &&
                    navigate(
                      `${location.pathname}?page=${Math.min(
                        page + 1,
                        Math.ceil(tools.length / N_PER_PAGE)
                      )}`
                    );
                  console.log(page + 1, Math.ceil(tools.length / N_PER_PAGE));
                }}
              />
            </>
          ) : (
            <Typography>There seems to be nothing here...</Typography>
          )}
        </div>
      </Container>
    </>
  );
}

export default ToolListPage;
