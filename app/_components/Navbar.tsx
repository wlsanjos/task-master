"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { UserMenu } from "./userMenu";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between border-b border-solid px-4 py-4 md:px-8">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" width={173} height={39} alt="AI" />

        <Link href="/" className="text-muted-foreground">
          Dashboard
        </Link>
        <Link href="/tasks" className="text-muted-foreground">
          Tarefas
        </Link>
      </div>
      <div className="flex items-center gap-4">{session && <UserMenu />}</div>
    </nav>
  );
};

export default Navbar;