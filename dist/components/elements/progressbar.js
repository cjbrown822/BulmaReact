import styled from "styled-components";
import { withStyle } from "../higherorder/stylehoc";
import withSize from "../higherorder/sizehoc";
const ProgressBar = styled.progress.attrs(({
  styleName,
  ratio
}) => ({
  className: `progress ${styleName && `is-${styleName}`} ${ratio && ratio}`
}))``;
export default withStyle(withSize(ProgressBar));