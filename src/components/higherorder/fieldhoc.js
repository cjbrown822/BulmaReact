import React from "react";

const withFieldOptions = WrappedComponent => ({addons, horizontal, grouped, children, ...rest}) => {
	let addonsOptions = null;
	if(addons){
		if(typeof addons === "string"){
			addonsOptions = `has-addons has-addons-${addons}`;
		} else if(typeof addons === "boolean"){
			addonsOptions = `has-addons`;
		}
	}
	let horizontalOption = null;
	if(horizontal) horizontalOption = 'is-horizontal';
	let groupedOptions = null;
	if(grouped){
		if(typeof addons === "string"){
			groupedOptions = `is-grouped is-grouped-${grouped}`;
		} else if(typeof addons === "boolean"){
			groupedOptions = `is-grouped`;
		}
	}
	return (
		<WrappedComponent addons={addonsOptions} horizontal={horizontalOption} grouped={groupedOptions} {...rest}>
			{children}
		</WrappedComponent>
	)
};

export default withFieldOptions;