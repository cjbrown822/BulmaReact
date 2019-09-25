function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment } from "react";
import styled from "styled-components";
import withDisplay from "../higherorder/displayhoc";
import Constants from "../../utils/constants";
const LevelWrapper = styled.div.attrs(props => ({
  className: `level ${props.display && props.display}`
}))``;
const LevelItem = styled.div.attrs(() => ({
  className: "level-item"
}))``;
const SideItem = styled.div.attrs(props => ({
  className: `level-${props.side && props.side}`
}))``;

const MapItem = ({
  children,
  ...rest
}) => {
  return React.createElement(Fragment, null, Array.isArray(children) ? children.map((child, index) => React.createElement(LevelItem, _extends({
    key: index
  }, rest), child)) : React.createElement(LevelItem, rest, children));
};

const LeftLevelItem = props => {
  return React.createElement(SideItem, {
    side: Constants.Direction.Left
  }, React.createElement(MapItem, props));
};

const RightLevelItem = props => {
  return React.createElement(SideItem, {
    side: Constants.Direction.Right
  }, React.createElement(MapItem, props));
};

const Level = withDisplay(LevelWrapper);
export { Level, LeftLevelItem, RightLevelItem, LevelItem };