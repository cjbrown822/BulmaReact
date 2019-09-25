import React from "react";

export const withStyle = WrappedComponent => props => {
	const { primary, danger, warning, success, info, ...rest} = props;
	let forwardedStyle = "";
	if(primary) forwardedStyle = "primary";
	else if(danger) forwardedStyle = "danger";
	else if(warning) forwardedStyle = "warning";
	else if(success) forwardedStyle = "success";
	else if(info) forwardedStyle = "info";
	return (
		<WrappedComponent styleName={forwardedStyle} {...rest} />
	)
};