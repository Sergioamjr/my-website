/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { primaryFont, mgBottom, hideSm } from "../../design";

const Wrapper = styled.div`
  ${hideSm};
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
  ${mgBottom}
  color: var(--light);
  display: block;
`;

const btnStyle = css`
  position: absolute;
  right: 15px;
  top: 20px;
`;

const MobileMenu = ({ isOpen, closeHandler }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <button onClick={closeHandler} css={btnStyle}>
        Close
      </button>
      <ul css={ulStyle}>
        <li>
          <Link css={linkStyle} to="/#">
            Home
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/#">
            Home
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/#">
            Home
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/#">
            Home
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default MobileMenu;
