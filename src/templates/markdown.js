/** @jsx jsx */
import { jsx } from "@emotion/core";
import PostView from "../views/post";

const Markdown = (props) => {
  const body = props.pageContext.node.body;
  const { id, slug } = props.pageContext.node;
  const {
    title,
    translate,
    caption,
    path,
    excerpt,
    image,
    date,
  } = props.pageContext.node.frontmatter;
  const img = image.childImageSharp.original.src;
  return (
    <PostView
      caption={caption}
      imgAlt=""
      translationLabel={
        path.includes("posts_en") ? "Leia em Português" : "Read in English"
      }
      url={slug}
      title={title}
      tranlation={translate}
      id={id}
      img={img}
      excerpt={excerpt}
      date={date}
      content={body}
    />
  );
};

export default Markdown;
