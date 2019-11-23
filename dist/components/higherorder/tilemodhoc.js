function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { withThemeColor } from "./stylehoc";

const withTileMod = WrappedComponent => ({
  styleName,
  size,
  vertical,
  ancestor,
  parent,
  child,
  notification,
  box,
  children,
  ...rest
}) => {
  let styles = [`tile`];
  if (styleName) styles = [...styles, ` is-${styleName}`];
  if (size) styles = [...styles, ` is-${size}`];
  if (vertical) styles = [...styles, ` is-vertical`];
  if (ancestor) styles = [...styles, ` is-ancestor`];
  if (parent) styles = [...styles, ` is-parent`];
  if (child) styles = [...styles, ` is-child`];
  if (notification) styles = [...styles, ` notification`];
  if (box) styles = [...styles, ` box`];
  styles = styles.join("");
  return React.createElement(WrappedComponent, _extends({
    styled: styles
  }, rest), children);
};

export default withTileMod;