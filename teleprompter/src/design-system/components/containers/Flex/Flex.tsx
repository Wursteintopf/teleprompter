import { FlexAlign, FlexDirection, Spacing } from "../../../types";
import { Box, BoxProps } from "../Box/Box";
import styles from "./Flex.module.scss";

export interface FlexProps extends BoxProps {
  gap?: Spacing;
  alignItems?: FlexAlign;
  justifyContent?: FlexAlign;
  direction?: FlexDirection;
  wrap?: boolean;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  gap,
  alignItems,
  justifyContent,
  direction,
  wrap = false,
  className,
  ...rest
}) => {
  const classNames = [styles.flex];

  if (className) classNames.push(className);
  if (gap) classNames.push(styles[`gap-${gap}`]);
  if (alignItems) classNames.push(styles[`alignItems-${alignItems}`]);
  if (justifyContent)
    classNames.push(styles[`justifyContent-${justifyContent}`]);
  if (direction) classNames.push(styles[`flexDirection-${direction}`]);
  if (wrap) classNames.push(styles.wrap);

  return (
    <Box className={classNames.join(" ")} {...rest}>
      {children}
    </Box>
  );
};
