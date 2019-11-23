function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor } from "../higherorder/stylehoc";
import { InputContext } from "../../store/inputcontext";
import PropTypes from "prop-types";
const SelectWrapper = withIs(withThemeColor(styled.div.attrs(({
  ratio,
  styleName,
  multiple,
  loading
}) => ({
  className: `select ${ratio && `${ratio}`} ${styleName && `is-${styleName}`} ${multiple && `is-multiple`} ${loading && `is-loading`}`
}))``));

const Select = ({
  name,
  is,
  multiple,
  numRows,
  children,
  icon,
  ...rest
}) => {
  const [f1, f2, setHasIconsLeft] = useContext(InputContext);
  if (icon) setHasIconsLeft(true);
  return React.createElement(Fragment, null, React.createElement(SelectWrapper, _extends({
    is: is,
    multiple: multiple
  }, rest), React.createElement("select", {
    multiple: multiple,
    size: numRows,
    name: name
  }, children)), icon && icon("left"));
};

Select.propTypes = {
  name: PropTypes.string.isRequired
};
export default Select;