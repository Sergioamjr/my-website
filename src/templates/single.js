import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container } from "../design";

const Single = props => {
  const post = props.data.wordpressPost;

  return (
    <Template>
      <Container>
        <h1
          className="m-bottom-20 fs-custom"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <div
          className="content_ color-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </Template>
  );
};

Single.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default Single;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
