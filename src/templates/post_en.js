/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { postPropTypes } from "../utils/sharedPropTypes";
import PostView from "../views/post";

const Post = props => {
  const post = props.data.wordpressWpPostsEn;
  const { id, title, excerpt, date, content } = post;
  const url = props.location.href;
  const img = post.featured_media.localFile.childImageSharp.original.src;
  const imgAlt = post.featured_media.alt_text;
  const tranlation = post.acf.translation;
  const caption = post.featured_media.caption;

  return (
    <PostView
      caption={caption}
      imgAlt={imgAlt}
      url={url}
      title={title}
      tranlation={tranlation}
      id={id}
      img={img}
      excerpt={excerpt}
      date={date}
      publishedAt="Published at"
      translationLabel="Leia esse artigo em Português"
      content={content}
    />
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
      featured_media {
        alt_text
        caption
        localFile {
          childImageSharp {
            original {
              width
              height
              src
            }
          }
        }
      }
      acf {
        translation
      }
    }
  }
`;
