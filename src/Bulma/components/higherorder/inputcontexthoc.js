import React from "react";
import { InputContext, InputContextProvider } from "../../store/inputcontext";

const withFormStyle = WrappedComponent => ({children, ...rest}) => {
	return (
		<InputContextProvider>
			<WrappedComponent {...rest}>
				{children}
			</WrappedComponent>
		</InputContextProvider>
	)
};