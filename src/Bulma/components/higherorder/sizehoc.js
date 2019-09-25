import React from "react";
const parseIs = is => {
	if(typeof is === "number"){
		return `is-${is}x${is}`;
	}else if(typeof is === "string"){
		return `is-${is}`;
	}else if(Array.isArray(is)){
		let forwardedSize = ``;
		for(const mod of is){
			forwardedSize = forwardedSize.concat(` ${parseIs(mod)}`);
		}
		return forwardedSize;
	}
};
const withSize = WrappedComponent => ({is, rounded, children, ...rest}) => {
	let forwardedStyle = '';

	if(is){
		forwardedStyle = parseIs(is);
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