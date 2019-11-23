function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const parseIs = is => {
  if (typeof is === "number") {
    return `is-${is}x${is}`;
  } else if (typeof is === "string") {
    return `is-${is}`;
  } else if (Array.isArray(is)) {
    let forwardedSize = ``;

    for (const mod of is) {
      forwardedSize = forwardedSize.concat(` ${parseIs(mod)}`);
    }

    return forwardedSize;
  }
};

const withIs = WrappedComponent => ({
  is,
  rounded,
  children,
  ...rest
}) => {
  let forwardedStyle = '';

  if (is) {
    forwardedStyle = parseIs(is);
  }

  let forwardedModifier = '';

  if (rounded) {
    forwardedModifier = 'is-rounded';
  }

  return React.createElement(WrappedComponent, _extends({
    ratio: forwardedStyle,
    modifier: forwardedModifier
  }, rest), children);
};

export default withIs;