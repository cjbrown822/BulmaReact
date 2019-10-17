import styled from "styled-components";

const Card = styled.div.attrs(props => ({
	className: `card`
}))``;

export const CardContent = styled.div.attrs(props => ({
	className: `card-content`
}))``;

export const CardHeader = styled.div.attrs(props => ({
	className: `card-header`
}))``;

export const CardHeaderTitle = styled.p.attrs(props => ({
	className: `card-header-title`
}))``;

export const CardHeaderIcon = styled.a.attrs(props => ({
	className: `card-header-icon`
}))``;

export const CardFooter= styled.div.attrs(props => ({
	className: `card-footer`
}))``;

export const CardFooterItem = styled.div.attrs(props => ({
	className: `card-footer-item`
}))``;

export default Card;