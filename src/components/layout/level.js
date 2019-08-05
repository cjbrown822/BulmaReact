import React from "react";
import styled from "styled-components";
import withDisplay from "../higherorder/displayhoc";

const LevelWrapper = styled.div.attrs(props => ({
	className: `level ${props.display && props.display}`
}))``;

const LevelItem = styled.div.attrs(() => ({
	className: "level-item"
}))``;

const SideItem = styled.div.attrs(props => ({
	className:`level-${props.side && props.side}`
}))``;

const LeftLevelItem = ({children}) => {
	return (<SideItem side={"left"}>
				<LevelItem>
					{children}
				</LevelItem>
			</SideItem>)
};

const RightLevelItem = ({children}) => {
	return (<SideItem side={"right"}>
				<LevelItem>
					{children}
				</LevelItem>
			</SideItem>)
};

const Level = withDisplay(LevelWrapper);

export { Level, LeftLevelItem, RightLevelItem, LevelItem };