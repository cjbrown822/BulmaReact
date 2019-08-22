import React, {Fragment} from "react";
import styled from "styled-components";
import withDisplay from "../higherorder/displayhoc";
import Constants from "../../utils/constants";

const LevelWrapper = styled.div.attrs(props => ({
	className: `level ${props.display && props.display}`
}))``;

const LevelItem = styled.div.attrs(() => ({
	className: "level-item"
}))``;

const SideItem = styled.div.attrs(props => ({
	className:`level-${props.side && props.side}`
}))``;

const MapItem = ({children, ...rest}) => {
	return (
		<Fragment>
			{Array.isArray(children) ? children.map((child, index) => (
					<LevelItem key={index} {...rest}>
						{child}
					</LevelItem>
				)):
				<LevelItem {...rest}>
					{children}
				</LevelItem>
			}
		</Fragment>
	)
};

const LeftLevelItem = props => {
	return (<SideItem side={Constants.Direction.Left}>
				<MapItem {...props}/>
			</SideItem>)
};

const RightLevelItem = props => {
	return (<SideItem side={Constants.Direction.Right}>
				<MapItem {...props}/>
			</SideItem>)
};


const Level = withDisplay(LevelWrapper);

export { Level, LeftLevelItem, RightLevelItem, LevelItem };