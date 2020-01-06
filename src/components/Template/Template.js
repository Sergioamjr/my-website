/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import { backgroundStyle } from "../../design";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";
import SEO from "../seo";
import { useThemeMode } from "../../hooks";
import "./../../design/app.css";

const childrenStyle = css`
  min-height: calc(100vh - 200px);
`;

const Template = ({ children, ...props }) => {
  console.log(props);
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);
  const [themeMode, updateThemeMode] = useThemeMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  return (
    <div css={backgroundStyle}>
      <SEO {...props} />
      <Header
        updateThemeMode={updateThemeMode}
        themeMode={themeMode}
        closeHandler={toggleMobileMenu}
      />
      <MobileMenu
        closeHandler={toggleMobileMenu}
        isOpen={isMobileMenuOpended}
      />
      <div css={childrenStyle}>{children}</div>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Template;
