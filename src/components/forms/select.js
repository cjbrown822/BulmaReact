import React, { useContext } from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
import { withStyle} from "../higherorder/stylehoc";
import {InputContext} from "../../store/inputcontext";

const SelectWrapper = withSize(withStyle(styled.div.attrs(({ratio, styleName, multiple, loading}) => ({
	className: `select ${ratio && `${ratio}`} ${styleName && `is-${styleName}`} ${multiple && `is-multiple`} ${loading && `is-loading`}`
}))``));

const Select = ({is, multiple, numRows,children, icon, ...rest}) => {
	const [ f1, f2, setHasIconsLeft] = useContext(InputContext);
	if(icon) setHasIconsLeft(true);
	return (
		<SelectWrapper is={is} multiple={multiple} {...rest}>
			<select multiple={multiple} size={numRows}>
				{children}
			</select>
			{icon && icon("left")}
		</SelectWrapper>
	)
};

export default Select;