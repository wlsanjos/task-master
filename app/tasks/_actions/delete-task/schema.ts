import { z } from "zod";

export const deleteTaskSchema = z.object({
  taskId: z.string().uuid(),
});

export type DeleteTaskSchema = z.infer<typeof deleteTaskSchema>;
