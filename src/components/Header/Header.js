/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import { colors, fontSize } from "../../design/theme";
import { Container } from "../../design";

const headerStyle = css`
  background: ${colors.dark};
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const justifyContent = css`
  display: flex;
  justify-content: space-between;
`;

const liStyle = css`
  margin-left: 15px;
`;

const lightColor = css`
  color: #fff;
`;

const titleStyle = css`
  ${lightColor}
  font-size: ${fontSize.medium};
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Container css={justifyContent}>
        <h1 css={titleStyle}>Sérgio Júnior</h1>
        <nav css={alignCenter}>
          <ul css={justifyContent}>
            <li css={liStyle}>
              <Link to="/" css={lightColor}>
                Home
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/blog" css={lightColor}>
                Blog
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/projects" css={lightColor}>
                Projects
              </Link>
            </li>
            <li css={liStyle}>
              <Link to="/resume" css={lightColor}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
