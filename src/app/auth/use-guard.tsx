import { useCurrentUser } from "@/lib/firebase/current-user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthGuard() {
  const user = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (user && user !== "loading") {
      router.push("/main");
    }
  }, [user, router]);
}
