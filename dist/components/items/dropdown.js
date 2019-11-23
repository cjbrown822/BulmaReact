import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import Icon from "../elements/icon";
import Button from "../elements/button";
const DropDownWrapper = withIs(styled.div.attrs(({
  ratio
}) => ({
  className: `dropdown ${ratio ? `${ratio}` : ''}`
}))``);
const DropDownTrigger = styled.div.attrs(props => ({
  className: `dropdown-trigger`
}))``;
const DropDownMenu = styled.div.attrs(props => ({
  className: `dropdown-menu`,
  role: "menu"
}))``;
const DropdownContent = styled.div.attrs(props => ({
  className: `dropdown-content`
}))``;
export const DropDownItem = styled.a.attrs(({
  ratio,
  href
}) => ({
  className: `dropdown-item ${ratio ? `${ratio}` : ''}`,
  href: href
}))``;
export const DropDownDivider = styled.hr.attrs(props => ({
  classname: `dropdown-divider`
}))``;

const DropDown = ({
  text,
  icon,
  children,
  ...rest
}) => {
  return React.createElement(DropDownWrapper, rest, React.createElement(DropDownTrigger, null, React.createElement(Button, {
    "aria-haspopup": true
  }, React.createElement("span", null, text), icon && icon(), !icon && React.createElement(Icon, {
    icon: "angle-down",
    "aria-hidden": true,
    is: "small"
  }))), React.createElement(DropDownMenu, null, React.createElement(DropdownContent, null, children)));
};

export default DropDown;