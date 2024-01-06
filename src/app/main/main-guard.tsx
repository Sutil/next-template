"use client";
import { useCurrentUser } from "@/lib/firebase/current-user";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function MainGuard() {
  const user = useCurrentUser();

  useEffect(() => {
    if (!user) {
      redirect("/auth/login");
    }
  }, [user]);

  return <></>;
}
