import { BackButton } from "@/components/BackButton/BackButton";
import { DeleteScriptButton } from "@/components/DeleteScriptButton/DeleteScriptButton";
import { Box } from "@/design-system/components/containers/Box/Box";
import { PageWidthContainer } from "@/design-system/components/containers/PageWidthContainer/PageWidthContainer";
import { Typography } from "@mui/material";

export default async function Page({
  params: { scriptId },
}: {
  params: { scriptId: string };
}) {
  return (
    <PageWidthContainer>
      <Box mt="s">
        <BackButton />
      </Box>
      <Box mt="m" mb="m">
        <Typography variant="h4">Delete Script</Typography>
      </Box>
      <p>Are you sure you want to delete this script?</p>
      <Box mt="m">
        <DeleteScriptButton scriptId={scriptId} />
      </Box>
    </PageWidthContainer>
  );
}
