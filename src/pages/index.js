/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, pageTitle, text, mgBottom, secondTitle } from "../design";

const Home = props => {
  const post = props.data.wordpressPage;
  return (
    <Template>
      <Container small>
        <div className="post-content">
          <div
            css={css`
              ${mgBottom}
            `}
          >
            <Link className="secondary-font" to="/en">
              See in English
            </Link>
          </div>
          <h2 css={pageTitle}>:)</h2>
          <p css={secondTitle}>{post.title}</p>
          <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Container>
    </Template>
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
