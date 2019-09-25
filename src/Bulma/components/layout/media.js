import React from "react";
import styled from "styled-components";
import Content from "./content";

const Media = styled.article.attrs(props => ({
	className: "media"
}))``;

export const MediaLeft = props => <MediaItem direction={"left"} {...props}/>;

export const MediaRight = props => <MediaItem direction={"right"} {...props}/>;

const MediaItem = styled.figure.attrs(({direction}) => ({
	className: `media-${direction}`
}))``;

const MediaContentWrapper = styled.div.attrs(props => ({
	className:"media-content"
}))``;

export const MediaContent = ({children}) => {
	return (
		<MediaContentWrapper>
			<Content>
				{children}
			</Content>
		</MediaContentWrapper>
	)
};

export default Media;