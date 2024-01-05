"use client";

import { onAuthStateChanged } from "@/lib/firebase/auth";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<"loading" | null | User>("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  if (user === "loading") {
    return <div>loading</div>;
  }

  return <header>{user ? user.displayName : "off"}</header>;
}
