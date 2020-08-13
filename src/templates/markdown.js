/** @jsx jsx */
import { jsx } from "@emotion/core";
import PostView from "../views/post";

const Markdown = (props) => {
  // eslint-disable-next-line react/prop-types
  const body = props.pageContext.node.body;

  return (
    <PostView
      mdx
      caption="caption"
      imgAlt=""
      url=""
      title="Título"
      tranlation=""
      id="id"
      img="img"
      excerpt="dxc"
      date="date"
      content={body}
    />
  );
};

export default Markdown;
