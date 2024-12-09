import { Status, Priority } from "@prisma/client";
import { z } from "zod";

export const upsertTaskSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().optional().nullable(),
  status: z.nativeEnum(Status),
  priority: z.nativeEnum(Priority),
  dateStarted: z.date(),
  dueDate: z.date().optional().nullable(),
});
