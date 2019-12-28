/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { fontSize } from "../../design/theme";
import {
  Container,
  alignCenter,
  justifyContent,
  primaryFont,
  displayNone,
  showSm,
  hideSm
} from "../../design";
import Toggle from "../Toggle";

const headerStyle = css`
  background: var(--theme);
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const liStyle = css`
  margin-left: 15px;
`;

const titleStyle = css`
  ${primaryFont}
  font-size: ${fontSize.medium};
  color: var(--light)
`;

const linkStyle = css`
  ${primaryFont}
  color: var(--light)
`;

const Header = ({ closeHandler, updateThemeMode, themeMode }) => {
  return (
    <header css={headerStyle}>
      <Container css={justifyContent}>
        <h1 css={titleStyle}>Sérgio Júnior</h1>
        <nav css={alignCenter}>
          <ul
            css={css`
              ${justifyContent};
              align-items: center;
            `}
          >
            <li
              css={css`
                ${liStyle}
                ${displayNone}
                ${showSm}
              `}
            >
              <Link to="/" css={linkStyle}>
                Home
              </Link>
            </li>
            <li
              css={css`
                ${liStyle}
                ${displayNone}
                ${showSm}
              `}
            >
              <Link to="/blog" css={linkStyle}>
                Blog
              </Link>
            </li>
            <li
              css={css`
                ${liStyle}
                ${displayNone}
                ${showSm}
              `}
            >
              <Link to="/projects" css={linkStyle}>
                Projects
              </Link>
            </li>
            <li
              css={css`
                ${liStyle}
                ${displayNone}
                ${showSm}
              `}
            >
              <Link to="/resume" css={linkStyle}>
                Resume
              </Link>
            </li>
            <li css={liStyle}>
              <Toggle
                checked={themeMode === "dark"}
                onChange={updateThemeMode}
              />
            </li>
            <li
              css={css`
                ${liStyle}
                ${hideSm}
              `}
            >
              <button onClick={closeHandler}>Menu</button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

Header.propTypes = {
  themeMode: PropTypes.string.isRequired,
  updateThemeMode: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default Header;
