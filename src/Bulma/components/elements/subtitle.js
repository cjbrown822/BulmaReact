import styled from "styled-components";
import withIs from "../higherorder/sizehoc";

const h1 = withIs(styled.h1.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h2 = withIs(styled.h2.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h3 = withIs(styled.h3.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h4 = withIs(styled.h4.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h5 = withIs(styled.h5.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);

const Subtitle = {
	h1: withIs(h1),
	h2: withIs(h2),
	h3: withIs(h3),
	h4: withIs(h4),
	h5: withIs(h5)
};

export default Subtitle;