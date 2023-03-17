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
  const { edges: references } = data.allMarkdownRemark;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const queryPage = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }).page;
    if (
      queryPage &&
      !isNaN(parseInt(queryPage, 10)) &&
      queryPage > 0 &&
      queryPage <= Math.ceil(references.length / N_PER_PAGE)
    ) {
      setPage(parseInt(queryPage, 10));
    }
  }, [location.search, references.length]);

  return (
    <>
      <Helmet>
        <title>References - dustbringer.github.io</title>
        <meta name="description" content="List of References" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          References
        </Typography>
        <div>
          {references.length > 0 ? (
            <>
              <ListContainer>
                {getPage(references, page, N_PER_PAGE).map((e, i) => {
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
                  page < Math.ceil(references.length / N_PER_PAGE) &&
                  navigate(
                    `${location.pathname}?page=${Math.min(
                      page + 1,
                      Math.ceil(references.length / N_PER_PAGE)
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
  query GetReferences {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { slug: { regex: "/^/?references//" } } }
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
