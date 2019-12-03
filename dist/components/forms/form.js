function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { FormContext, FormContextProvider } from "../../store/formcontext";
const FormCore = styled.form.attrs(({
  style
}) => ({
  style: style,
  className: "form"
}))``;

const Form = ({
  children,
  style,
  ...rest
}) => {
  return React.createElement(FormContextProvider, null, React.createElement(FormCore, _extends({
    style: style
  }, rest), children));
};

export default Form;