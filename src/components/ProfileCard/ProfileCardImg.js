import React from "react";
import PropTypes from "prop-types";

/**
 * The **ProfileCardImg** component renders the profile image for user profile card in the webpage
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function ProfileCardImg({ src, alt, className = "" }) {
  return <img src={src} alt={alt} className={`-mt-28 mb-2 w-40 max-w-full rounded-full border-4 border-skin-accent ${className}`} />;
}

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProfileCardImg.displayName = "ProfileCardImg";
ProfileCardImg.propTypes = propTypes;

export default ProfileCardImg;