/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
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
  margin: 0 15px;
`;

const linkStyle = css`
  ${primaryFont}
  color: var(--light)
`;

const Footer = ({ options }) => {
  return (
    <footer css={footerStyle}>
      <ul css={justifyContent}>
        {options.map(({ Icon, url, name, description }) => (
          <li
            key={name}
            css={css`
              ${liStyle}
            `}
          >
            <a
              aria-label={description}
              title={description}
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              css={linkStyle}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.node,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default Footer;
