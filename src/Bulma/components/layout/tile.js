import React from "react";
import styled from "styled-components";
import withTileMod from "../higherorder/tilemodhoc";
import { withStyle } from "../higherorder/stylehoc";

const Tile = withStyle(withTileMod(styled.article.attrs(({styled}) => ({
	className: styled
}))``));


export default Tile;