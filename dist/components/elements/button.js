function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from "react";
import styled from "styled-components";
import { withStyle } from "../higherorder/stylehoc";
import withSize from "../higherorder/sizehoc";
import { FormContext } from "../../store/formcontext";
const Button = withSize(withStyle(styled.button.attrs(({
  disabled = false,
  type = "button",
  styleName,
  ratio
}) => ({
  className: `button ${styleName && `is-${styleName}`} ${ratio && ratio}`,
  type: type,
  disabled: disabled
}))``));
export const SubmitButton = props => {
  const [errors, dispatch, disable] = useContext(FormContext);
  return React.createElement(Button, _extends({
    type: "submit"
  }, props, {
    disabled: disable
  }));
};
export const ResetButton = props => React.createElement(Button, _extends({
  type: "reset"
}, props));
export default Button;