import React, {useEffect, useCallback, useState, useContext, Fragment} from "react";
import { withStyle } from "../higherorder/stylehoc";
import {HAS_ERROR,HAS_NO_ERROR} from "../../reducers/formvalidationreducer";
import { FormContext } from "../../store/formcontext";
import Proptypes from "prop-types";
import styled from "styled-components";
import useInputValidation from "../../hooks/inputvalidation";
import { InputContext, InputContextProvider } from "../../store/inputcontext";
import withSize from "../higherorder/sizehoc";

const InputCore = withStyle(styled.input.attrs(({ ratio, type, styleName }) => ({
	className: `input ${styleName && `is-${styleName}`} ${ratio && ratio}`,
	type: type
}))``);

const Input = ({name, type, required, validation, children, leftIcon, rightIcon, loading, ...rest}) => {
	const [ errorList, dispatch ] = useContext(FormContext);
	const [ hasIconsLeft, hasIconsRight, setHasIconsLeft, setHasIconsRight] = useContext(InputContext);
	const { value, touched, errors, onValidate } = useInputValidation(required, validation);
	const [hasError, setHasError ] = useState(false);
	const handleError = useCallback((e) => {
		if(touched){
			dispatch({field: name, type: e ? HAS_ERROR : HAS_NO_ERROR});
			setHasError(e);
		}
	}, [touched, name, dispatch, setHasError]);
	useEffect(() => {
		const e = (errors.length > 0) ? errors.filter(e => {
			return e.valid === false
		}).length !== 0 : false;
		handleError(e);
	}, [errors, handleError]);
	if(leftIcon){
		setHasIconsLeft(true);
	}
	if(rightIcon){
		setHasIconsRight(true);
	}
	return (
		<Fragment>
			<InputCore name={name} type={type} {...rest} onBlur={onValidate} onChange={onValidate} value={value} danger={hasError}/>
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

export default withSize(Input);