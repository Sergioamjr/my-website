import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { colors, fontSize } from "./theme";

export const primaryFont = css`
  font-family: "Open Sans", sans-serif;
`;

export const secondaryFont = css`
  font-family: "Merriweather", serif;
`;

export const Container = styled.div`
  max-width: ${props => (props.small ? "700px" : "1200px")};
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
`;

export const pageTitle = css`
  font-size: ${fontSize.large};
  font-size: 80px;
  margin-bottom: -45px;
  left: -15px;
  position: relative;
  color: var(--text);
  ${primaryFont};
  opacity: 0.15;
`;

export const mgBottom = css`
  margin-bottom: 8px;
`;

export const secondTitle = css`
  ${mgBottom};
  color: var(--title);
  font-size: ${fontSize.medium};
  font-weight: bold;
  ${primaryFont};
`;

export const largeMgBottom = css`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const xLargeMgBottom = css`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const text = css`
  color: var(--text);
  line-height: 1.8;
  font-size: 16px;
  ${secondaryFont};
  ${mgBottom};
  transition: color 0.3s ease;
  will-change: color;
`;

export const thirdTitle = css`
  ${mgBottom};
  ${primaryFont};
  color: var(--title);
  font-size: 20px;
  font-weight: bold;
`;

export const liStyle = css`
  margin-left: 20px;
  list-style-type: disc;
  margin-bottom: 8px;
  color: var(--text);
`;

export const wrapStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

export const linkStyle = css`
  line-height: 1.8;
  ${primaryFont};
  color: ${colors.primary};
  border-bottom: 2px solid;
  &:hover {
    color: ${colors.darkPrimary};
  }
`;

export const tags = css`
  color: #fff;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 10px;
  font-size: ${fontSize.small};
  background: ${colors.danger};
  ${primaryFont};
`;

export const fontWeight = css`
  font-weight: bold;
  margin-bottom: 8px;
  ${primaryFont};
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const justifyContent = css`
  display: flex;
  justify-content: space-between;
`;

export const backgroundStyle = css`
  background: var(--background);
  height: 100vh;
  overflow: scroll;
  transition: background 0.3s ease;
  will-change: background;
`;

export const hideSm = css`
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const showSm = css`
  @media screen and (min-width: 720px) {
    display: block;
  }
`;

export const displayNone = css`
  display: none;
`;
