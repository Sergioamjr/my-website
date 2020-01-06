/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Template from "../../components/Template";
import BlogCard from "../../components/BlogCard";
import { Container, pageTitle } from "../../design";

const Projects = props => {
  const data = props.data.allWordpressWpProjectsEn.edges;
  return (
    <Template title="Projects">
      <Container small>
        <h2 css={pageTitle}>Projects</h2>
        {data.map(({ node }, i) => {
          const {
            title,
            content,
            acf: { categories, link }
          } = node;
          return (
            <BlogCard
              externalLink
              categories={categories || []}
              excerpt={content}
              path={link}
              title={title}
              key={i}
            />
          );
        })}
      </Container>
    </Template>
  );
};
export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    allWordpressWpProjectsEn: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string,
            acf: PropTypes.shape({
              categories: PropTypes.arrayOf(
                PropTypes.shape({
                  category: PropTypes.string
                })
              ),
              link: PropTypes.string
            })
          })
        })
      )
    })
  }).isRequired
};

export const pageQuery = graphql`
  query {
    allWordpressWpProjectsEn(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          content
          acf {
            categories {
              category
            }
            link
          }
        }
      }
    }
  }
`;
