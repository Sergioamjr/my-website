const path = require("path");
const slash = require("slash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allWordpressPage, allWordpressPost } = result.data;

  const singleTemplate = path.resolve("./src/templates/single.js");
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(singleTemplate),
      context: {
        id: edge.node.id
      }
    });
  });

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(singleTemplate),
      context: {
        id: edge.node.id
      }
    });
  });
};
