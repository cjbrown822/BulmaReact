import styled from "styled-components";
import { withThemeColor } from "../higherorder/stylehoc";
import withIs from "../higherorder/sizehoc";
const ProgressBar = styled.progress.attrs(({
  styleName,
  ratio
}) => ({
  className: `progress ${styleName && `is-${styleName}`} ${ratio && ratio}`
}))``;
export default withThemeColor(withIs(ProgressBar));