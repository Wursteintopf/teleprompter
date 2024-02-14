import { createClient } from "../supabase/server";

export const getAllScripts = async () => {
  const client = createClient();

  const { data } = await client.from("script").select();

  if (!data) return [];

  return data;
};
