export type PostType = {
  id: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    edited: string;
    tags: string[];
  };
  fields: {
    slug: string;
  }
  path: string;
};

export type DataTypeAllMarkdown<T> = {
  allMarkdownRemark: {
    nodes: [T];
  };
};
