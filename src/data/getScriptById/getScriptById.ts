"use server";

import { notFound } from "next/navigation";
import { createClient } from "../supabase/server";

export const getScriptById = async (id: string) => {
  const client = createClient();

  const { data } = await client.from("script").select().eq("id", id).single();

  if (!data) notFound();

  return data;
};
