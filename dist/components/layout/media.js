function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import Content from "./content";
const Media = styled.article.attrs(props => ({
  className: "media"
}))``;
export const MediaLeft = props => React.createElement(MediaItem, _extends({
  direction: "left"
}, props));
export const MediaRight = props => React.createElement(MediaItem, _extends({
  direction: "right"
}, props));
const MediaItem = styled.figure.attrs(({
  direction
}) => ({
  className: `media-${direction}`
}))``;
const MediaContentWrapper = styled.div.attrs(props => ({
  className: "media-content"
}))``;
export const MediaContent = ({
  children
}) => {
  return React.createElement(MediaContentWrapper, null, React.createElement(Content, null, children));
};
export default Media;