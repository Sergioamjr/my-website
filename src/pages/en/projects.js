/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogCard from "../../components/BlogCard";
import Page from "../../views/page";

const Projects = props => {
  const data = props.data.allWordpressWpProjectsEn.edges;
  return (
    <Page
      title="Projects"
      translateLabel="Ver em Português"
      translateTo="/projetos"
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
              key={i}
            />
          );
        })}
      </div>
    </Page>
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
