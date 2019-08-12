import React, { createContext, useState } from "react";

const InputContext = createContext({});

const InputContextProvider = ({children, ...rest}) => {
	const [ hasIconsRight, setHasIconsRight ] = useState(false);
	const [ hasIconsLeft, setHasIconsLeft ] = useState(false);
	return (
		<InputContext.Provider value={[hasIconsLeft, hasIconsRight, setHasIconsLeft, setHasIconsRight]}>
			{children}
		</InputContext.Provider>
	)
};

export { InputContext, InputContextProvider };