import { BackButton } from "../../../components/BackButton/BackButton";
import { ViewScript } from "../../../components/ViewScript/ViewScript";
import { getScriptById } from "../../../data/getScriptById/getScriptById";
import { Box } from "../../../design-system/components/containers/Box/Box";
import { PageWidthContainer } from "../../../design-system/components/containers/PageWidthContainer/PageWidthContainer";

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
      <Box mb="xxl">
        <ViewScript script={script} />
      </Box>
    </PageWidthContainer>
  );
}
