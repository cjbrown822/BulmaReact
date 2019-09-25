function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import Constants from "../../utils/constants";
import { withStyle } from "../higherorder/stylehoc";
import withSize from "../higherorder/sizehoc";
const HeroWrapper = styled.div.attrs(({
  bold,
  modifier,
  styleName,
  ratio
}) => ({
  className: `hero ${modifier && `is-${modifier}`} ${styleName && `is-${styleName}`} ${ratio} ${bold && `is-bold`}`
}))``;

const Hero = ({
  ratio,
  modifier,
  styleName,
  children,
  ...rest
}) => {
  return React.createElement(HeroWrapper, _extends({
    styleName: styleName,
    modifier: modifier,
    ratio: ratio
  }, rest), children);
};

const HeroItem = styled.div.attrs(({
  itemType
}) => ({
  className: `hero-${itemType}`
}))``;
export const HeroHeader = ({
  children
}) => React.createElement(HeroItem, {
  itemType: Constants.Hero.Items.Head
}, children);
export const HeroBody = ({
  children
}) => React.createElement(HeroItem, {
  itemType: Constants.Hero.Items.Body
}, children);
export const HeroFooter = ({
  children
}) => React.createElement(HeroItem, {
  itemType: Constants.Hero.Items.Foot
}, children);
export default withSize(withStyle(Hero));