import React from "react";

export const withBreakpoints = WrappedComponent => props => {
	const { fluid, widescreen, fullhd, ...rest } = props;
	let forwardedStyle = "";
	if(fluid) forwardedStyle = forwardedStyle.concat(" is-fluid");
	if(widescreen) forwardedStyle = forwardedStyle.concat(" is-widescreen");
	if(fullhd) forwardedStyle = forwardedStyle.concat(" is-fullhd");
	return (
		<WrappedComponent breakpoints={forwardedStyle} {...rest}/>
	)
};