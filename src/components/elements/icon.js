import React from "react";
import styled from "styled-components";
import {withStyle} from "../higherorder/stylehoc";

const IconWrapper = styled.span.attrs(({styleName, direction}) =>  ({
	className: `icon ${styleName ? `has-text-${styleName}`: ''} ${direction ? `is-${direction}` : ''}`
}))``;

const IconCore = styled.i.attrs(({library = 'fas', icon}) => ({
	className: `${library} fa-${icon}`
}))``;

const Icon = ({library, icon, styleName, direction}) => {
	return (
		<IconWrapper styleName={styleName} direction={direction}>
			<IconCore library={library} icon={icon}/>
		</IconWrapper>
	)
};

export default withStyle(Icon);