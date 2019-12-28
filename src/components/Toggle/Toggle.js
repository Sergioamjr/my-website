/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const toggleWrapper = css`
  background: #eca723;
  cursor: pointer;
  width: 50px;
  display: block;
  height: 24px;
  border-radius: 50px;
  position: relative;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    top: 0;
    margin: auto;
    left: 2px;
    transform: translateX(0);
    transition: transform 0.2s ease;
    will-change: transform;
  }
  &:before {
    content: "🌞";
    position: absolute;
    right: 0;
    top: -2px;
    transform: translateX(0);
    transition: transform 0.2s ease;
    will-change: transform;
  }
`;

const inputStyle = css`
  width: 0;
  height: 0;
  display: none;
  &:checked ~ label {
    background: #333;
    &:after {
      transform: translateX(26px);
    }
    &:before {
      content: "🌚";
      transform: translateX(-26px);
    }
  }
`;

const Toggle = props => {
  return (
    <div>
      <input css={inputStyle} id="toggle" type="checkbox" {...props} />
      <label htmlFor="toggle" css={toggleWrapper}></label>
    </div>
  );
};

export default Toggle;
