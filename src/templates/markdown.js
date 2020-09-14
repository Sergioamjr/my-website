/** @jsx jsx */
import { jsx } from "@emotion/core";
import PostView from "../views/post";

const Markdown = (props) => {
  const body = props.pageContext.node.body;
  const {
    title,
    translate,
    caption,
    image,
  } = props.pageContext.node.frontmatter;
  const img = image.childImageSharp.original.src;
  return (
    <PostView
      caption={caption}
      imgAlt=""
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
