import React, {Fragment, cloneElement} from "react";
import styled from "styled-components";
import withFieldOptions from "../higherorder/fieldhoc";

const FieldCore = styled.div.attrs(({ addons, horizontal, grouped }) => ({
	className: `field${addons ? ` ${addons}` : ''}${horizontal ? ` ${horizontal}` : ''}${grouped ? ` ${grouped}` : ''}`
}))``;

const FieldBody = styled.div.attrs(() => ({
	className: "field-body"
}))``;

const Control = styled.div.attrs(({addons}) => ({
	className: `control ${addons && addons}`
}))``;
const Field = ({ addons, horizontal, grouped, children, ...rest }) => {
	const elements = React.Children.toArray(children);
	return (
		<Fragment>
			{horizontal ?
				<FieldCore horizontal={horizontal}>
					<FieldBody {...rest}>
						{elements.map((child, index) => {
							return (
								<FieldCore key={index} addons={addons} >
									<Control>
										{child}
									</Control>
								</FieldCore>)
						})}
					</FieldBody>
				</FieldCore>
				 :
				<Fragment>
					{elements.map((child, index) => {
						return (
							<FieldCore key={index}>
								<Control>
									{child}
								</Control>
							</FieldCore>)
					})}
				</Fragment>}
		</Fragment>
	)
};
export default withFieldOptions(Field);