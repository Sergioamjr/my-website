/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { text } from "../design";
import PageModel from "./../views/page";

const Page = props => {
  const post = props.data.wordpressPage;

  return (
    <PageModel
      translateLabel="Ver em Português"
      translateTo="/"
      title=":)"
      subtitle={post.title}
    >
      <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
    </PageModel>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.shape({
      content: PropTypes.string,
      title: PropTypes.string
    })
  })
};

export default Page;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
