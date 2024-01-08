"use client";

import { useIsAdmin } from "@/lib/firebase/admin-user-hook";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Admin() {
  const isAdmin = useIsAdmin();

  useEffect(() => {
    if (!isAdmin) {
      redirect("/main");
    }
  }, [isAdmin]);

  return <div>Admin page</div>;
}
