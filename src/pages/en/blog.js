/** @jsx jsx */
import { jsx } from "@emotion/core";

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Template from "../../components/Template";
import BlogCard from "../../components/BlogCard";
import { Container, pageTitle } from "../../design";

const Blog = props => {
  const data = props.data.allWordpressWpPostsEn.edges;
  return (
    <Template title="Blog">
      <Container small>
        <h2 css={pageTitle}>Articles</h2>
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
      </Container>
    </Template>
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