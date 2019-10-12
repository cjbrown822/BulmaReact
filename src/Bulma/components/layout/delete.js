import styled from "styled-components";
import withSize from "../higherorder/sizehoc";
const Delete = withSize(styled.a.attrs(({ratio}) => ({
	className: `delete ${ratio && ratio}`
}))``);

export default Delete;