function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import Constants from "../../utils/constants";

const reduceStyle = (result = "", nextVal) => {
  return `${result} ${nextVal}`;
};

const createStyle = sizeMod => {
  const styles = [];
  sizeMod.forEach(item => {
    styles.push(determineStyle(item));
  });
  return styles;
};

const createGap = gapMod => {
  const gapStyle = [];
  gapMod.forEach(item => {
    let gap = `is-${item.gap}`;
    if (item.device) gap = `${gap}-${item.device}`;
    gapStyle.push(gap);
  });
  return gapStyle;
};

const createOption = optionMod => {
  const optionStyle = [];
  optionMod.forEach(item => {
    let option = `is-${item}`;
    optionStyle.push(option);
  });
  return optionStyle;
};

const determineStyle = styleItem => {
  let style = `is-`;
  if (styleItem.offset) style = `${style}offset-`;

  switch (styleItem.size) {
    case Constants.Columns.Sizes.ThreeQuarters:
      style = `${style}three-quarters`;
      break;

    case Constants.Columns.Sizes.TwoThirds:
      style = `is-two-thirds`;
      break;

    case Constants.Columns.Sizes.Half:
      style = `${style}half`;
      break;

    case Constants.Columns.Sizes.OneThird:
      style = `${style}one-third`;
      break;

    case Constants.Columns.Sizes.OneQuarter:
      style = `${style}one-quarter`;
      break;

    case Constants.Columns.Sizes.Full:
      style = `${style}full`;
      break;

    case Constants.Columns.Sizes.FourFifths:
      style = `${style}four-fifths`;
      break;

    case Constants.Columns.Sizes.ThreeFifths:
      style = `${style}three-fifths`;
      break;

    case Constants.Columns.Sizes.TwoFifths:
      style = `${style}two-fifths`;
      break;

    case Constants.Columns.Sizes.OneFifth:
      style = `${style}one-fifth`;
      break;

    default:
      style = `${style}${styleItem.size}`;
  }

  if (styleItem.device && !styleItem.offset) style = `${style}-${styleItem.device}`;
  return style;
};

const withModifiers = WrappedComponent => ({
  columnSizeModifier,
  children,
  ...rest
}) => {
  const styleArr = createStyle(columnSizeModifier || []).reduce(reduceStyle, "");
  return React.createElement(WrappedComponent, _extends({
    modStyle: styleArr
  }, rest), children);
};

export const withNarrow = WrappedComponent => ({
  narrow,
  children,
  ...rest
}) => {
  let narrowStyle = null;

  if (narrow) {
    narrowStyle = `is-narrow`;

    if (typeof narrow === 'string') {
      narrowStyle = `${narrowStyle}-${narrow}`;
    }
  }

  return React.createElement(WrappedComponent, _extends({
    narrowStyle: narrowStyle
  }, rest), children);
};
export const withGap = WrappedComponent => ({
  gapless,
  gap,
  children,
  ...rest
}) => {
  let gapStyle = null;
  if (gapless) gapStyle = `is-gapless`;else gapStyle = createGap(gap || []).reduce(reduceStyle, "");
  return React.createElement(WrappedComponent, _extends({
    gapStyle: gapStyle
  }, rest), children);
};
export const withOptions = WrappedComponent => ({
  options,
  children,
  ...rest
}) => {
  let optionStyle = createOption(options || []).reduce(reduceStyle, "");
  return React.createElement(WrappedComponent, _extends({
    optionStyle: optionStyle
  }, rest), children);
};
export const withDevice = WrappedComponent => ({
  device,
  children,
  ...rest
}) => {
  let deviceStyle = null;

  if (device) {
    deviceStyle = `is-${device}`;
  }

  return React.createElement(WrappedComponent, _extends({
    deviceStyle: deviceStyle
  }, rest), children);
};
export default withModifiers;