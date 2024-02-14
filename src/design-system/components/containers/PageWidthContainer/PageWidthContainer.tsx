import styles from "./PageWidthContainer.module.scss";
import { PropsWithChildren } from "react";

export const PageWidthContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.pageWidthContainer}>{children}</div>;
};
