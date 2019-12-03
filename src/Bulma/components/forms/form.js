import React from "react";
import styled from "styled-components";
import { FormContext, FormContextProvider} from "../../store/formcontext";

const FormCore = styled.form.attrs(({style}) => ({
	style: style,
	className: "form"
}))``;

const Form = ({ children, style, ...rest }) => {
	return (
		<FormContextProvider>
			<FormCore style={style} {...rest}>
				{children}
			</FormCore>
		</FormContextProvider>
	)
};

export default Form;

