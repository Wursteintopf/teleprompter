import { getAllScripts } from "@/data/getAllScripts/getAllScripts";
import { Card } from "@/design-system/components/containers/Card/Card";
import { Flex } from "@/design-system/components/containers/Flex/Flex";
import { PageWidthContainer } from "@/design-system/components/containers/PageWidthContainer/PageWidthContainer";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddScriptButton } from "@/components/AddScriptButton/AddScriptButton";
import Link from "next/link";
import { createClient } from "@/data/supabase/server";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/LogoutButton/LogoutButton";

export default async function Page() {
  const scripts = await getAllScripts();

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <PageWidthContainer>
      <Flex mt="m" mb="m" justifyContent="space-between">
        <Typography variant="h4">Alle Skripte</Typography>
        <Flex gap="s">
          <AddScriptButton />
          <LogoutButton />
        </Flex>
      </Flex>
      <Flex
        gap="s"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        {scripts.map((s, index) => (
          <Card
            key={`Script-${index}`}
            width="100%"
            pt="m"
            pr="m"
            pl="m"
            pb="m"
          >
            <Flex alignItems="center" justifyContent="space-between">
              {s.name ?? <i>Unnamed Script</i>}
              <Flex gap="s">
                <Link href={`/${s.id}/view`}>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <Link href={`/${s.id}/edit`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <Link href={`/${s.id}/delete`}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Link>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
    </PageWidthContainer>
  );
}
