"use server";

import { createClient } from "../supabase/server";

export const createScript = async () => {
  const client = createClient();

  await client.from("script").insert({});
};
