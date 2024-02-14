"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const BackButton: React.FC = () => {
  return (
    <Link href="/">
      <Button startIcon={<ArrowBackIosIcon />}>Back to main menu</Button>
    </Link>
  );
};
