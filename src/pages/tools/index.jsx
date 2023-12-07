import React from "react";
import { Link, navigate, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { styled, css } from "@mui/material/styles";
import moment from "moment";
import qs from "query-string";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Container from "../../components/Container";
import CardWideSmall from "../../components/CardWideSmall";
import PageNavigation from "../../components/PageNavigation";

import { N_PER_PAGE, getPage } from "../../util/pagination";
import tools from "./toolsList";

// HELPFUL https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
// In gatsby: https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/

const ListContainer = styled("div")`
  min-height: 74vh;
`;

function ToolListPage({ location }) {
  // const [tools, setTools] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  return (
    <>
      <Helmet>
        <title>Tools | dustbringer.github.io</title>
        <meta name="description" content="List of tools" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Tools
        </Typography>
        <div>
          {tools.length > 0 ? (
            <>
              <ListContainer>
                {tools.map((t, i) => {
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

export default ToolListPage;
