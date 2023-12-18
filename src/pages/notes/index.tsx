import React from "react";
import { Link, navigate, graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import moment from "moment";
import qs from "query-string";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Container from "../../components/Container";
import BlogListCardSmall from "../../components/BlogListCardSmall";
import PageNavigation from "../../components/PageNavigation";

import type { PostType, DataTypeAllMarkdown } from "../posts.d.ts";
import { N_PER_PAGE, getPage } from "../../util/pagination";

const ListContainer = styled("div")`
  min-height: 75vh;
`;

function ReferenceListPage({
  location,
  data,
}: PageProps<DataTypeAllMarkdown<PostType>>) {
  const { nodes: notes } = data.allMarkdownRemark;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const queryPage = parseInt(qs.parse(location.search).page as string, 10);
    if (
      !isNaN(queryPage) &&
      queryPage > 0 &&
      queryPage <= Math.ceil(notes.length / N_PER_PAGE)
    ) {
      setPage(queryPage);
    }
  }, [location.search, notes.length]);

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <div>
          {notes.length > 0 ? (
            <>
              <ListContainer>
                {getPage(notes, page, N_PER_PAGE).map((note, i) => {
                  const { id, path, frontmatter: meta } = note;
                  return (
                    <BlogListCardSmall
                      key={`${i}-${id}`}
                      title={meta.title}
                      description={meta.description}
                      date={meta.edited} // or meta.date
                      tags={meta.tags}
                      name={meta.slug.match(/^.*\/(.+?)$/)?.[1]}
                      path={path}
                    />
                  );
                })}
              </ListContainer>
              <PageNavigation
                text={String(page)}
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
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { slug: { regex: "/^/?notes//" } } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          description
          date(formatString: "DD MMMM, YYYY")
          edited(formatString: "DD MMMM, YYYY")
          tags
        }
        path: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__slug}")
      }
    }
  }
`;

export function Head() {
  return (
    <>
      <title>Notes | dustbringer.github.io</title>
      <meta name="description" content="List of Notes" />
    </>
  );
}
