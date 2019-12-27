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
  z-index: -1;
  color: ${colors.gray};
  ${primaryFont};
`;

export const mgBottom = css`
  margin-bottom: 8px;
`;

export const secondTitle = css`
  ${mgBottom};
  color: ${colors.dark};
  font-size: ${fontSize.medium};
  font-weight: bold;
  ${primaryFont};
`;

export const largeMgBottom = css`
  margin-bottom: 20px;
`;

export const xLargeMgBottom = css`
  margin-bottom: 40px;
`;

export const text = css`
  color: ${colors.black};
  line-height: 1.8;
  font-size: 16px;
  text-align: justify;
  ${secondaryFont};
  ${mgBottom};
`;

export const thirdTitle = css`
  ${mgBottom};
  ${primaryFont};
  color: ${colors.dark};
  font-size: 20px;
  font-weight: bold;
`;

export const liStyle = css`
  margin-left: 20px;
  list-style-type: disc;
  margin-bottom: 8px;
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
