"use client";

import { deleteScript } from "../../data/deleteScript/deleteScript";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const DeleteScriptButton: React.FC<{ scriptId: string }> = ({
  scriptId,
}) => {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await deleteScript(scriptId);
        router.push("/");
      }}
    >
      Yes, delete
    </Button>
  );
};
