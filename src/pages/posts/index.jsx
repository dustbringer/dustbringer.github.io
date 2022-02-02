// For serving markdown files
import React from "react";
import { Link, navigate, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import moment from "moment";
import qs from "query-string";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Container from "../../components/Container";
import BlogListCard from "../../components/BlogListCard";
import PageNavigation from "../../components/PageNavigation";

// HELPFUL https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
// In gatsby: https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/

const PostsList = styled.div`
  min-height: 75vh;
`;

const N_PER_PAGE = 6;
const getPage = (list, page, nPerPage) =>
  list.slice(nPerPage * (page - 1), nPerPage * page).map((e) => e.node);

function BlogListPage({ location, data }) {
  const { edges: posts } = data.allMarkdownRemark;
  // const [posts, setPosts] = React.useState([]);
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
      queryPage <= Math.ceil(posts.length / N_PER_PAGE)
    ) {
      setPage(queryPage);
    }
  }, [location.search, posts.length]);

  return (
    <>
      <Helmet>
        <title>Posts - dustbringer.github.io</title>
        <meta name="description" content="List of blog posts" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Posts</Typography>
        <div>
          {posts.length > 0 ? (
            <>
              <PostsList>
                {getPage(posts, page, N_PER_PAGE).map((post, i) => {
                  const { id, path, frontmatter: meta } = post;
                  return (
                    <BlogListCard
                      key={`${i}-${id}`}
                      title={meta.title}
                      description={meta.description}
                      date={meta.date}
                      tags={meta.tags}
                      name={meta.slug.match(/^.*\/(.+?)$/)[1]}
                      path={path}
                    />
                  );
                })}
              </PostsList>
              <PageNavigation
                text={page}
                onPrev={() =>
                  page > 1 &&
                  navigate(`${location.pathname}?page=${Math.max(page - 1, 1)}`)
                }
                onNext={() =>
                  page < Math.ceil(posts.length / N_PER_PAGE) &&
                  navigate(
                    `${location.pathname}?page=${Math.min(
                      page + 1,
                      Math.ceil(posts.length / N_PER_PAGE)
                    )}`
                  )
                }
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

export default BlogListPage;

export const pageQuery = graphql`
  query GetPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            date(formatString: "YYYY-MM-DD")
            tags
          }
          path: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__slug}")
        }
      }
    }
  }
`;
