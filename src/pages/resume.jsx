import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import TeX from "@matejmazur/react-katex";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Container from "../components/Container";
import Accordion from "../components/Accordion";
import Code from "../components/Markdown/Code";
import HorizontalRule from "../components/Markdown/HorizontalRule";
import Table from "../components/Markdown/Table";
import THead from "../components/Markdown/TableHead";
import TR from "../components/Markdown/TableRow";
import TH from "../components/Markdown/TableHeaderCell";
import TD from "../components/Markdown/TableDataCell";

import unswMarks from "../data/unswMarks";

const LinkBold = styled(Link)`
  font-weight: 600;
`;

function LinkNewTab(props) {
  return <Link target="_blank" rel="noopener noreferrer" {...props} />;
}

const styleBold = {
  fontWeight: "bold",
};

const styleItalic = {
  fontStyle: "italic",
};

function ResumePage() {
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Resume - dustbringer.github.io</title>
        <meta name="description" content="Resume Page" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Resume
        </Typography>

        <Typography variant="h5">Proficiencies</Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
              Programming Languages and Libraries
            </Typography>
            <Typography variant="body1" gutterBottom>
              C, Javascript (Typescript, Node.js, ReactJS, GatsbyJS,
              Express.js), HTML5, CSS3, Python, Java, SQL (PostgreSQL, GraphQL,
              MySQL), Bash, R, Maple, x86, <TeX math="\LaTeX" />, Markdown.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
              Programs and Applications
            </Typography>
            <Typography variant="body1" gutterBottom>
              Git (also GitHub, GitLab), Linux, Text editing software (Visual
              Studio Code, Sublime Text, vim, etc.), Chrome DevTools (similarly
              for other browsers). Adobe Photoshop, Adobe Illustrator,
              Procreate.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
              Mathematics
            </Typography>
            <Typography variant="body1" gutterBottom>
              Linear Algebra, Multivariate Calculus, Point Set Topology,
              Abstract Algebra (Groups, Rings, Fields, Modules, Representations,
              Categories, etc.), Combinatorics, Differential Equations (ordinary
              and partial), Probability, Statistics, Logic, Computability and
              Complexity Theory, Coding Theory. The beginnings of Complex
              Analysis, Functional Analysis, Galois Theory, Commutative Algebra,
              Algebraic Geometry, Differential Geometry, and Graph Theory.
            </Typography>
          </li>
        </ul>

        <Typography variant="h5">Work Experience</Typography>
        <Typography variant="body1" gutterBottom>
          <ul>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                UNSW Casual Academic (2021 - Present)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tutor at UNSW School of Mathematics Drop-in-centre and Lab
                consultations.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Private Mathematics Tutor (2016 - Present)
              </Typography>
              <Typography variant="body1" gutterBottom>
                One-on-one private tutor for high school students, in topics up
                to the highest level of high school Mathematics. Helping
                students deepen their understanding in difficult topics, on top
                of plainly solving problems, and encouraging love for problem
                solving and learning.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Mathematics Tutor for Alchemy Tuition (2019 - 2020)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Supporting students in their learning and motivating an interest
                in mathematics.
              </Typography>
            </li>
          </ul>
        </Typography>

        <Typography variant="h5">Personal Projects</Typography>
        <Typography variant="body1" gutterBottom>
          <ul>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                <LinkNewTab href="https://dustbringer.github.io/">
                  Personal Website
                </LinkNewTab>{" "}
                (
                <LinkNewTab href="https://github.com/dustbringer/dustbringer.github.io">
                  GitHub
                </LinkNewTab>
                )
              </Typography>
              <Typography variant="body1" gutterBottom>
                The website you are using right now! It is currently written in
                ReactJS and is statically generated by GatsbyJS.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                <LinkNewTab href="https://dustbringer.github.io/posts/2021-09-15-lockpicking-foundations/">
                  Lockpicking Talk for UNSW SecSoc
                </LinkNewTab>
              </Typography>
              <Typography variant="body1" gutterBottom>
                A talk I gave on lockpicking for UNSW SecSoc, September 2021.
                Content includes single pin picking and raking for common
                pin-and-tumbler locks, and an introduction to security pins and
                other types of locks.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Custom D&D Calendar (
                <LinkNewTab href="https://github.com/dustbringer/wombats-dnd">
                  GitHub
                </LinkNewTab>
                )
              </Typography>
              <Typography variant="body1" gutterBottom>
                An application made to display and organise user made events in
                a custom calender for D&D. It is developed on a full stack -
                ReactJS, Express.js and PostgreSQL - and was hosted on Heroku
                when it had free dynos.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                SYNCSHACK 2021 - Phobia Exposure Therapy Web App (
                <LinkNewTab href="https://github.com/4m1v/phobos">
                  GitHub
                </LinkNewTab>
                )
              </Typography>
              <Typography variant="body1" gutterBottom>
                A digital version of exposure therapy. Phobos showing its users
                images related to their phobias and allows them to scale the
                size of each image according to their comfort. This was
                developed on a full stack: ReactJS, Express.js, with a team of 5
                over a weekend.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Tab Suspender Browser Extension (
                <LinkNewTab href="https://github.com/dustbringer/tab-suspender">
                  GitHub
                </LinkNewTab>
                )
              </Typography>
              <Typography variant="body1" gutterBottom>
                A simple extension that replaces unused tabs with a static page
                that can be refreshed to return to the original webpage.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Puzzle Simulator for "The Witness" (
                <LinkNewTab href="https://github.com/dustbringer/thewitness-puzzle">
                  GitHub
                </LinkNewTab>
                )
              </Typography>
              <Typography variant="body1" gutterBottom>
                A simulator for puzzles from the game "The Witness". Everything
                is written with ReactJS, in a team of 2.
              </Typography>
            </li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Syllabus Projects
        </Typography>
        <Box sx={{ marginBottom: "1em" }}>
          <Accordion title="Show All">
            <Typography variant="body1" gutterBottom>
              These are some projects from UNSW courses that I learnt a lot
              from. A majority of these were designed ourselves given some loose
              functional requirements.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <ul>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    Messaging App Backend (COMP1531)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A backend server to a messaging application written with
                    Python using Flask, in a team of 4.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    Simple Shell Application (COMP1521)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A simple shell written in C with functionalities implemented
                    through system calls. It is capable of running new
                    applications, changing directories, reading files, viewing
                    directories, piping, and I/O redirection.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    Game of Life in an Assembly Language (COMP1521)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A program that simulates Conway's Game of Life written in
                    the MIPS R3000 instruction set.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    Text Buffer (COMP2521)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A text buffer written in C that is capable of adding
                    prefixes to every line, merging two buffers, cutting and
                    pasting, searching for a string, and converting some
                    Markdown formatting to HTML.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    2D Dungeon Crawling Game (COMP2511)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A game written with Java (backend) and JavaFX (frontend), in
                    a team of 2. The game has a GUI, a variety of static and
                    dynamic entities, and uses a variety of OO-Design patterns
                    to handle their interactions. We wrote tests for every
                    backend functionality. In addition, I wrote a Python script
                    for easily making maps, by translating an ASCII image to
                    JSON map data.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    BigBrain (COMP6080)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A quiz game frontend (heavily inspired by Kahoot) written
                    with ReactJS, in a team of 2. The game allows multiple
                    simultaneous players, separate screens for each player,
                    scoreboard, quiz creation and management, account management
                    etc.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    sx={{ ...styleBold, ...styleItalic }}
                  >
                    IndieBin (COMP3900)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    An Indie game platform written with a full stack (ReactJS,
                    ExpressJS, Typescript, SQL), in a team of 5. This
                    application was designed with indie developers in mind, with
                    features such as the selling and buying of games,
                    personalised user recommendations, developer blogs, and
                    fundraisers to support new ideas.
                  </Typography>
                </li>
              </ul>
            </Typography>
          </Accordion>
        </Box>

        <Typography variant="h5">Education</Typography>
        <Typography variant="body1" gutterBottom>
          <ul>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                University of New South Wales (2019 - Present)
              </Typography>
              <Typography variant="body1">
                B Computer Science / B Advanced Mathematics (Honours)
              </Typography>
              <Typography variant="body1">
                Honours Thesis:{" "}
                <em>Diagrammatic Categories in Representation Theory</em>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Weighted Average Mark: <strong>{unswMarks.wam}</strong>
              </Typography>

              <Box sx={{ marginBottom: "1em" }}>
                <Accordion title="Details">
                  <Typography variant="body1" sx={styleBold}>
                    Awards
                  </Typography>
                  <ul>
                    <li>
                      Faculty of Science Deans List 2020, 2021, 2022 (top 100)
                    </li>
                    <li>
                      Faculty of Engineering Deans Award 2020, 2021 (top 100)
                    </li>
                    <li>
                      School of Mathematics and Statistics Advanced Mathematics
                      Honours Scholarship (for 2022)
                    </li>
                  </ul>

                  <HorizontalRule />

                  <Box sx={{ "& table": { width: "100%" } }}>
                    <Table>
                      <THead>
                        <TH>Course</TH>
                        <TH>Term</TH>
                        <TH>Mark</TH>
                      </THead>
                      {unswMarks.courses.map((c, i) => (
                        <TR key={c.term + c.code}>
                          <TD>
                            {c.code}, {c.name}
                          </TD>
                          <TD>{c.term}</TD>
                          <TD>
                            {c.mark >= 0 ? c.mark : "--"}{" "}
                            {c.grade !== undefined && `(${c.grade})`}
                          </TD>
                        </TR>
                      ))}
                    </Table>
                  </Box>
                </Accordion>
              </Box>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...styleBold, ...styleItalic }}>
                Northern Beaches Secondary College Manly Selective Campus
                (2012-2018)
              </Typography>
              <Typography variant="body1" gutterBottom>
                ATAR: 97.55
              </Typography>

              <Box sx={{ marginBottom: "1em" }}>
                <Accordion title="Details">
                  <Box sx={{ "& table": { width: "100%" } }}>
                    <Table>
                      <THead>
                        <TH>Subject</TH>
                        <TH>Mark</TH>
                      </THead>
                      <TR>
                        <TD>Mathematics Advanced (Accelerated)</TD>
                        <TD>99</TD>
                      </TR>
                      <TR>
                        <TD>Mathematics Extension 1</TD>
                        <TD>98</TD>
                      </TR>
                      <TR>
                        <TD>Mathematics Extension 2</TD>
                        <TD>93</TD>
                      </TR>
                      <TR>
                        <TD>English Advanced</TD>
                        <TD>85</TD>
                      </TR>
                      <TR>
                        <TD>Software Design and Developemnt</TD>
                        <TD>92</TD>
                      </TR>
                      <TR>
                        <TD>Chemistry</TD>
                        <TD>88</TD>
                      </TR>
                      <TR>
                        <TD>Physics</TD>
                        <TD>86</TD>
                      </TR>
                    </Table>
                  </Box>
                </Accordion>
              </Box>
            </li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Volunteering
        </Typography>
        <Box sx={{ marginBottom: "1em" }}>
          <Accordion title="Show All">
            <Typography variant="body1" gutterBottom>
              <ul>
                <li>
                  <Typography variant="body1">
                    Packing Boxes for Operation Christmas Child (2019, 2020)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Christian Assembly of Sydney (2016 - Present): Audio-Visual
                    Leader, Songs Leader, Youth Bible Study Leader
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Library Volunteering (2015 - 2016)
                  </Typography>
                </li>
              </ul>
            </Typography>
          </Accordion>
        </Box>

        <HorizontalRule />

        <Typography>
          See{" "}
          <LinkBold
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD3sQp_YYM&#x2F;view?utm_content=DAD3sQp_YYM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </LinkBold>{" "}
          for a PDF version.
        </Typography>
      </Container>
    </>
  );
}

export default ResumePage;
