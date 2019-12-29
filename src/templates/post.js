/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, secondTitle, text } from "../design";

const Post = props => {
  const post = props.data.wordpressPost;

  return (
    <Template title={post.title} description={post.excerpt}>
      <Container small>
        <h1
          css={secondTitle}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <div
          className="post-content"
          css={text}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </Template>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      excerpt: PropTypes.string
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
    }
  }
`;
