function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useState, useEffect, useCallback } from "react";
import { FormContext } from "../../store/formcontext";
import useInputValidation from "../../hooks/inputvalidation";
import { HAS_ERROR, HAS_NO_ERROR } from "../../reducers/formvalidationreducer";

const withValidation = WrappedComponent => ({
  required,
  name,
  validation,
  ...rest
}) => {
  const [_, dispatch] = useContext(FormContext);
  const {
    value,
    touched,
    errors,
    onValidate
  } = useInputValidation(required, validation);
  const [hasError, setHasError] = useState(false);
  const handleError = useCallback(e => {
    setHasError(e);
    dispatch({
      field: name,
      type: e ? HAS_ERROR : HAS_NO_ERROR
    });
  }, [name, dispatch, setHasError]);
  useEffect(() => {
    const e = errors.length > 0 ? errors.filter(e => {
      return e.valid === false;
    }).length !== 0 : false;
    handleError(e);
  }, [errors, handleError]);
  const handleHasBeenTouched = useCallback(hasBeenTouched => {
    if (required) dispatch({
      field: `${name}Touched`,
      type: hasBeenTouched ? HAS_NO_ERROR : HAS_ERROR
    });
  }, [name, required, dispatch]);
  useEffect(() => {
    handleHasBeenTouched(touched);
  }, [touched, handleHasBeenTouched]);
  return React.createElement(WrappedComponent, _extends({
    value: value,
    required: required,
    name: name,
    onBlur: onValidate,
    onChange: onValidate,
    danger: hasError,
    hasError: hasError && touched
  }, rest));
};

export default withValidation;