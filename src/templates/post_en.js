/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { postPropTypes } from "../utils/sharedPropTypes";
import PostView from "../views/post";

const Post = props => {
  const post = props.data.wordpressWpPostsEn;
  const { id, title, excerpt, date, content } = post;
  const url = props.location.href;
  const img = post.featured_media.localFile.childImageSharp.resolutions.src;
  const tranlation = post.acf.translation.url;

  return (
    <PostView
      url={url}
      title={title}
      tranlation={tranlation}
      id={id}
      img={img}
      excerpt={excerpt}
      date={date}
      publishedAt="Published at"
      translationLabel="Read this article in English"
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
