"use client";

import { Table } from "@/data/supabase/helper.types";
import { updateScipt } from "@/data/updateScript/updateScript";
import { Flex } from "@/design-system/components/containers/Flex/Flex";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./EditScriptForm.module.scss";

interface EditScriptFormProps {
  script: Table<"script">;
}

export const EditScriptForm: React.FC<EditScriptFormProps> = ({
  script: initialScript,
}) => {
  const [script, setScript] = useState(initialScript);
  const router = useRouter();

  return (
    <Flex direction="column" gap="s">
      <TextField
        value={script.name}
        onChange={(e) => setScript({ ...script, name: e.target.value })}
      />
      <TextareaAutosize
        className={styles.textAreaStyle}
        minRows={10}
        value={script.text ?? ""}
        onChange={(e) => setScript({ ...script, text: e.target.value })}
      />
      <Button
        variant="outlined"
        onClick={async () => {
          await updateScipt(script);
          router.refresh();
        }}
      >
        Save
      </Button>
    </Flex>
  );
};
