/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql } from "gatsby";
import Template from "../components/Template";
import { Container, secondTitle, text, largeMgBottom } from "../design";
import Disqus from "../components/Disqus";
import { useFirebaseCounter } from "../hooks";
import image from "./../images/highfive.png";
import { postPropTypes } from "../utils/sharedPropTypes";

const highFiveStyle = css`
  cursor: pointer;
  background-image: url(${image});
  border: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-position: center;
  background-size: cover;
  background-color: #c1d6c6;
  font-size: 0;
  margin-right: 15px;
`;

const Post = props => {
  const post = props.data.wordpressWpPostsEn;
  const id = post.id;
  const title = post.title;
  const url = props.location.href;
  const [counter, setCounter] = useFirebaseCounter({ id, title });

  return (
    <Template title={post.title} description={post.excerpt}>
      <Container small>
        <article css={largeMgBottom}>
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

          <div
            className="post-content"
            css={text}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <div css={largeMgBottom}>
          <button css={highFiveStyle} onClick={setCounter}>
            High five
          </button>
          <span css={text}>
            {counter} high five{counter > 0 ? "s" : ""}
          </span>
        </div>
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
    }
  }
`;
