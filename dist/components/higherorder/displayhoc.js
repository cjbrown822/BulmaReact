function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";

const withDisplay = WrappedContainer => props => {
  const {
    display,
    ...rest
  } = props;
  let forwardedStyle = "";
  if (display) forwardedStyle = `is-${display}`;
  return React.createElement(WrappedContainer, _extends({
    display: forwardedStyle
  }, rest));
};

withDisplay.PropTypes = {
  display: PropTypes.string
};
export default withDisplay;