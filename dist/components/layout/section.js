function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
const SectionWrapper = styled.div.attrs(({
  ratio
}) => ({
  className: `section ${ratio}`
}))``;

const Section = ({
  ratio,
  children,
  ...rest
}) => React.createElement(SectionWrapper, _extends({
  ratio: ratio
}, rest), children);

export default withIs(Section);