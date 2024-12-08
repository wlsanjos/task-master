import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function validateUserSession() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return session;
}
