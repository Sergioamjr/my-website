/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { colors, fontSize } from "./../../design/theme";
import Tags from "../Tags";

const mgBottom = css`
  margin-bottom: 8px;
`;

const largeMgBottom = css`
  margin-bottom: 40px;
`;

const title = css`
  ${mgBottom};
  color: ${colors.dark};
  font-size: ${fontSize.medium};
  font-weight: bold;
`;

const text = css`
  color: ${colors.black}
  text-align: justify;
  ${mgBottom}
`;

const BlogCard = () => {
  return (
    <div css={largeMgBottom}>
      <p css={title}>Introdução React Hooks</p>
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
