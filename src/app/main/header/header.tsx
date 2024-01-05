"use client";

import { useCurrentUser } from "@/lib/firebase/current-user";

import { CustomAvatar } from "./avatar";

export default function Header() {
  const user = useCurrentUser();

  return (
    <header className="px-3 shadow-md h-14 md:h-16 flex justify-between items-center">
      <div>Menu</div>
      <div>Title</div>
      <div>
        <CustomAvatar />
      </div>
    </header>
  );
}
