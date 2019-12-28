/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import { justifyContent, primaryFont } from "../../design";

const footerStyle = css`
  background: var(--theme);
  height: 60px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

const liStyle = css`
  margin-left: 15px;
`;

const linkStyle = css`
  ${primaryFont}
  color: var(--light)
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <ul css={justifyContent}>
        <li
          css={css`
            ${liStyle}
          `}
        >
          <Link to="/" css={linkStyle}>
            LinkedIn
          </Link>
        </li>
        <li
          css={css`
            ${liStyle}
          `}
        >
          <Link to="/blog" css={linkStyle}>
            Github
          </Link>
        </li>
        <li
          css={css`
            ${liStyle}
          `}
        >
          <Link to="/projects" css={linkStyle}>
            Medium
          </Link>
        </li>
        <li
          css={css`
            ${liStyle}
          `}
        >
          <Link to="/resume" css={linkStyle}>
            CodePen
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
