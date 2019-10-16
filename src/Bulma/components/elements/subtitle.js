import styled from "styled-components";
import withSize from "../higherorder/sizehoc";

const h1 = withSize(styled.h1.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h2 = withSize(styled.h2.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h3 = withSize(styled.h3.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h4 = withSize(styled.h4.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);
const h5 = withSize(styled.h5.attrs(({ratio}) => ({
	className: `subtitle ${ratio && ratio}`
}))``);

const Subtitle = {
	h1: withSize(h1),
	h2: withSize(h2),
	h3: withSize(h3),
	h4: withSize(h4),
	h5: withSize(h5)
};

export default Subtitle;