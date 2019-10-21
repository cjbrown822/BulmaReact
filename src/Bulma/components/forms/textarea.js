import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor} from "../higherorder/stylehoc";
import withValidation from "../higherorder/validationhoc";
import PropTypes from "prop-types";

const TextAreaCore = styled.textarea.attrs(({ratio, styleName, fixed}) => ({
	className: `textarea ${styleName && `is-${styleName}`} ${ratio && ratio} ${fixed && `has-fixed-size`}`
}))``;

const TextArea = props => <TextAreaCore {...props}/>;

TextArea.propTypes = {
	name: PropTypes.string.isRequired
};

export default withValidation(withIs(withThemeColor(TextArea)));