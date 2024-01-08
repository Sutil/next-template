import { useEffect, useState } from "react";
import { useCurrentUser } from "./current-user";
import { isAdminUser } from "./services/admins-service";

export function useIsAdmin() {
  const user = useCurrentUser();
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    async function checkUser() {
      if (user !== "loading" && user !== null && !(await isAdminUser(user))) {
        setIsAdmin(false);
      }
    }
    checkUser();
  }, [user]);

  return isAdmin;
}
