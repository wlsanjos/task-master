import { Priority, Status } from "@prisma/client";

export type TaskPercentagePerStatus = {
  [key in Status]: number;
};

export interface TotalTasksPerPriority {
  priority: Priority;
  totalTasks: number;
  percentageOfTotal: number;
}
