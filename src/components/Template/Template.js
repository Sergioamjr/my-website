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
import { providerCorretlyMenu, providerCorretlyFooter } from "../../utils";

const childrenStyle = css`
  min-height: calc(100vh - 200px);
`;

const Template = ({ children, ...props }) => {
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);
  const [themeMode, updateThemeMode] = useThemeMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  const href = typeof window !== "undefined" ? window.location.href : "";
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const menuOptions = providerCorretlyMenu(href);
  const footerOptions = providerCorretlyFooter(href);

  return (
    <div css={backgroundStyle}>
      <SEO {...props} href={href} origin={origin} />
      <Header
        menu={menuOptions}
        updateThemeMode={updateThemeMode}
        themeMode={themeMode}
        closeHandler={toggleMobileMenu}
      />
      <MobileMenu
        menu={menuOptions}
        closeHandler={toggleMobileMenu}
        isOpen={isMobileMenuOpended}
      />
      <div css={childrenStyle}>{children}</div>
      <Footer options={footerOptions} />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
