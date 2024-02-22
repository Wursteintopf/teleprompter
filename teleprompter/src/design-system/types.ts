export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;
export type ColorVariant = "primary" | "secondary" | "success" | "error";

export type Size = `${number}${"px" | "em" | "%"}`;

export type Spacing = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type Position = "top" | "bottom" | "left" | "right";

export type Align = "left" | "right" | "center";
export type FlexAlign =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

export type FontWeight = "thin" | "regular" | "bold";
