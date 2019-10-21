import React from "react";

export const withThemeColor = WrappedComponent => props => {
	const { primary, danger, warning, success, info, dark, black, light, white, ...rest} = props;
	let forwardedStyle = "";
	if(primary) forwardedStyle = "primary";
	else if(danger) forwardedStyle = "danger";
	else if(warning) forwardedStyle = "warning";
	else if(success) forwardedStyle = "success";
	else if(info) forwardedStyle = "info";
	else if(dark) forwardedStyle = "dark";
	else if(black) forwardedStyle = "black";
	else if(light) forwardedStyle = "light";
	else if(white) forwardedStyle = "white";
	return (
		<WrappedComponent styleName={forwardedStyle} {...rest} />
	)
};