/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import { colors, fontSize } from "../../design/theme";
import {
  Container,
  alignCenter,
  justifyContent,
  primaryFont
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

const Header = () => {
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
            <li css={liStyle}>
              <Link to="/" css={linkStyle}>
                Home
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/blog" css={linkStyle}>
                Blog
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/projects" css={linkStyle}>
                Projects
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/resume" css={linkStyle}>
                Resume
              </Link>
            </li>
            <li css={liStyle}>
              <Toggle onChange={updateThemeHandler} />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
