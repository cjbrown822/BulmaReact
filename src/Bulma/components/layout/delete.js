import styled from "styled-components";

const Delete = styled.a.attrs(ratio => ({
	className: `delete ${ratio && ratio}`
}))``;

export default Delete;