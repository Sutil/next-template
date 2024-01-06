"use client";
import { useCurrentUser } from "@/lib/firebase/current-user";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export function AuthGuard() {
  const user = useCurrentUser();

  useEffect(() => {
    if (user && user !== "loading") {
      redirect("/main");
    }
  }, [user]);

  return null;
}
