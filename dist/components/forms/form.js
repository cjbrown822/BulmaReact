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
  style
}) => {
  return React.createElement(FormContextProvider, null, React.createElement(FormCore, {
    style: style
  }, children));
};

export default Form;