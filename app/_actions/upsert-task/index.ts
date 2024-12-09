"use server";

import { db } from "@/app/_lib/prisma";
import { Status, Priority } from "@prisma/client";
import { upsertTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

interface UpsertTaskParams {
  id?: string | undefined;
  title: string;
  description?: string | null;
  status: Status;
  priority: Priority;
  dateStarted: Date;
  dueDate?: Date | null;
}

export const upsertTask = async (params: UpsertTaskParams) => {
  upsertTaskSchema.parse(params);
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user?.id;

  if (!userId) {
    throw new Error("Invalid user ID");
  }

  const where = params.id ? { id: parseInt(params.id) } : { id: 0 };

  await db.task.upsert({
    update: { ...params, userId },
    create: { ...params, userId },
    where: where,
  });

  revalidatePath("/tasks");
};
