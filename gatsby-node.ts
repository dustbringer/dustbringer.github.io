import { createFilePath } from "gatsby-source-filesystem";

// Add file paths to markdown MarkdownRemark/fields/slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, trailingSlash: false});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// Defines type of fields/slug
// Not needed
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type MarkdownRemark implements Node {
//       fields: Fields
//     }
//     type Fields {
//       slug: String
//     }
//   `; // this is a graphql schema
//   createTypes(typeDefs);
// };
