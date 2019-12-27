/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { tags } from "../../design";

const Tags = ({ name }) => {
  return <span css={tags}>{name}</span>;
};

Tags.propTypes = {
  name: PropTypes.string.isRequired
};

export default Tags;
