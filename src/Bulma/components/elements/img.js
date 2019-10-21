import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";


const ImageWrapper = styled.figure.attrs(({ratio}) => ({
	className: `image ${ratio && ratio}`
}))``;

const Img = styled.img.attrs(({modifier, url, alt}) => ({
	className: `${modifier}`,
	src: url,
	alt: alt
}))``;

const Image = props => {
	return (
		<ImageWrapper ratio={props.ratio}>
			{props.children ?
				props.children :
				<Img alt={props.alt} src={props.url} modifier={props.modifier}/>
			}
		</ImageWrapper>
	)
};


export default withIs(Image);