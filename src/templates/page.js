/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import {
  Container,
  text,
  secondTitle,
  pageTitle,
  linkStyle,
  mgBottom
} from "../design";

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
            <Link to="/">Ver em Português</Link>
          </div>

          <h2 css={pageTitle}>:)</h2>
          <p css={secondTitle}>{post.title}</p>

          <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
          <p css={text}>
            This will be a place to share what I am working on, learning or
            thinking. While I are here, feel free to see my{" "}
            <Link css={linkStyle} to="/en/blog">
              articles
            </Link>
            ,{" "}
            <Link css={linkStyle} to="/en/projects">
              projects
            </Link>{" "}
            or{" "}
            <Link css={linkStyle} to="/en-resume">
              my CV.
            </Link>
            .
          </p>
        </div>
      </Container>
    </Template>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
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
