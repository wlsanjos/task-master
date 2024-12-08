import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Task Master",
  description: "Sistema gerenciamento Tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} dark antialiased`}>
        <SessionProvider>
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
