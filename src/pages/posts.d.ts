export type PostType = {
  id: string;
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    date: string;
    edited: string;
    tags: string[];
  };
  path: string;
};

export type DataTypeAllMarkdown<T> = {
  allMarkdownRemark: {
    nodes: [T];
  };
};
