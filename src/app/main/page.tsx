"use client";

import { useCurrentUser } from "@/lib/firebase/current-user";
import Header from "./header/header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const user = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  return (
    <main>
      <Header />
      <div>test</div>
    </main>
  );
}
