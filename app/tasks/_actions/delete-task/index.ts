"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteTask = async ({ taskId }: DeleteTaskSchema) => {
  await db.task.delete({
    where: {
      id: Number(taskId),
    },
  });
  revalidatePath("/tasks");
  revalidatePath("/");
};
