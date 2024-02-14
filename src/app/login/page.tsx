import { LoginForm } from "@/components/LoginForm/LoginForm";
import { createClient } from "@/data/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }

  return <LoginForm />;
}
