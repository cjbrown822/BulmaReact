import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor } from "../higherorder/stylehoc";
const Tag = styled.span.attrs(({
  styleName,
  ratio
}) => ({
  className: `tag ${styleName && `is-${styleName}`} ${ratio && ratio}`
}))``;
export default withIs(withThemeColor(Tag));