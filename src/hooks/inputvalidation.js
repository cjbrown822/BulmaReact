import { useState, useCallback } from "react";

const useInputValidation = (required, validators = []) => {
	let initialState = [];
	const [errors, setErrors] = useState([]);
	const [touched, setTouched] = useState(false);
	const [value, setValue] = useState('');
	const [validation, setValidation] = useState(validators);

	const touch = useCallback(val => {
		setTouched(val);
	}, [setTouched]);

	const onValidate = e => {
		const target = e.currentTarget;
		setValue(target.value);
		if(required){
			touch(true);
			validateAll(target.value);
		}
	};

	const validateAll = input => {
		let e = [];
		for(let i = 0; i < validation.length; i++){
			e.push({valid: validate(input, validation[i].regex), message: validation[i].message});
		}
		e.push({valid: !isNullOrEmpty(input), message: ""});
		setErrors(e);
	};

	const isNullOrEmpty = value => {
		if(!value) return true;
		return !validate(value, /.*\S.*/);
	};

	const validate = (value, regex) => {
		return regex.test(value);
	};

	return {
		touched,
		value,
		errors,
		onValidate
	}
};

export default useInputValidation;