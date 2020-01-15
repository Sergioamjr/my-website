/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, Link } from "gatsby";
import Template from "../components/Template";
import {
  Container,
  secondTitle,
  text,
  largeMgBottom,
  mgBottom,
  secondaryFont,
  linkStyle
} from "../design";
import Disqus from "../components/Disqus";
import { postPropTypes } from "../utils/sharedPropTypes";

const Post = props => {
  const post = props.data.wordpressWpPostsEn;
  const id = post.id;
  const title = post.title;
  const url = props.location.href;
  const tranlation = post.acf.translation.url;

  return (
    <Template title={post.title} description={post.excerpt}>
      <Container small>
        <article css={largeMgBottom} className="post-content">
          <div css={mgBottom}>
            <Link
              css={css`
                ${(secondaryFont, linkStyle)}
              `}
              to={tranlation}
            >
              Leia esse artigo em Português.
            </Link>
          </div>
          <h1 css={secondTitle} dangerouslySetInnerHTML={{ __html: title }} />
          <p
            css={css`
              ${text};
              color: var(--gray);
            `}
          >
            Published on
            <time dateTime={post.date}> {post.date}</time>
          </p>

          <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <Disqus url={url} id={id} />
      </Container>
    </Template>
  );
};

Post.propTypes = postPropTypes;

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpPostsEn(id: { eq: $id }) {
      id
      title
      content
      excerpt
      date(formatString: "MM-DD-YYYY")
      acf {
        translation {
          url
        }
      }
    }
  }
`;
