import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
const Delete = withIs(styled.a.attrs(({ratio}) => ({
	className: `delete ${ratio && ratio}`
}))``);

export default Delete;