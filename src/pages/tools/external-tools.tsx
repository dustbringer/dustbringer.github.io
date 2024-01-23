import React from "react";
import { Link, navigate, graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { styled, css } from "@mui/material/styles";
import moment from "moment";
import qs from "query-string";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Container from "../../components/Container";
import CardWideSmall from "../../components/CardWideSmall";
import PageNavigation from "../../components/PageNavigation";

import { externalToolList } from "../../data/toolsList";

// HELPFUL https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
// In gatsby: https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/

const ListContainer = styled("div")`
  min-height: 74vh;
`;

function ExternalToolListPage({ location }: PageProps) {
  // const [tools, setTools] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4">External Tools</Typography>
        <Typography variant="body2" gutterBottom>
          More tools hosted on different webpages.
        </Typography>
        <div>
          {externalToolList.length > 0 ? (
            <>
              <ListContainer>
                {externalToolList.map((t, i) => {
                  const { type, title, description, path } = t;
                  return (
                    <CardWideSmall
                      key={`${i}-${title}`}
                      type={type}
                      // date={date}
                      name={title}
                      title={title}
                      description={description}
                      path={path}
                      externalLink
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

export default ExternalToolListPage;

export function Head() {
  return (
    <>
      <title>Tools | dustbringer.github.io</title>
      <meta name="description" content="List of tools" />
    </>
  );
}
