function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import withFieldOptions from "../higherorder/fieldhoc";
import { InputContext, InputContextProvider } from "../../store/inputcontext";
import withIs from "../higherorder/sizehoc";
const FieldCore = styled.div.attrs(({
  addons,
  horizontal,
  grouped
}) => ({
  className: `field${addons ? ` ${addons}` : ''}${horizontal ? ` ${horizontal}` : ''}${grouped ? ` ${grouped}` : ''}`
}))``;
const FieldBody = styled.div.attrs(() => ({
  className: "field-body"
}))``;
const ControlWrapper = styled.div.attrs(({
  addons,
  ratio,
  loading,
  hasIconsLeft,
  hasIconsRight
}) => ({
  className: `control ${loading && loading} ${ratio && ratio} ${addons && addons} ${hasIconsRight ? `has-icons-right` : ''} ${hasIconsLeft ? `has-icons-left` : ''}`
}))``;
const Control = withIs(({
  addons,
  ratio,
  loading,
  children,
  ...rest
}) => {
  const [hasIconsLeft, hasIconsRight] = useContext(InputContext);
  return React.createElement(ControlWrapper, _extends({
    addons: addons,
    hasIconsLeft: hasIconsLeft,
    hasIconsRight: hasIconsRight,
    loading: loading,
    ratio: ratio
  }, rest), children);
});

const HorizontalField = ({
  horizontal,
  children,
  loading,
  addons,
  ...rest
}) => {
  return React.createElement(FieldCore, {
    horizontal: horizontal
  }, React.createElement(FieldBody, rest, children.map((child, index) => {
    return React.createElement(FieldCore, {
      key: index,
      addons: addons
    }, React.createElement(Control, {
      loading: loading
    }, child));
  })));
};

const NormalField = ({
  horizontal,
  children,
  loading,
  addons,
  grouped,
  is,
  expanded,
  ...rest
}) => {
  return React.createElement(Fragment, null, children.map((child, index) => {
    return React.createElement(FieldCore, {
      key: index,
      grouped: grouped
    }, React.createElement(Control, {
      loading: loading,
      is: is
    }, child));
  }));
};

const SingleControl = ({
  horizontal,
  children,
  loading,
  grouped,
  addons,
  is,
  ...rest
}) => {
  return React.createElement(FieldCore, {
    grouped: grouped
  }, React.createElement(Control, {
    loading: loading,
    is: is
  }, children));
};

const GroupedControl = ({
  horizontal,
  children,
  loading,
  grouped,
  addons,
  is,
  ...rest
}) => {
  return React.createElement(FieldCore, {
    grouped: grouped
  }, children.map((child, index) => {
    return React.createElement(Control, {
      loading: loading,
      is: is,
      key: index
    }, child);
  }));
};

const Field = ({
  addons,
  loading,
  horizontal,
  grouped,
  children,
  is,
  hasIcons,
  singleControl,
  ...rest
}) => {
  const elements = React.Children.toArray(children);
  return React.createElement(Fragment, null, React.createElement(InputContextProvider, null, horizontal ? React.createElement(HorizontalField, _extends({
    children: elements,
    horizontal: horizontal,
    loading: loading,
    addons: addons,
    hasIcons: hasIcons
  }, rest)) : singleControl ? React.createElement(SingleControl, _extends({
    addons: addons,
    loading: loading,
    grouped: grouped,
    children: children,
    is: is,
    hasIcons: hasIcons
  }, rest)) : grouped ? React.createElement(GroupedControl, _extends({
    addons: addons,
    loading: loading,
    grouped: grouped,
    children: children,
    is: is,
    hasIcons: hasIcons
  }, rest)) : React.createElement(NormalField, _extends({
    addons: addons,
    loading: loading,
    grouped: grouped,
    children: elements,
    is: is,
    hasIcons: hasIcons
  }, rest))));
};

export default withFieldOptions(Field);