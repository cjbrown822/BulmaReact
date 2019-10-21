import React from "react";
import styled from "styled-components";
import { withThemeColor } from "../higherorder/stylehoc";

const FooterWrapper = styled.footer.attrs(({ styleName }) => ({
	className: `footer ${styleName && `is-${styleName}`}`
}))``;

const Footer = ({ styleName, children, ...rest }) => <FooterWrapper styleName={styleName} {...rest}>{children}</FooterWrapper>;

export default withThemeColor(Footer);