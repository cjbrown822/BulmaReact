import React, { useContext, useState, useEffect, useCallback } from "react";
import {FormContext} from "../../store/formcontext";
import useInputValidation from "../../hooks/inputvalidation";
import {HAS_ERROR, HAS_NO_ERROR} from "../../reducers/formvalidationreducer";

const withValidation = WrappedComponent => ({required, name, validation, ...rest}) => {
	const [ _, dispatch ] = useContext(FormContext);
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
	return (
		<WrappedComponent value={value} required={required} name={name} onBlur={onValidate} onChange={onValidate} danger={hasError} hasError={hasError} {...rest}/>
	)
};

export default withValidation;