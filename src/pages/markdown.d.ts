import type { Root } from "hast";

export type Heading = {
  id: string;
  value: string;
  depth: number;
};

export type MdPageType = {
  htmlAst: Root; // cbb to find its type; this is enough for our uses
  frontmatter: {
    title: string;
    author: string;
    date: string;
    edited: string;
  };
  headings: Heading[];
  fields: {
    slug: string;
  }
};

export type DataTypeMarkdown<T> = {
  markdownRemark: T;
};
