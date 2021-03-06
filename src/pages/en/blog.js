/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import BlogCard from "../../components/BlogCard";
import Page from "../../views/page";

const Blog = (props) => {
  const data = props.data.allMdx.edges.sort(
    (a, b) =>
      new Date(b.node.frontmatter.date).getTime() -
      new Date(a.node.frontmatter.date)
  );
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
