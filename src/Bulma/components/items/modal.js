import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import Delete from "../elements/delete";
const ModalWrapper = withIs(styled.div.attrs(({ratio}) => ({
	className: `modal ${ratio ? `${ratio}` : ''}`
}))``);

const ModalBackgroundClose = styled.button.attrs(props => ({
	className: `modal-close is-large`,
	ariaLabel: `close`
}))``;

const ModalBackground = styled.div.attrs(props => ({
	className: `modal-background`
}))``;

const ModalContent = styled.div.attrs(props => ({
	className: `modal-content`
}))``;

const CardWrapper = styled.div.attrs(props => ({
	className: `modal-card`
}))``;

const CardHeader = styled.header.attrs(props => ({
	className: `modal-card-head`
}))``;

const CardTitle = styled.p.attrs(props => ({
	className: `modal-card-title`
}))``;

export const ModalCardHeader = ({title}) => (
	<CardHeader>
		<CardTitle>{title}</CardTitle>
		<Delete/>
	</CardHeader>
);

export const ModalCardBody = styled.section.attrs(props => ({
	className: `modal-card-body`
}))``;

export const ModalCardFooter = styled.footer.attrs(props => ({
	className: `modal-card-footer`
}))``;

export const ModalCard = ({children, background, ...rest}) => (
	<ModalWrapper>
		{background && <ModalBackground/>}
		<CardWrapper>
			{children}
		</CardWrapper>
	</ModalWrapper>
)

const Modal = ({children, background, ...rest}) => (
	<ModalWrapper {...rest}>
		{background && <ModalBackground/>}
		<ModalContent>
			{children}
		</ModalContent>
		{background && <ModalBackgroundClose/>}
	</ModalWrapper>
);

export default Modal;