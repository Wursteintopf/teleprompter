"use client";

import { createClient } from "@/data/supabase/client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const LogoutButton: React.FC = () => {
  const client = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    await client.auth.signOut();
    router.refresh();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
