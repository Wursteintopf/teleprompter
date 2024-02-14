"use server";

import { Table } from "../supabase/helper.types";
import { createClient } from "../supabase/server";

export const updateScipt = async (script: Table<"script">) => {
  const client = createClient();

  await client.from("script").update(script).eq("id", script.id);
};
