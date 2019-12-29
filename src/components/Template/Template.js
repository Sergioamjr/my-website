/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import "./../../design/app.css";
import { backgroundStyle } from "../../design";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";
import SEO from "../seo";

const key = "sj";

const setLocalStorage = value => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getLocalStorage = (item = key) => {
  if (typeof localStorage !== "undefined") {
    const value = localStorage.getItem(item) || "{}";
    return JSON.parse(value);
  }
  return {};
};

const getThemeMode = () => {
  const { themeMode } = getLocalStorage();
  return themeMode || "light";
};

const childrenStyle = css`
  min-height: calc(100vh - 200px);
`;

const Template = ({ children, ...props }) => {
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);
  const [themeMode, setThemeMode] = useState(getThemeMode);

  useEffect(() => {
    const documentRef = document.documentElement.style;
    const isDarkMode = themeMode === "dark";
    documentRef.setProperty("--background", !isDarkMode ? "#fff" : "#1d1d1d");
    documentRef.setProperty("--text", isDarkMode ? "#e0e0e0" : "#333");
    documentRef.setProperty("--title", isDarkMode ? "#fff" : "#2c3e50");
    setLocalStorage({ themeMode });
  }, [themeMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  const updateThemeMode = () => {
    setThemeMode(v => (v === "light" ? "dark" : "light"));
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
