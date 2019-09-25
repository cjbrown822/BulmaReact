import React from "react";
import styled from "styled-components";
import { withStyle } from "../higherorder/stylehoc";

const FooterWrapper = styled.footer.attrs(({ styleName }) => ({
	className: `footer ${styleName && `is-${styleName}`}`
}))``;

const Footer = ({ styleName, children, ...rest }) => <FooterWrapper styleName={styleName} {...rest}>{children}</FooterWrapper>;

export default withStyle(Footer);