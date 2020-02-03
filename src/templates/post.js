/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { postPropTypes } from "../utils/sharedPropTypes";
import PostView from "../views/post";

const Post = props => {
  const post = props.data.wordpressPost;
  const { id, title, excerpt, date, content } = post;
  const url = props.location.href;
  const img = post.featured_media.localFile.childImageSharp.original.src;
  const tranlation = post.acf.translation;
  const imgAlt = post.featured_media.alt_text;
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
      content={content}
    />
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
