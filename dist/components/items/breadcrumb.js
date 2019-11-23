import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
const BreadCrumbWrapper = withIs(styled.nav.attrs(({
  ratio,
  has
}) => ({
  className: `breadcrumb ${ratio && ratio} ${has ? `has-${has}-separator` : ''}`
}))``);

const BreadCrumb = props => React.createElement(BreadCrumbWrapper, props, React.createElement("ul", null, props.children));

export const BreadCrumbItem = props => {
  return React.createElement("li", {
    className: `${props.active ? `is-active` : ''}`
  }, props.active && React.createElement("a", {
    href: props.href,
    "aria-current": "page"
  }, props.children), !props.active && React.createElement("a", {
    href: props.href
  }, props.children));
};
export default BreadCrumb;