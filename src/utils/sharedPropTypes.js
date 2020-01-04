import PropTypes from "prop-types";

export const postPropTypes = {
  location: PropTypes.shape({
    href: PropTypes.string
  }),
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.string
    })
  }).isRequired
};
