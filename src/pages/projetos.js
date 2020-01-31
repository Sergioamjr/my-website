/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogCard from "../components/BlogCard";
import Page from "../views/page";

const Projects = props => {
  const data = props.data.allWordpressWpProjetos.edges;
  return (
    <Page
      translateLabel="See in English"
      translateTo="en/projects"
      title="Projetos"
    >
      <div>
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
              label="Ler mais"
              key={i}
            />
          );
        })}
      </div>
    </Page>
  );
};
export default Projects;

export const wpProjetosTypes = {
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

Projects.propTypes = wpProjetosTypes;

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
