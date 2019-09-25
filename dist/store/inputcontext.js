import React, { createContext, useState } from "react";
const InputContext = createContext({});

const InputContextProvider = ({
  children,
  ...rest
}) => {
  const [hasIconsRight, setHasIconsRight] = useState(false);
  const [hasIconsLeft, setHasIconsLeft] = useState(false);
  return React.createElement(InputContext.Provider, {
    value: [hasIconsLeft, hasIconsRight, setHasIconsLeft, setHasIconsRight]
  }, children);
};

export { InputContext, InputContextProvider };