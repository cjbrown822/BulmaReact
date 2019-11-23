import React from "react";
import styled from "styled-components";
import { withThemeColor } from "../higherorder/stylehoc";
const NotificationWrapper = withThemeColor(styled.div.attrs(({
  styleName
}) => ({
  className: `notification ${styleName && `is-${styleName}`}`
}))``);

const Notification = ({
  children,
  ...rest
}) => {
  return React.createElement(NotificationWrapper, rest, children);
};

export default Notification;