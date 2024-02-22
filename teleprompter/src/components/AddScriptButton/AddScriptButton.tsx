"use client";

import { createScript } from "../../data/createScript/createScript";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const AddScriptButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await createScript();
        router.refresh();
      }}
    >
      Add Script
    </Button>
  );
};
