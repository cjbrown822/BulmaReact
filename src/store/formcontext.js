import React, { useEffect, useReducer, createContext, useState, useCallback } from 'react';
import FormValidationReducer from "../reducers/formvalidationreducer";

const FormContext = createContext({});

const FormContextProvider = ({children,...rest}) => {
	const [errors, dispatch] = useReducer(FormValidationReducer, {});
	const [ disabled, setDisabled ] = useState(true);

	const arrayFromObject = fieldStatus => {
		const keys = Object.keys(fieldStatus);
		return keys.map(key => {
			return fieldStatus[key];
		});
	};

	const findErrors = fieldStatus => {
		return fieldStatus.filter(value => {
			return value === true
		});
	};

	const hasErrors = errors => {
		return errors.length > 0;
	};

	useEffect(() => {
		const check = () => {
			const isDisabled = hasErrors(findErrors(arrayFromObject(errors)));
			return setDisabled(isDisabled);
		};
		check();
	}, [errors]);

	return (
		<FormContext.Provider value={[errors, dispatch, disabled]}>
			{children}
		</FormContext.Provider>
	)
};

export { FormContext, FormContextProvider };