function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const CheckboxCore = styled.label.attrs(() => ({
  className: `checkbox`
}))``;

const Checkbox = ({
  name,
  disabled,
  children,
  ...rest
}) => React.createElement(CheckboxCore, {
  disabled: disabled
}, React.createElement("input", _extends({}, rest, {
  type: "checkbox",
  disabled: disabled,
  name: name
})), children);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired
};
export default Checkbox;