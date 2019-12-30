/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, secondTitle, text } from "../design";

const Post = props => {
  const post = props.data.wordpressPost;

  return (
    <Template title={post.title} description={post.excerpt}>
      <Container small>
        <article>
          <h1
            css={secondTitle}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <p
            css={css`
              ${text};
              color: var(--gray);
            `}
          >
            Publicado em
            <time dateTime={post.date}> {post.date}</time>
          </p>

          <div
            className="post-content"
            css={text}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Container>
    </Template>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.string
    })
  }).isRequired
};

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MM-DD-YYYY")
    }
  }
`;
