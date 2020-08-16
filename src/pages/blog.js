/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogCard from "../components/BlogCard";
import Page from "../views/page";

const Blog = (props) => {
  const data = props.data.allMdx.edges;
  return (
    <Page translateLabel="See in English" translateTo="en/blog" title="Artigos">
      <div>
        {data.map(({ node }, i) => {
          const { slug, frontmatter } = node;
          const { title, excerpt, path } = frontmatter;
          if (slug.includes("__") || path.includes("/posts_en/")) {
            return null;
          }

          return (
            <BlogCard
              categories={[]}
              path={path}
              excerpt={excerpt}
              title={title}
              key={i}
              label="Ler mais"
            />
          );
        })}
      </div>
    </Page>
  );
};

export default Blog;

export const wpPostsTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string,
            excerpt: PropTypes.string,
            path: PropTypes.string,
            acf: PropTypes.shape({
              categories: PropTypes.arrayOf(
                PropTypes.shape({
                  category: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

Blog.propTypes = wpPostsTypes;

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            date
            excerpt
            title
            path
          }
        }
      }
    }
  }
`;
