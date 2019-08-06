import React from "react";

const withSize = WrappedComponent => ({is, rounded, children, ...rest}) => {
	let forwardedStyle = '';
	if(is){
		if(typeof is === "number"){
			forwardedStyle = `is-${is}x${is}`;
		}else if(typeof is === "string"){
			forwardedStyle = `is-${is}`;
		}
	}
	let forwardedModifier = '';
	if(rounded){
		forwardedModifier = 'is-rounded';
	}
	return (
		<WrappedComponent ratio={forwardedStyle} modifier={forwardedModifier} {...rest}>
			{children}
		</WrappedComponent>
	)
};

export default withSize;