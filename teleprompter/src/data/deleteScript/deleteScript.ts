"use server";

import { createClient } from "../supabase/server";

export const deleteScript = async (id: string) => {
  const client = createClient();

  await client.from("script").delete().eq("id", id);
};
