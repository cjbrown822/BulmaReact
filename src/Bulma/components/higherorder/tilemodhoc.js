import React from "react";
import {withStyle} from "./stylehoc";

const withTileMod = WrappedComponent => ({ styleName, size, vertical, ancestor, parent, child, notification, box, children, ...rest}) => {
	let styles = [`tile`];
	if(styleName)
		styles = [...styles, ` is-${styleName}`];
	if(size)
		styles = [...styles, ` is-${size}`];
	if(vertical)
		styles = [...styles, ` is-vertical`];
	if(ancestor)
		styles = [...styles, ` is-ancestor`];
	if(parent)
		styles = [...styles, ` is-parent`];
	if(child)
		styles = [...styles, ` is-child`];
	if(notification)
		styles = [...styles, ` notification`];
	if(box)
		styles = [...styles, ` box`];

	styles = styles.join("");
	return (
		<WrappedComponent styled={styles} {...rest}>
			{children}
		</WrappedComponent>
	)
};

export default withTileMod;