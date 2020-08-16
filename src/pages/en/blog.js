/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogCard from "../../components/BlogCard";
import Page from "../../views/page";

const Blog = (props) => {
  const data = props.data.allMdx.edges;
  return (
    <Page
      title="Articles"
      translateLabel="Ver em Português"
      translateTo="/blog"
    >
      <div>
        {data.map(({ node }, i) => {
          const { slug, frontmatter } = node;
          const { title, excerpt, path } = frontmatter;
          if (slug.includes("__") || !path.includes("/posts_en/")) {
            return null;
          }

          return (
            <BlogCard
              categories={[]}
              path={path}
              excerpt={excerpt}
              title={title}
              key={i}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allWordpressWpPostsEn: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string,
            excerpt: PropTypes.string,
            slug: PropTypes.string,
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

export const pageQuery = graphql`
  query EnglishPosts {
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
