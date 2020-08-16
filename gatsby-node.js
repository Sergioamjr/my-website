const path = require("path");
const slash = require("slash");
const { replaceWpPrefix } = require("./src/utils/replaceWpPrefix");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          slug
          body
          frontmatter {
            path
            title
            caption
            image {
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
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
    allWordpressWpPostsEn,
    allMdx,
  } = result.data;

  const pageTemplate = path.resolve("./src/templates/page.js");
  const resumeTemplate = path.resolve("./src/templates/resume.js");
  const postTemplate = path.resolve("./src/templates/post.js");
  const markdownTemplate = path.resolve("./src/templates/markdown.js");
  const postEnTemplate = path.resolve("./src/templates/post_en.js");

  allMdx.nodes.forEach((node) => {
    if (node.slug.includes("__")) {
      return null;
    }
    createPage({
      path: node.frontmatter.path,
      component: slash(markdownTemplate),
      context: {
        node,
      },
    });
  });

  allWordpressPage.edges.forEach((edge) => {
    createPage({
      path: replaceWpPrefix(edge.node.path),
      component: slash(
        edge.node.path.includes("resume") ? resumeTemplate : pageTemplate
      ),
      context: {
        id: edge.node.id,
      },
    });
  });

  allWordpressPost.edges.forEach((edge) => {
    createPage({
      path: replaceWpPrefix(edge.node.path),
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });

  allWordpressWpPostsEn.edges.forEach((edge) => {
    createPage({
      path: replaceWpPrefix(edge.node.path),
      component: slash(postEnTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
};
