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
      allWordpressWpPostsEn {
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

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPostsEn
  } = result.data;

  const pageTemplate = path.resolve("./src/templates/page.js");
  const resumeTemplate = path.resolve("./src/templates/resume.js");
  const postTemplate = path.resolve("./src/templates/post.js");
  const postEnTemplate = path.resolve("./src/templates/post_en.js");

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(
        edge.node.path.includes("resume") ? resumeTemplate : pageTemplate
      ),
      context: {
        id: edge.node.id
      }
    });
  });

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id
      }
    });
  });

  allWordpressWpPostsEn.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postEnTemplate),
      context: {
        id: edge.node.id,
        ola: true
      }
    });
  });
};
