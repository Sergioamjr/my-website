/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import {
  secondTitle,
  largeMgBottom,
  text,
  fontWeight,
  primaryFont
} from "./../../design";

const roleStyle = css`
  ${fontWeight};
  ${text};
  ${primaryFont};
  text-transform: uppercase;
`;

const ProfessionalExperienceItem = ({ company, role, period, description }) => {
  return (
    <div css={largeMgBottom}>
      <p css={secondTitle}>{company}</p>
      <p css={roleStyle}>{role}</p>
      <p css={text}>{period}</p>
      <div
        className="post-content"
        css={text}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

ProfessionalExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProfessionalExperienceItem;
