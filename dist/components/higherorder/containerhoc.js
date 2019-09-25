function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export const withBreakpoints = WrappedComponent => props => {
  const {
    fluid,
    widescreen,
    fullhd,
    ...rest
  } = props;
  let forwardedStyle = "";
  if (fluid) forwardedStyle = forwardedStyle.concat(" is-fluid");
  if (widescreen) forwardedStyle = forwardedStyle.concat(" is-widescreen");
  if (fullhd) forwardedStyle = forwardedStyle.concat(" is-fullhd");
  return React.createElement(WrappedComponent, _extends({
    breakpoints: forwardedStyle
  }, rest));
};