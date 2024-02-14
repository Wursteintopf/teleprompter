"use client";

import { Table } from "@/data/supabase/helper.types";
import { Flex } from "@/design-system/components/containers/Flex/Flex";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import { Box } from "@/design-system/components/containers/Box/Box";
import styles from "./ViewScript.module.scss";
import { useState } from "react";

interface ViewScriptProps {
  script: Table<"script">;
}

export const ViewScript: React.FC<ViewScriptProps> = ({ script }) => {
  const [flipped, setFlipped] = useState(false);
  const [fontSize, setFontSize] = useState(24);

  return (
    <Box>
      <Flex>
        <IconButton onClick={() => setFlipped(!flipped)}>
          <SwitchLeftIcon />
        </IconButton>
        <IconButton onClick={() => setFontSize(fontSize - 1)}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => setFontSize(fontSize + 1)}>
          <AddIcon />
        </IconButton>
      </Flex>
      <Box
        mt="m"
        className={`${styles.viewScriptContainer} ${flipped && styles.flipped}`}
        fontSize={fontSize}
      >
        {script.text}
      </Box>
    </Box>
  );
};
