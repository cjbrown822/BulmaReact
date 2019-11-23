import React from "react";
import styled from "styled-components";
import { withThemeColor } from "../higherorder/stylehoc";
import withIs from "../higherorder/sizehoc";
const IconWrapper = styled.span.attrs(({
  styleName,
  direction
}) => ({
  className: `icon ${styleName ? `has-text-${styleName}` : ''} ${direction ? `is-${direction}` : ''}`
}))``;
const IconCore = styled.i.attrs(({
  library = 'fas',
  icon
}) => ({
  className: `${library} fa-${icon}`
}))``;

const Icon = ({
  library,
  icon,
  styleName,
  direction
}) => {
  return React.createElement(IconWrapper, {
    styleName: styleName,
    direction: direction
  }, React.createElement(IconCore, {
    library: library,
    icon: icon
  }));
};

export default withIs(withThemeColor(Icon));