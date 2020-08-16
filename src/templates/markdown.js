/** @jsx jsx */
import { jsx } from "@emotion/core";
import PostView from "../views/post";

const Markdown = (props) => {
  const body = props.pageContext.node.body;
  const { title } = props.pageContext.node.frontmatter;
  const { caption } = props.pageContext.node.frontmatter;
  const img = "";
  return (
    <PostView
      mdx
      caption={caption}
      imgAlt=""
      url=""
      title={title}
      tranlation=""
      id="id"
      img={img}
      excerpt="dxc"
      date="date"
      content={body}
    />
  );
};

export default Markdown;
