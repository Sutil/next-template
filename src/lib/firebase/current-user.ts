import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "./auth";

export function useCurrentUser() {
  const [user, setUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return unsubscribe;
  }, []);

  return user;
}
