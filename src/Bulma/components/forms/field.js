import React, {Fragment, useContext} from "react";
import styled from "styled-components";
import withFieldOptions from "../higherorder/fieldhoc";
import { InputContext, InputContextProvider } from "../../store/inputcontext";
import withSize from "../higherorder/sizehoc";

const FieldCore = styled.div.attrs(({ addons, horizontal, grouped }) => ({
	className: `field${addons ? ` ${addons}` : ''}${horizontal ? ` ${horizontal}` : ''}${grouped ? ` ${grouped}` : ''}`
}))``;

const FieldBody = styled.div.attrs(() => ({
	className: "field-body"
}))``;

const ControlWrapper = styled.div.attrs(({addons, ratio, loading, hasIconsLeft, hasIconsRight}) => ({
		className: `control ${loading && loading} ${ratio && ratio} ${addons && addons} ${hasIconsRight ? `has-icons-right`:''} ${hasIconsLeft ? `has-icons-left` : ''}`
}))``;

const Control = withSize(({addons, ratio, loading, children, ...rest}) => {
	const [ hasIconsLeft, hasIconsRight] = useContext(InputContext);
	return <ControlWrapper addons={addons} hasIconsLeft={hasIconsLeft} hasIconsRight={hasIconsRight} loading={loading} ratio={ratio} {...rest}>{children}</ControlWrapper>
});

const HorizontalField = ({horizontal, children, loading, addons, ...rest}) => {
	return (
		<FieldCore horizontal={horizontal}>
			<FieldBody {...rest}>
				{children.map((child, index) => {
					return (
						<FieldCore key={index} addons={addons} >
							<Control loading={loading}>
								{child}
							</Control>
						</FieldCore>)
				})}
			</FieldBody>
		</FieldCore>
	)
};

const NormalField = ({horizontal, children, loading, addons, grouped, is, expanded, ...rest}) => {
	return (
		<Fragment>
			{children.map((child, index) => {
				return (
					<FieldCore key={index} grouped={grouped}>
						<Control loading={loading} is={is}>
							{child}
						</Control>
					</FieldCore>)
			})}
		</Fragment>
	)
};

const SingleControl = ({horizontal, children, loading, grouped, addons, is, ...rest}) => {
	return (
		<FieldCore grouped={grouped}>
			<Control loading={loading} is={is}>
				{children}
			</Control>
		</FieldCore>
	)
};

const GroupedControl = ({horizontal, children, loading, grouped, addons, is, ...rest}) => {
	return (
		<FieldCore grouped={grouped}>
			{children.map((child, index) => {
				return (
					<Control loading={loading} is={is} key={index}>
					{child}
					</Control>
			)})}
		</FieldCore>
	)
};

const Field = ({ addons, loading, horizontal, grouped, children, is, hasIcons, singleControl, ...rest }) => {
	const elements = React.Children.toArray(children);
	return (
		<Fragment>
			<InputContextProvider>
				{
					horizontal ?
						<HorizontalField children={elements} horizontal={horizontal} loading={loading} addons={addons} hasIcons={hasIcons} {...rest}/> :
					singleControl ?
						<SingleControl addons={addons} loading={loading} grouped={grouped} children={children} is={is} hasIcons={hasIcons} {...rest}/> :
						grouped ?
							<GroupedControl addons={addons} loading={loading} grouped={grouped} children={children} is={is} hasIcons={hasIcons} {...rest}/> :
							<NormalField addons={addons} loading={loading} grouped={grouped} children={elements} is={is} hasIcons={hasIcons} {...rest}/>
				}
			</InputContextProvider>
		</Fragment>
	)
};
export default withFieldOptions(Field);