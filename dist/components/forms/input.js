function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useCallback, useState, useContext, Fragment } from "react";
import { withStyle } from "../higherorder/stylehoc";
import Proptypes from "prop-types";
import styled from "styled-components";
import { InputContext } from "../../store/inputcontext";
import withSize from "../higherorder/sizehoc";
import withValidation from "../higherorder/validationhoc";
const InputCore = withStyle(styled.input.attrs(({
  ratio,
  type,
  styleName
}) => ({
  className: `input ${styleName && `is-${styleName}`} ${ratio && ratio}`,
  type: type
}))``);

const Input = ({
  name,
  type,
  required,
  validation,
  children,
  leftIcon,
  rightIcon,
  loading,
  hasError,
  ...rest
}) => {
  const [iL, iR, setHasIconsLeft, setHasIconsRight] = useContext(InputContext);

  if (leftIcon) {
    setHasIconsLeft(true);
  }

  if (rightIcon) {
    setHasIconsRight(true);
  }

  return React.createElement(Fragment, null, React.createElement(InputCore, _extends({
    name: name,
    type: type
  }, rest)), leftIcon && leftIcon("left", hasError), rightIcon && rightIcon("right", hasError));
};

Input.propTypes = {
  name: Proptypes.string.isRequired,
  leftIcon: Proptypes.func,
  rightIcon: Proptypes.func,
  validation: Proptypes.arrayOf(Proptypes.shape({
    regex: Proptypes.any.isRequired,
    message: Proptypes.string.isRequired
  }))
};
export default withValidation(withSize(Input));