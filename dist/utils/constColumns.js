const Type = {
  Mobile: "mobile",
  Desktop: "desktop",
  Tablet: "tablet",
  WideScreen: "widescreen",
  FullHD: "fullhd",
  Touch: 'touch'
};
const Sizes = {
  ThreeQuarters: (1 << 0).toString(2),
  TwoThirds: (1 << 1).toString(2),
  Half: (1 << 2).toString(2),
  OneThird: (1 << 3).toString(2),
  OneQuarter: (1 << 4).toString(2),
  Full: (1 << 5).toString(2),
  FourFifths: (1 << 6).toString(2),
  ThreeFifths: (1 << 7).toString(2),
  TwoFifths: (1 << 8).toString(2),
  OneFifth: (1 << 9).toString(2)
};
const Modifier = {
  Gapless: "gapless",
  Multiline: "multiline",
  Variable: "variable"
};
const Options = {
  VCentered: "vcentered",
  Centered: "centered",
  Narrow: "narrow"
};
const Columns = {
  Sizes,
  Type,
  Modifier,
  Options
};
export default Columns;