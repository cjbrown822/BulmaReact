import React from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";

const Content = styled.div.attrs(({ratio}) => ({
	className:`content`
}))``;

const OrderedListBase = withSize(styled.ol.attrs(({ratio}) => ({
	className: `${ratio}`
}))``);

export const OrderedList = ({type, children, ...rest}) => {
	return (
		<Content>
			<OrderedListBase type={type}  {...rest}>
				{children.map((item, index) => {
					return (
						<li key={index}>
							{item}
						</li>
					)
				})}
			</OrderedListBase>
		</Content>
	)
}

export default Content;