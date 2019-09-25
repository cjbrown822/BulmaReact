import React from "react";
import styled from "styled-components";
import withModifiers, { withNarrow, withDevice, withGap, withOptions } from "../higherorder/columnhoc";
import PropTypes from "prop-types";
const ColumnsCore = withOptions(withGap(withDevice(styled.div.attrs(({
  gapStyle,
  deviceStyle,
  optionStyle
}) => ({
  className: `columns${gapStyle ? ` ${gapStyle}` : ``}${deviceStyle ? ` ${deviceStyle}` : ``}${optionStyle ? ` ${optionStyle}` : ``}`
}))``)));
const ColumnCore = withNarrow(withModifiers(styled.div.attrs(({
  modStyle,
  narrowStyle
}) => ({
  className: `column ${modStyle}${narrowStyle ? ` ${narrowStyle}` : ``}`
}))``));

const Column = props => React.createElement(ColumnCore, props);

const Columns = props => React.createElement(ColumnsCore, props);

Columns.propTypes = {
  gap: PropTypes.arrayOf(PropTypes.shape({
    gap: PropTypes.number.isRequired,
    device: PropTypes.string
  })),
  gapless: PropTypes.bool,
  narrow: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOf(["multiline", "vcentered", "centered"]))
};
Column.propTypes = {
  columnSizeModifier: PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    device: PropTypes.string
  }))
};
export { Column, Columns };