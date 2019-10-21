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

const MenuListItemLabel = withIs(styled.a.attrs(({ratio, href}) => ({
	className: `${ratio ? `${ratio}` : ''}`,
	href: href
}))``);

export const MenuSubList = ({children,  label, ...rest}) => (
	<li>
		<MenuListItemLabel {...rest}>{label}</MenuListItemLabel>
		<ul>
			{children}
		</ul>
	</li>
);

export const MenuListItem = ({children,  ...rest}) => (
	<li><MenuListItemLabel {...rest}>{children}</MenuListItemLabel></li>
);


export default Menu;