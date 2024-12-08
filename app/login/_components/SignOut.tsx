"use client";

import { Button } from "@/app/_components/ui/button";
import { signOut } from "next-auth/react";

export const SignOut = () => <Button onClick={() => signOut()}>Sair</Button>;
