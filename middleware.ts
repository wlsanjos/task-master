import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: Request) {
  const session = await auth();

  if (!session) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/tasks/:path*"],
};
