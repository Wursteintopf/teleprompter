import { createTheme } from "@mui/material";
import NextLink from "next/link";
import { forwardRef } from "react";
import variables from "./variables.module.scss";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  // @ts-expect-error
  return <NextLink ref={ref} {...props} />;
});

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
