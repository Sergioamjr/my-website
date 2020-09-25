/** @jsx jsx */
import { jsx } from "@emotion/core";
import PostView from "../views/post";

const Markdown = (props) => {
  const body = props.pageContext.node.body;
  const {
    title,
    translate,
    caption,
    path,
    image,
  } = props.pageContext.node.frontmatter;
  const img = image.childImageSharp.original.src;
  console.log(path);
  return (
    <PostView
      caption={caption}
      imgAlt=""
      translationLabel={
        path.includes("posts_en") ? "Leia em Português" : "Read in English"
      }
      url=""
      title={title}
      tranlation={translate}
      id="id"
      img={img}
      excerpt="dxc"
      date="date"
      content={body}
    />
  );
};

export default Markdown;
