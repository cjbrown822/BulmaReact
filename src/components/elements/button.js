import React, { useContext } from "react";
import styled from "styled-components";
import {withStyle} from "../higherorder/stylehoc";
import withSize from "../higherorder/sizehoc";
import { FormContext } from "../../store/formcontext";

const Button = withSize(withStyle(styled.button.attrs(({disabled = false, type = "button", styleName, ratio}) => ({
	className: `button ${styleName && `is-${styleName}`} ${ratio && ratio}`,
	type: type,
	disabled: disabled
}))``));

export const SubmitButton = props => {
	const [errors, dispatch, disable] = useContext(FormContext);
	return (
		<Button type={"submit"} {...props} disabled={disable}/>
	)
};

export const ResetButton = props => <Button type={"reset"} {...props}/>;

export default Button;