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

import { N_PER_PAGE, getPage } from "../../util/pagination";

const ListContainer = styled.div`
  min-height: 75vh;
`;

function ReferenceListPage({ location, data }) {
  const { edges: notes } = data.allMarkdownRemark;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const queryPage = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }).page;
    if (
      queryPage &&
      !isNaN(parseInt(queryPage, 10)) &&
      queryPage > 0 &&
      queryPage <= Math.ceil(notes.length / N_PER_PAGE)
    ) {
      setPage(parseInt(queryPage, 10));
    }
  }, [location.search, notes.length]);

  return (
    <>
      <Helmet>
        <title>Notes - dustbringer.github.io</title>
        <meta name="description" content="List of Notes" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <div>
          {notes.length > 0 ? (
            <>
              <ListContainer>
                {getPage(notes, page, N_PER_PAGE).map((e, i) => {
                  const { id, path, frontmatter: meta } = e.node;
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
              </ListContainer>
              <PageNavigation
                text={page}
                onPrev={() =>
                  page > 1 &&
                  navigate(`${location.pathname}?page=${Math.max(page - 1, 1)}`)
                }
                onNext={() =>
                  page < Math.ceil(notes.length / N_PER_PAGE) &&
                  navigate(
                    `${location.pathname}?page=${Math.min(
                      page + 1,
                      Math.ceil(notes.length / N_PER_PAGE)
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

export default ReferenceListPage;

export const pageQuery = graphql`
  query GetNotes {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { slug: { regex: "/^/?notes//" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          path: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__slug}")
        }
      }
    }
  }
`;
