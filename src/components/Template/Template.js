/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Location } from "@reach/router";
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
  const [isMobileMenuOpended, setIsMobileMenuOpended] = useState(false);
  const [themeMode, updateThemeMode] = useThemeMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpended(v => !v);
  };

  return (
    <Location>
      {({ location }) => {
        const { pathname, href, origin } = location;
        return (
          <div css={backgroundStyle}>
            <SEO {...props} href={href} origin={origin} />
            <Header
              pathname={pathname}
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
      }}
    </Location>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
