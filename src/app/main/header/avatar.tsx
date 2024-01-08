import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsAdmin } from "@/lib/firebase/admin-user-hook";
import { signOut } from "@/lib/firebase/auth";
import { useCurrentUser } from "@/lib/firebase/current-user";
import { useRouter } from "next/navigation";

export function CustomAvatar() {
  const user = useCurrentUser();
  const router = useRouter();
  const isAdmin = useIsAdmin();

  if (user === "loading") {
    return <Skeleton className="w-10 h-10" />;
  }

  function logout() {
    signOut();
  }

  function goToAdminPage() {
    router.push("/main/admin");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.photoURL || ""} />
          <AvatarFallback>EO</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
        {isAdmin && (
          <DropdownMenuItem onClick={goToAdminPage}>Admin</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
