"use client";

import { theme } from "@/design-system/muiTheme";
import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
