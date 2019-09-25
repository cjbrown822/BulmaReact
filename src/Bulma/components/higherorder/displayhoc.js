import React from "react";
import PropTypes from "prop-types";

const withDisplay = WrappedContainer => props => {
	const { display, ...rest} = props;
	let forwardedStyle = "";
	if(display) forwardedStyle = `is-${display}`;
	return (
		<WrappedContainer display={forwardedStyle} {...rest}/>
	)
};

withDisplay.PropTypes = {
	display: PropTypes.string
};

export default withDisplay;