/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, secondTitle, text } from "../design";

const Post = props => {
  const post = props.data.wordpressPost;

  return (
    <Template>
      <Container small>
        <h1
          css={secondTitle}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
    </Template>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
