import { PropsWithChildren } from "react";
import styles from "./Box.module.scss";
import { Size, Spacing } from "../../../types";
import { objectEntries } from "../../../../utils/objectEntries";

export interface BoxProps extends PropsWithChildren {
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  className?: string;
  fitContent?: boolean;
  width?: Size;
  maxWidth?: Size;
  height?: Size;
  fontSize?: number;
}

const propertyNameMap = {
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
};

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  fitContent = false,
  width,
  maxWidth,
  height,
  fontSize,
  ...props
}) => {
  const classNames = props
    ? objectEntries(props)
        .map(([k, v]) => (v ? styles[`${propertyNameMap[k]}-${v}`] : ""))
        .filter((c) => c)
    : [];

  if (className) classNames.push(className);
  if (fitContent) classNames.push(styles.fitContent);

  return (
    <div
      className={classNames.join(" ")}
      style={{ width, height, maxWidth, fontSize }}
    >
      {children}
    </div>
  );
};
