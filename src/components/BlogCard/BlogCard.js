/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Tags from "../Tags";
import {
  text,
  xLargeMgBottom,
  secondTitle,
  mgBottom,
  linkStyle
} from "../../design";

const zIndex = css`
  position: relative;
  z-index: 1;
  ${xLargeMgBottom};
`;

const BlogCard = ({ title, excerpt, path, categories, externalLink }) => {
  return (
    <div css={zIndex}>
      <p css={secondTitle}>{title}</p>
      <p css={text} dangerouslySetInnerHTML={{ __html: excerpt }} />
      {categories.length > 0 && (
        <div css={mgBottom}>
          {categories.map(({ category }, index) => (
            <Tags key={index} name={category} />
          ))}
        </div>
      )}
      {externalLink && path && (
        <a
          rel="noopener noreferrer"
          target="_blank"
          css={linkStyle}
          href={path}
        >
          Read more
        </a>
      )}
      {!externalLink && path && (
        <Link css={linkStyle} to={`/${path}`}>
          Read more
        </Link>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  externalLink: PropTypes.bool,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string
    })
  )
};

export default BlogCard;
