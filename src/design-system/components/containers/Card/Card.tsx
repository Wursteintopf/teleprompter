import { Box, BoxProps } from "../Box/Box";
import styles from "./Card.module.scss";

interface CardProps extends BoxProps {}

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <Box className={`${styles.container} ${className}`} {...rest}>
      {children}
    </Box>
  );
};
