import React from "react";

const withFieldOptions = WrappedComponent => ({addons, loading, horizontal, grouped, children, ...rest}) => {
	let addonsOptions = null;
	if(addons){
		if(typeof addons === "string"){
			addonsOptions = `has-addons has-addons-${addons}`;
		} else if(typeof addons === "boolean"){
			addonsOptions = `has-addons`;
		}
	}
	let horizontalOption = null;
	let loadingOption = null;
	if(horizontal) horizontalOption = 'is-horizontal';
	if(loading) loadingOption = "is-loading";
	let groupedOptions = null;
	if(grouped){
		if(typeof addons === "string"){
			groupedOptions = `is-grouped is-grouped-${grouped}`;
		} else if(typeof addons === "boolean"){
			groupedOptions = `is-grouped`;
		}
	}
	return (
		<WrappedComponent addons={addonsOptions} horizontal={horizontalOption} grouped={groupedOptions} loading={loadingOption} {...rest}>
			{children}
		</WrappedComponent>
	)
};

export default withFieldOptions;