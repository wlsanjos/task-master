import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Node Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Task Master é uma plataforma de gerenciamento tarefa.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit" variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta com Google
          </Button>
        </form>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
