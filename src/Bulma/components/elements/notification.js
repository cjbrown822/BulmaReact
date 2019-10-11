import React from "react";
import styled from "styled-components";
import {withStyle} from "../higherorder/stylehoc";

const NotificationWrapper = withStyle(styled.div.attrs(({styleName}) => ({
	className: `notification ${styleName && `is-${styleName}`}`
}))``);

const Notification = ({children, ...rest}) => {
	return (
		<NotificationWrapper {...rest}>
			{children}
		</NotificationWrapper>
	)
}

export default Notification;