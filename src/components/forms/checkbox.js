import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CheckboxCore = styled.label.attrs(() => ({
	className: `checkbox`
}))``;
const Checkbox = ({name, disabled, children, ...rest}) =>
	(<CheckboxCore disabled={disabled}>
		<input {...rest} type={"checkbox"} disabled={disabled} name={name}/>
		{children}
	</CheckboxCore>);
Checkbox.propTypes = {
	name: PropTypes.string.isRequired
};

export default Checkbox;