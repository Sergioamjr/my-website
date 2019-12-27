/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Header from "../Header";
import "./../../design/app.css";
import { backgroundStyle } from "../../design";

const Template = ({ children }) => {
  return (
    <div css={backgroundStyle}>
      <Header />
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
