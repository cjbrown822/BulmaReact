function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
const Content = styled.div.attrs(({
  ratio
}) => ({
  className: `content`
}))``;
const OrderedListBase = withSize(styled.ol.attrs(({
  ratio
}) => ({
  className: `${ratio}`
}))``);
export const OrderedList = ({
  type,
  children,
  ...rest
}) => {
  return React.createElement(Content, null, React.createElement(OrderedListBase, _extends({
    type: type
  }, rest), children.map((item, index) => {
    return React.createElement("li", {
      key: index
    }, item);
  })));
};
export default Content;