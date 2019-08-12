import React, {Fragment, useContext} from "react";
import styled from "styled-components";
import withFieldOptions from "../higherorder/fieldhoc";
import { InputContext, InputContextProvider } from "../../store/inputcontext";

const FieldCore = styled.div.attrs(({ addons, horizontal, grouped }) => ({
	className: `field${addons ? ` ${addons}` : ''}${horizontal ? ` ${horizontal}` : ''}${grouped ? ` ${grouped}` : ''}`
}))``;

const FieldBody = styled.div.attrs(() => ({
	className: "field-body"
}))``;

const ControlWrapper = styled.div.attrs(({addons, hasIconsLeft, hasIconsRight}) => ({
		className: `control ${addons && addons} ${hasIconsRight ? `has-icons-right`:''} ${hasIconsLeft ? `has-icons-left` : ''}`
}))``;

const Control = ({addons, children, ...rest}) => {
	const [ hasIconsLeft, hasIconsRight] = useContext(InputContext);
	return <ControlWrapper addons={addons} hasIconsLeft={hasIconsLeft} hasIconsRight={hasIconsRight} {...rest}>{children}</ControlWrapper>
};

const Field = ({ addons, horizontal, grouped, children, hasIcons, ...rest }) => {
	const elements = React.Children.toArray(children);
	return (
		<Fragment>
			<InputContextProvider>
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
			</InputContextProvider>
		</Fragment>
	)
};
export default withFieldOptions(Field);