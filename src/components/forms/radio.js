import React from "react";
import styled from "styled-components";

const RadioCore = styled.label.attrs(({disabled}) => ({
	className: `radio`
}))``;

const Radio = ({disabled, name, checked, children, ...rest}) =>
	(<RadioCore disabled={disabled} {...rest}>
		<input type={"radio"} name={name} disabled={disabled} checked={checked}/>
		{children}
	</RadioCore>);

export default Radio;