function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export const withStyle = WrappedComponent => props => {
  const {
    primary,
    danger,
    warning,
    success,
    info,
    ...rest
  } = props;
  let forwardedStyle = "";
  if (primary) forwardedStyle = "primary";else if (danger) forwardedStyle = "danger";else if (warning) forwardedStyle = "warning";else if (success) forwardedStyle = "success";else if (info) forwardedStyle = "info";
  return React.createElement(WrappedComponent, _extends({
    styleName: forwardedStyle
  }, rest));
};