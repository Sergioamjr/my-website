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

  const pageTemplate = path.resolve("./src/templates/page.js");
  const resumeTemplate = path.resolve("./src/templates/resume.js");
  allWordpressPage.edges.forEach(edge => {
    const pageModel = edge.node.path.includes("resume")
      ? resumeTemplate
      : pageTemplate;
    createPage({
      path: edge.node.path,
      component: slash(pageModel),
      context: {
        id: edge.node.id
      }
    });
  });

  const postTemplate = path.resolve("./src/templates/post.js");
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id
      }
    });
  });
};
