import React from "react";
import styled from "styled-components";
import Constants from "../../utils/constants";
import { withThemeColor } from "../higherorder/stylehoc";
import withIs from "../higherorder/sizehoc";

const HeroWrapper = styled.div.attrs(({bold, modifier, styleName, ratio }) => ({
	className: `hero ${modifier && `is-${modifier}`} ${styleName && `is-${styleName}`} ${ratio} ${bold && `is-bold`}`
}))``;

const Hero = ({ratio, modifier, styleName, children, ...rest}) => {
	return (
		<HeroWrapper styleName={styleName} modifier={modifier} ratio={ratio} {...rest}>
			{children}
		</HeroWrapper>
	)
};

const HeroItem = styled.div.attrs(({ itemType }) => ({
	className: `hero-${itemType}`
}))``;

export const HeroHeader = ({ children }) => <HeroItem itemType={Constants.Hero.Items.Head}>{children}</HeroItem>;
export const HeroBody = ({ children }) => <HeroItem itemType={Constants.Hero.Items.Body}>{children}</HeroItem>;
export const HeroFooter = ({ children }) => <HeroItem itemType={Constants.Hero.Items.Foot}>{children}</HeroItem>;

export default withIs(withThemeColor(Hero));