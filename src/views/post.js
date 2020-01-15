/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import {
  Container,
  secondTitle,
  text,
  largeMgBottom,
  mgBottom,
  linkStyle,
  secondaryFont
} from "../design";
import Disqus from "../components/Disqus";

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
  publishedAt
}) => {
  return (
    <Template thumbnail={img} title={title} description={excerpt}>
      <Container small>
        <article css={largeMgBottom} className="post-content">
          <div css={mgBottom}>
            <Link
              css={css`
                ${(secondaryFont, linkStyle)}
              `}
              to={tranlation}
            >
              {translationLabel}
            </Link>
          </div>
          <h1 css={secondTitle} dangerouslySetInnerHTML={{ __html: title }} />
          <p
            css={css`
              ${text};
              color: var(--gray);
            `}
          >
            {publishedAt}
            <time dateTime={date}> {date}</time>
          </p>
          {img && <img src={img} alt={title} />}

          <div css={text} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <Disqus url={url} id={id} />
      </Container>
    </Template>
  );
};

PostView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tranlation: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  translationLabel: PropTypes.string,
  publishedAt: PropTypes.string
};

PostView.defaultProps = {
  publishedAt: "Publicado em",
  translationLabel: "Read this article in English"
};

export default PostView;
