import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
const Menu = styled.aside.attrs(props => ({
  className: `menu`
}))``;
export const MenuLabel = styled.p.attrs(props => ({
  className: `menu-label`
}))``;
export const MenuList = styled.ul.attrs(props => ({
  className: `menu-list`
}))``;
const MenuListItemLabel = withIs(styled.a.attrs(({
  ratio,
  href
}) => ({
  className: `${ratio ? `${ratio}` : ''}`,
  href: href
}))``);
export const MenuSubList = ({
  children,
  label,
  ...rest
}) => React.createElement("li", null, React.createElement(MenuListItemLabel, rest, label), React.createElement("ul", null, children));
export const MenuListItem = ({
  children,
  ...rest
}) => React.createElement("li", null, React.createElement(MenuListItemLabel, rest, children));
export default Menu;