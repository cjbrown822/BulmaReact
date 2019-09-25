function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const withFieldOptions = WrappedComponent => ({
  addons,
  loading,
  horizontal,
  grouped,
  children,
  ...rest
}) => {
  let addonsOptions = null;

  if (addons) {
    if (typeof addons === "string") {
      addonsOptions = `has-addons has-addons-${addons}`;
    } else if (typeof addons === "boolean") {
      addonsOptions = `has-addons`;
    }
  }

  let horizontalOption = null;
  let loadingOption = null;
  if (horizontal) horizontalOption = 'is-horizontal';
  if (loading) loadingOption = "is-loading";
  let groupedOptions = null;

  if (grouped) {
    if (typeof grouped === "string") {
      groupedOptions = `is-grouped is-grouped-${grouped}`;
    } else if (typeof grouped === "boolean") {
      groupedOptions = `is-grouped`;
    }
  }

  return React.createElement(WrappedComponent, _extends({
    addons: addonsOptions,
    horizontal: horizontalOption,
    grouped: groupedOptions,
    loading: loadingOption
  }, rest), children);
};

export default withFieldOptions;