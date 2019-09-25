function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { withStyle } from "../higherorder/stylehoc";
const FooterWrapper = styled.footer.attrs(({
  styleName
}) => ({
  className: `footer ${styleName && `is-${styleName}`}`
}))``;

const Footer = ({
  styleName,
  children,
  ...rest
}) => React.createElement(FooterWrapper, _extends({
  styleName: styleName
}, rest), children);

export default withStyle(Footer);