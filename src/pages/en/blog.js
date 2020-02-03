/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogCard from "../../components/BlogCard";
import Page from "../../views/page";

const Blog = props => {
  const data = props.data.allWordpressWpPostsEn.edges;
  return (
    <Page
      title="Articles"
      translateLabel="Ver em Português"
      translateTo="/blog"
    >
      <div>
        {data.map(({ node }, i) => {
          const {
            title,
            excerpt,
            path,
            acf: { categories }
          } = node;
          return (
            <BlogCard
              categories={categories || []}
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
                  category: PropTypes.string
                })
              )
            })
          })
        })
      )
    })
  }).isRequired
};

export const pageQuery = graphql`
  query {
    allWordpressWpPostsEn(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          path
          acf {
            categories {
              category
            }
          }
        }
      }
    }
  }
`;
