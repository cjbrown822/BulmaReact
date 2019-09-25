function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
const RadioCore = styled.label.attrs(({
  disabled
}) => ({
  className: `radio`
}))``;

const Radio = ({
  disabled,
  name,
  checked,
  children,
  ...rest
}) => React.createElement(RadioCore, _extends({
  disabled: disabled
}, rest), React.createElement("input", {
  type: "radio",
  name: name,
  disabled: disabled,
  defaultChecked: checked
}), children);

export default Radio;