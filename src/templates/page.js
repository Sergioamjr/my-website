/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, text, secondTitle, pageTitle, mgBottom } from "../design";

const Page = props => {
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
            <Link className="secondary-font" to="/">
              Ver em Português
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
