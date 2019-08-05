import React from "react";
import styled from "styled-components";
import { withBreakpoints } from "../higherorder/containerhoc";

const StyledContainer = styled.div.attrs(props => ({
	className: `container ${ props.breakpoints}`
}))``;
const Container = ({children, ...rest}) => <StyledContainer {...rest}>{children}</StyledContainer>;

export default withBreakpoints(Container);