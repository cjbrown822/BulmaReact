import React from "react";
import styled from "styled-components";
import { FormContext, FormContextProvider} from "../../store/formcontext";

const FormCore = styled.form.attrs(({style}) => ({
	style: style,
	className: "form"
}))``;

const Form = ({ children, style }) => {
	return (
		<FormContextProvider>
			<FormCore style={style}>
				{children}
			</FormCore>
		</FormContextProvider>
	)
};

export default Form;

