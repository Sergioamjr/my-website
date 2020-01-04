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
import { IconMenu } from "../../design/icons";
import { menuOptionsPT } from "../../utils";

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

const btnStyle = css`
  background: none;
  border: 0;
  cursor: pointer;
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
            {menuOptionsPT.map(({ url, name }) => (
              <li
                key={url}
                css={css`
              ${liStyle}
              ${displayNone}
              ${showSm}
              `}
              >
                <Link to={url} css={linkStyle}>
                  {name}
                </Link>
              </li>
            ))}

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
              <button css={btnStyle} onClick={closeHandler}>
                <IconMenu />
              </button>
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
