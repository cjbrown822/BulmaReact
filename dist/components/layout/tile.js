import React from "react";
import styled from "styled-components";
import withTileMod from "../higherorder/tilemodhoc";
import { withThemeColor } from "../higherorder/stylehoc";
const Tile = withThemeColor(withTileMod(styled.article.attrs(({
  styled
}) => ({
  className: styled
}))``));
export default Tile;