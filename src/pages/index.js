/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { text } from "../design";
import Page from "../views/page";

const Home = props => {
  const post = props.data.wordpressPage;
  return (
    <Page
      translateLabel="See in English"
      translateTo="/en"
      title=":)"
      subtitle={post.title}
    >
      <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
    </Page>
  );
};

export default Home;

Home.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string
    })
  })
};

export const pageQuery = graphql`
  query {
    wordpressPage(id: { eq: "1f967ae6-c216-5bfa-a198-3d45e494dae3" }) {
      title
      content
    }
  }
`;
