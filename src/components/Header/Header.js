/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { colors, fontSize } from "../../design/theme";
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
  background: ${colors.dark};
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

const Header = ({ closeHandler }) => {
  const updateThemeHandler = () => {
    const documentRef = document.documentElement.style;
    const isDarkMode =
      documentRef.getPropertyValue("--background") === "#1d1d1d";
    documentRef.setProperty("--background", isDarkMode ? "#fff" : "#1d1d1d");
    documentRef.setProperty("--text", !isDarkMode ? "#e0e0e0" : "#333");
    documentRef.setProperty("--title", !isDarkMode ? "#fff" : "#2c3e50");
  };

  return (
    <header css={headerStyle}>
      <Container css={justifyContent}>
        <h1 css={titleStyle}>Sérgio Júnior</h1>
        <nav css={alignCenter}>
          <ul css={justifyContent}>
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
              <Toggle onChange={updateThemeHandler} />
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
  closeHandler: PropTypes.func.isRequired
};

export default Header;
