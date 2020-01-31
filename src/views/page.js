/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import { Container, pageTitle, mgBottom, secondTitle } from "../design";

const Page = ({ title, subtitle, translateLabel, translateTo, children }) => {
  return (
    <Template>
      <Container small>
        <div className="post-content">
          {translateLabel && translateTo && (
            <div
              css={css`
                ${mgBottom}
              `}
            >
              <Link className="secondary-font" to={translateTo}>
                {translateLabel}
              </Link>
            </div>
          )}
          {title && <h2 css={pageTitle}>{title}</h2>}
          {subtitle && <p css={secondTitle}>{subtitle}</p>}
          {children}
        </div>
      </Container>
    </Template>
  );
};

export default Page;

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  translateLabel: PropTypes.string,
  translateTo: PropTypes.string,
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  title: "",
  subtitle: "",
  translateLabel: "",
  translateTo: ""
};
