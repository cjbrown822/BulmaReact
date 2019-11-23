function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export const withThemeColor = WrappedComponent => props => {
  const {
    primary,
    danger,
    warning,
    success,
    info,
    dark,
    black,
    light,
    white,
    ...rest
  } = props;
  let forwardedStyle = "";
  if (primary) forwardedStyle = "primary";else if (danger) forwardedStyle = "danger";else if (warning) forwardedStyle = "warning";else if (success) forwardedStyle = "success";else if (info) forwardedStyle = "info";else if (dark) forwardedStyle = "dark";else if (black) forwardedStyle = "black";else if (light) forwardedStyle = "light";else if (white) forwardedStyle = "white";
  return React.createElement(WrappedComponent, _extends({
    styleName: forwardedStyle
  }, rest));
};