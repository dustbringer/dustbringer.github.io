export type FileType = {
  name: string;
  extension: string;
  publicURL: string;
  dir?: string;
};

export type DataTypeAllFile = {
  allFile: {
    edges: [{ node: FileType }];
  };
};
