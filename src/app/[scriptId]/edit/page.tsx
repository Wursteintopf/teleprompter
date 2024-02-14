import { BackButton } from "@/components/BackButton/BackButton";
import { EditScriptForm } from "@/components/EditScriptForm/EditScriptForm";
import { getScriptById } from "@/data/getScriptById/getScriptById";
import { Box } from "@/design-system/components/containers/Box/Box";
import { PageWidthContainer } from "@/design-system/components/containers/PageWidthContainer/PageWidthContainer";
import { TextField, TextareaAutosize, Typography } from "@mui/material";

export default async function Page({
  params: { scriptId },
}: {
  params: { scriptId: string };
}) {
  const script = await getScriptById(scriptId);

  return (
    <PageWidthContainer>
      <Box mt="s">
        <BackButton />
      </Box>
      <Box mt="m" mb="m">
        <Typography variant="h4">Edit Script</Typography>
      </Box>
      <EditScriptForm script={script} />
    </PageWidthContainer>
  );
}
