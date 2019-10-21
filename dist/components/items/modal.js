import React from "react";
import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
import Delete from "../elements/delete";
const ModalWrapper = withSize(styled.div.attrs(({
  ratio
}) => ({
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
export const ModalCardHeader = ({
  title
}) => React.createElement(CardHeader, null, React.createElement(CardTitle, null, title), React.createElement(Delete, null));
export const ModalCardBody = styled.section.attrs(props => ({
  className: `modal-card-body`
}))``;
export const ModalCardFooter = styled.footer.attrs(props => ({
  className: `modal-card-footer`
}))``;
export const ModalCard = ({
  children,
  background,
  ...rest
}) => React.createElement(ModalWrapper, null, background && React.createElement(ModalBackground, null), React.createElement(CardWrapper, null, children));

const Modal = ({
  children,
  background,
  ...rest
}) => React.createElement(ModalWrapper, rest, background && React.createElement(ModalBackground, null), React.createElement(ModalContent, null, children), background && React.createElement(ModalBackgroundClose, null));

export default Modal;