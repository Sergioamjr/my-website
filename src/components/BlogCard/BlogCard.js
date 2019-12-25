/** @jsx jsx */
import { jsx } from "@emotion/core";
import Tags from "../Tags";
import { text, xLargeMgBottom, secondTitle } from "../../design";

const BlogCard = () => {
  return (
    <div css={xLargeMgBottom}>
      <p css={secondTitle}>Introdução React Hooks</p>
      <p css={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        nec ipsum ac tristique. Nunc erat orci, scelerisque eget nisi quis,
        efficitur consequat magna. Maecenas pulvinar felis id purus congue
        maximus. Sed scelerisque pulvinar massa non dictum. Donec mauris neque,
        luctus sed sodales ut, rutrum ac dui...
      </p>
      <Tags name="React" />
    </div>
  );
};

export default BlogCard;
