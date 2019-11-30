import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor } from "../higherorder/stylehoc";

const NavBar = withIs(withThemeColor(styled.nav.attrs(({arialLabel, styleName, ratio}) => ({
	className: `navbar ${styleName ? `is-${styleName}` : ''} ${ratio ? `${ratio}` : ''}`,
	role: `navigation`,
	ariaLabel: arialLabel
}))``));

export const NavBrand = styled.div.attrs(props => ({
	className: `navbar-brand`
}))``;

const NavBarBurgerWrapper = withIs(styled.a.attrs(({ratio, active}) => ({
	className: `navbar-burger ${ratio ? `${ratio}` : ''} ${active && 'is-active'}`,
	arialLabel: `menu`,
	ariaExpanded: false,
	role: 'button'
}))``);

export const NavBarBurger = props => {
	const {
		activate,
		active,
		...rest
	} = {...props};
	const onClick = e => {
		if(activate) activate(!active);
	};
	return(
		<NavBarBurgerWrapper {...rest} onClick={onClick} active={active}>
			<span aria-hidden={true}/>
			<span aria-hidden={true}/>
			<span aria-hidden={true}/>
		</NavBarBurgerWrapper>
	)
};

export const NavBarMenu = styled.div.attrs(({ratio, active, onClick}) => ({
	className: `navbar-menu ${ratio ? `${ratio}` : ''} ${active && 'is-active'}`,
	onClick: onClick
}))``;

export const NavBarStart = styled.div.attrs(() => ({
	className: `navbar-start`
}))``;

export const NavBarEnd = styled.div.attrs(() => ({
	className: `navbar-end`
}))``;

export const NavBarItem = {
	a: withIs(styled.a.attrs(({ratio}) => ({
		className: `navbar-item ${ratio ? `${ratio}` : ''}`
	}))``),
	div: withIs(styled.div.attrs(({ratio}) => ({
		className: `navbar-item ${ratio ? `${ratio}` : ''}`
	}))``)
};

export const NavBarDropdownMenu = withIs(styled.a.attrs(({ratio, up}) => ({
	className: `navbar-item has-dropdown ${up && `has-dropdown-up`}${ratio ? `${ratio}` : ''}`
}))``);

export const NavBarLink = withIs(styled.a.attrs(({ratio}) => ({
	className: `navbar-link ${ratio ? `${ratio}` : ''}`
}))``);

export const NavBarDropdown = withIs(styled.div.attrs(({ratio}) => ({
	className: `navbar-dropdown ${ratio ? `${ratio}` : ''}`
}))``);

export const NavBarDivider = styled.hr.attrs(props => ({
	className: `navbar-divider`
}))``;

export default NavBar;