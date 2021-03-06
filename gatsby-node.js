const path = require("path");
const slash = require("slash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          body
          id
          frontmatter {
            path
            title
            caption
            translate
            excerpt
            date
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allMdx } = result.data;

  const markdownTemplate = path.resolve("./src/templates/markdown.js");

  allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.path,
      component: slash(markdownTemplate),
      context: {
        node,
      },
    });
  });
};
