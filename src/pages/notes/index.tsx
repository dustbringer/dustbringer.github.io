import React from "react";
import { Link, navigate, graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
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

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function NotesListPage({
  location,
  data,
}: PageProps<DataTypeAllMarkdown<PostType>>) {
  const { nodes: notes } = data.allMarkdownRemark;
  // const [loading, setLoading] = React.useState(true);
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
        <TitleContainer>
          <Typography variant="h4" gutterBottom>
            Notes
          </Typography>
          {notes.length > N_PER_PAGE && (
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
              prevDisabled={page <= 1}
              nextDisabled={page >= Math.ceil(notes.length / N_PER_PAGE)}
            />
          )}
        </TitleContainer>
        <div>
          {notes.length > 0 ? (
            <>
              <ListContainer>
                {getPage(notes, page, N_PER_PAGE).map((note, i) => {
                  const { id, path, frontmatter: meta, fields } = note;
                  return (
                    <BlogListCardSmall
                      key={`${i}-${id}`}
                      title={meta.title}
                      description={meta.description}
                      date={meta.edited} // or meta.date
                      tags={meta.tags}
                      name={fields.slug?.match(/^.*\/(.+?)$/)?.[1]}
                      path={path}
                    />
                  );
                })}
              </ListContainer>
            </>
          ) : (
            <Typography>There seems to be nothing here...</Typography>
          )}
        </div>
      </Container>
    </>
  );
}

export default NotesListPage;

export const pageQuery = graphql`
  query GetNotes {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { regex: "/^/?notes//" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "DD MMMM, YYYY")
          edited(formatString: "DD MMMM, YYYY")
          tags
        }
        fields {
          slug
        }
        path: gatsbyPath(filePath: "/{MarkdownRemark.fields__slug}")
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
