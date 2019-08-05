import React from "react";
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

const LeftLevelItem = props => {
	return (<SideItem side={Constants.Level.Direction.Left}>
				{Array.isArray(props.children) ? props.children.map((child, index) => (
					<LevelItem key={index}>
						{child}
					</LevelItem>
				)):
					<LevelItem>
						{props.children}
					</LevelItem>
				}
			</SideItem>)
};

const RightLevelItem = props => {
	return (<SideItem side={Constants.Level.Direction.Right}>
				{Array.isArray(props.children) ? props.children.map((child, index) => (
					<LevelItem key={index}>
						{child}
					</LevelItem>
				)) :
					<LevelItem>
						{props.children}
					</LevelItem>
				}
			</SideItem>)
};


const Level = withDisplay(LevelWrapper);

export { Level, LeftLevelItem, RightLevelItem, LevelItem };