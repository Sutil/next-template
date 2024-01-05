import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut } from "@/lib/firebase/auth";
import { useCurrentUser } from "@/lib/firebase/current-user";

export function CustomAvatar() {
  const user = useCurrentUser();

  if (user === "loading") {
    return <Skeleton className="w-10 h-10" />;
  }

  function logout() {
    signOut();
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
