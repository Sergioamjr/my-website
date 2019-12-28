/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import "./../../design/app.css";
import { backgroundStyle } from "../../design";
import MobileMenu from "../MobileMenu";

const Template = ({ children }) => {
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  return (
    <div css={backgroundStyle}>
      <Header closeHandler={toggleMobileMenu} />
      <MobileMenu
        closeHandler={toggleMobileMenu}
        isOpen={isMobileMenuOpended}
      />
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
