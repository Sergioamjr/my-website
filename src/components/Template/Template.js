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
import {
  providerCorretlyMenu,
  providerCorretlyFooter,
  returnActivedMenu,
  returnWebsiteLang,
  returnLocationProperty
} from "../../utils";

const childrenStyle = css`
  min-height: calc(100vh - 200px);
`;

const Template = ({ children, ...props }) => {
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);
  const [themeMode, updateThemeMode] = useThemeMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  const href = returnLocationProperty("href");
  const origin = returnLocationProperty("origin");
  const pathName = returnLocationProperty("pathname");
  const menuOptions = providerCorretlyMenu(href);
  const footerOptions = providerCorretlyFooter(href);
  const actived = returnActivedMenu(pathName);
  const lang = returnWebsiteLang(pathName);

  return (
    <div css={backgroundStyle}>
      <SEO {...props} lang={lang} href={href} origin={origin} />
      <Header
        activedMenu={actived}
        menu={menuOptions}
        updateThemeMode={updateThemeMode}
        themeMode={themeMode}
        closeHandler={toggleMobileMenu}
      />
      <MobileMenu
        activedMenu={actived}
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
