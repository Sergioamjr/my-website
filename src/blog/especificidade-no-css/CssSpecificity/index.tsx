/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { countSelector } from "./utils";

const inputStyle = css`
  border: 1px solid #333;
  padding: 10px 8px;
  border-radius: 5px;
  max-width: 260px;
  width: 100%;
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
`;

const wrapper = css`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
  align-items: center;
`;

const box = css`
  font-family: "Open Sans", sans-serif;
  background: #6e00ff;
  padding: 20px;
  height: 70px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 22px;
  * {
    color: #fff;
    line-height: 0;
    margin: 0;
  }
  p:first-child {
    margin-bottom: 25px;
  }
  &:not(&:last-child) {
    margin-right: 10px;
  }
`;

const defaultState = {
  ids: 0,
  classes: 0,
  elements: 0,
};

export default function CSSSpecificityCounter() {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(defaultState);

  const onChangeHandler = ({ target: { value } }) => {
    setInput(value);
  };

  useEffect(() => {
    setCounter(() => {
      if (!input) return defaultState;
      return countSelector(input);
    });
  }, [input, setCounter]);

  return (
    <div css={wrapper}>
      <input
        css={inputStyle}
        type="text"
        placeholder="Enter the CSS selector"
        onChange={onChangeHandler}
        value={input}
      />
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={box}>
          <p>IDs</p>
          <p>{counter.ids}</p>
        </div>
        <div css={box}>
          <p>Classes</p>
          <p>{counter.classes}</p>
        </div>
        <div css={box}>
          <p>Elements</p>
          <p>{counter.elements}</p>
        </div>
      </div>
    </div>
  );
}
