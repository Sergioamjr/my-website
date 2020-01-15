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
  linkStyle,
  secondaryFont
} from "../design";
import Disqus from "../components/Disqus";
import { postPropTypes } from "../utils/sharedPropTypes";

const Post = props => {
  const post = props.data.wordpressPost;
  const id = post.id;
  const title = post.title;
  const url = props.location.href;
  const img = post.featured_media.localFile.childImageSharp.resolutions.src;
  const tranlation = post.acf.translation.url;

  return (
    <Template thumbnail={img} title={post.title} description={post.excerpt}>
      <Container small>
        <article css={largeMgBottom} className="post-content">
          <div css={mgBottom}>
            <Link
              css={css`
                ${(secondaryFont, linkStyle)}
              `}
              to={tranlation}
            >
              Read this article in English.
            </Link>
          </div>
          <h1 css={secondTitle} dangerouslySetInnerHTML={{ __html: title }} />
          <p
            css={css`
              ${text};
              color: var(--gray);
            `}
          >
            Publicado em
            <time dateTime={post.date}> {post.date}</time>
          </p>
          {img && <img src={img} alt="test" />}

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
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      date(formatString: "MM-DD-YYYY")
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 670, height: 500) {
              src
            }
          }
        }
      }
      acf {
        translation {
          url
        }
      }
    }
  }
`;
