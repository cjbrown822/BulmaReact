import React from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
import { withStyle} from "../higherorder/stylehoc";

const TextAreaCore = styled.textarea.attrs(({ratio, styleName, fixed}) => ({
	className: `textarea ${styleName && `is-${styleName}`} ${ratio && ratio} ${fixed && `has-fixed-size`}`
}))``;

const TextArea = props => <TextAreaCore {...props}/>;

export default withSize(withStyle(TextArea));