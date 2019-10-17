import React from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
import Icon from "../elements/icon";
import Button from "../elements/button";

const DropDownWrapper =withSize(styled.div.attrs(({ratio}) => ({
	className: `dropdown ${ratio ? `${ratio}`  : ''}`
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

export const DropDownItem = styled.a.attrs(({ratio, href}) => ({
	className: `dropdown-item ${ratio ? `${ratio}` : ''}`,
	href: href
}))``;

export const DropDownDivider = styled.hr.attrs(props => ({
	classname: `dropdown-divider`
}))``;

const DropDown = ({text, icon, children, ...rest}) => {
	return (
		<DropDownWrapper {...rest}>
			<DropDownTrigger>
				<Button aria-haspopup={true}>
					<span>{text}</span>
					{icon && icon()}
					{!icon && <Icon icon={"angle-down"} aria-hidden={true} is={"small"}/>}
				</Button>
			</DropDownTrigger>
			<DropDownMenu>
				<DropdownContent>
					{children}
				</DropdownContent>
			</DropDownMenu>
		</DropDownWrapper>
	)
};

export default DropDown;
