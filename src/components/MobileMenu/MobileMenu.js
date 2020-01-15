/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { primaryFont, hideSm } from "../../design";
import { IconClose } from "../../design/icons";

const Wrapper = styled.div`
  ${hideSm};
  z-index: 9;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--theme);
  top: 0;
  transition: transform 0.3s ease;
  will-change: transform;
  transform: ${props => `translateY(${props.isOpen ? "0" : "100%"}) `};
`;

const ulStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const linkStyle = css`
  ${primaryFont}
  margin-bottom: 32px;
  color: var(--light);
  display: block;
`;

const btnStyle = css`
  position: absolute;
  right: 15px;
  top: 22px;
  background: none;
  border: 0;
  cursor: pointer;
`;

const MobileMenu = ({ isOpen, closeHandler, menu }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <button onClick={closeHandler} css={btnStyle}>
        <IconClose />
      </button>
      <ul css={ulStyle}>
        {menu.map(({ name, url }) => (
          <li key={url}>
            <Link css={linkStyle} to={url}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default MobileMenu;
