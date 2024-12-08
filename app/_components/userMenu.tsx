"use client";

import { signOut, useSession } from "next-auth/react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/app/_components/ui/dropdown-menu";

export const UserMenu = () => {
  const { data: session } = useSession();

  const name = session?.user?.name;
  const image = session?.user?.image ?? "/avatar.png";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={image} alt={name ?? "avatar"} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          {name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
