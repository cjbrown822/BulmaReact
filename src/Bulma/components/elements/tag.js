import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
import {withStyle} from "../higherorder/stylehoc";

const Tag = styled.span.attrs(({styleName, ratio}) => ({
	className: `tag ${styleName && `is-${styleName}`} ${ratio && ratio}`
}))``;


export default withSize(withStyle(Tag));