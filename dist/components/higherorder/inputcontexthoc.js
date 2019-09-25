import React from "react";
import { InputContext, InputContextProvider } from "../../store/inputcontext";

const withFormStyle = WrappedComponent => ({
  children,
  ...rest
}) => {
  return React.createElement(InputContextProvider, null, React.createElement(WrappedComponent, rest, children));
};