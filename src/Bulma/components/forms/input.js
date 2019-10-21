import React, {useEffect, useCallback, useState, useContext, Fragment} from "react";
import { withThemeColor } from "../higherorder/stylehoc";
import Proptypes from "prop-types";
import styled from "styled-components";
import { InputContext } from "../../store/inputcontext";
import withIs from "../higherorder/sizehoc";
import withValidation from "../higherorder/validationhoc";

const InputCore = withThemeColor(styled.input.attrs(({ ratio, type, styleName }) => ({
	className: `input ${styleName && `is-${styleName}`} ${ratio && ratio}`,
	type: type
}))``);

const Input = ({name, type, required, validation, children, leftIcon, rightIcon, loading, hasError, ...rest}) => {
	const [ iL, iR, setHasIconsLeft, setHasIconsRight] = useContext(InputContext);
	if(leftIcon){
		setHasIconsLeft(true);
	}
	if(rightIcon){
		setHasIconsRight(true);
	}
	return (
		<Fragment>
			<InputCore name={name} type={type} {...rest}/>
			{leftIcon && leftIcon("left", hasError)}
			{rightIcon && rightIcon("right", hasError)}
		</Fragment>

	)
};

Input.propTypes = {
	name: Proptypes.string.isRequired,
	leftIcon: Proptypes.func,
	rightIcon: Proptypes.func,
	validation: Proptypes.arrayOf(Proptypes.shape({
		regex: Proptypes.any.isRequired,
		message: Proptypes.string.isRequired
	}))
};

export default withValidation(withIs(Input));