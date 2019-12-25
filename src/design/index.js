import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { colors, fontSize } from "./theme"

export const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const Container = styled.div`
  max-width: ${props => (props.small ? "700px" : "1200px")};
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
`

export const pageTitle = css`
  font-size: ${fontSize.large};
  font-size: 80px;
  margin-bottom: -45px;
  left: -15px;
  position: relative;
  z-index: -1;
  color: ${colors.gray};
`

export const mgBottom = css`
  margin-bottom: 8px;
`

export const secondTitle = css`
  ${mgBottom};
  color: ${colors.dark};
  font-size: ${fontSize.medium};
  font-weight: bold;
`

export const largeMgBottom = css`
  margin-bottom: 20px;
`

export const xLargeMgBottom = css`
  margin-bottom: 40px;
`

export const text = css`
  color: ${colors.black};
  line-height: 1.8;
  font-size: 16px;
  text-align: justify;
  font-family: "Helvetica Neue";
  ${mgBottom}
`

export const thirdTitle = css`
  ${mgBottom};
  color: ${colors.dark};
  font-size: 20px;
  font-weight: bold;
`

export const liStyle = css`
  margin-left: 15px;
`

export const wrapStyle = css`
  display: flex;
  flex-wrap: wrap;
`

export const linkStyle = css`
  line-height: 1.8;
`
