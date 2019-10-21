import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
const BreadCrumbWrapper = withIs(styled.nav.attrs(({ratio, has}) => ({
	className: `breadcrumb ${ratio && ratio} ${has ? `has-${has}-separator` : ''}`
}))``);

const BreadCrumb = props => <BreadCrumbWrapper {...props}><ul>{props.children}</ul></BreadCrumbWrapper>;

export const BreadCrumbItem = props => {
	return (
		<li className={`${props.active ? `is-active` : ''}`}>
			{props.active && <a href={props.href} aria-current={"page"}>{props.children}</a>}
			{!props.active && <a href={props.href}>{props.children}</a>}
		</li>
	)
};


export default BreadCrumb;