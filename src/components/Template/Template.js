import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import "./../../design/app.css";

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
