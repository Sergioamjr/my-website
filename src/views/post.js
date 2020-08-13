/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Template from "../components/Template";
import {
  Container,
  secondTitle,
  text,
  largeMgBottom,
  mgBottom,
  linkStyle,
  secondaryFont,
} from "../design";
import Disqus from "../components/Disqus";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";

const captionStyle = css`
  margin-top: -8px;
  text-align: center;
  color: #6b6b6b;
`;

const PostView = ({
  id,
  title,
  url,
  img,
  tranlation,
  excerpt,
  date,
  content,
  translationLabel,
  publishedAt,
  imgAlt,
  caption,
  mdx,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Template thumbnail={img} title={title} description={excerpt}>
      <Container small>
        <article css={largeMgBottom} className="post-content">
          {tranlation !== "skip" && (
            <div css={mgBottom}>
              <Link
                className="secondary-font"
                css={css`
                  ${secondaryFont};
                  ${linkStyle}}
                `}
                to={tranlation}
              >
                {translationLabel}
              </Link>
            </div>
          )}
          <h1 css={secondTitle} dangerouslySetInnerHTML={{ __html: title }} />
          {false && (
            <p
              css={css`
                ${text};
                color: var(--gray);
              `}
            >
              {publishedAt}
              <time dateTime={date}> {date}</time>
            </p>
          )}
          {img && <img src={img} alt={imgAlt} />}
          {caption && (
            <div
              css={css`
                ${text};
                ${captionStyle}
              `}
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          )}
          {mdx ? (
            <MDXRenderer>{content}</MDXRenderer>
          ) : (
            <div css={text} dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </article>
        <Disqus url={url} id={id} />
      </Container>
    </Template>
  );
};

PostView.propTypes = {
  caption: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tranlation: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  translationLabel: PropTypes.string,
  publishedAt: PropTypes.string,
  mdx: PropTypes.bool,
};

PostView.defaultProps = {
  publishedAt: "Publicado em",
  translationLabel: "Read this article in English",
};

export default PostView;
