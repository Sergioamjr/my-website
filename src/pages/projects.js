/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Template from "../components/Template";
import { Container, pageTitle } from "../design";
import BlogCard from "../components/BlogCard";

const Projects = props => {
  const data = props.data.allWordpressWpProjetos.edges;
  return (
    <Template>
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
              slug={link}
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
    allWordpressWpProjetos: PropTypes.shape({
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
    allWordpressWpProjetos {
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
