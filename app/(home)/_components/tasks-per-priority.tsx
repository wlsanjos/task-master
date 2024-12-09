import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TASK_PRIORITY_LABELS } from "@/app/_constants/tasks";
import { TotalTasksPerPriority } from "@/app/_data/get-dashboard/types";

interface TasksPerPriorityProps {
  tasksPerPriority: TotalTasksPerPriority[];
}

const TasksPerPriority = ({ tasksPerPriority }: TasksPerPriorityProps) => {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border pb-6">
      <CardHeader>
        <CardTitle className="font-bold">Tarefas por Prioridade</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {tasksPerPriority.map((priority) => (
          <div key={priority.priority} className="space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm font-bold">
                {TASK_PRIORITY_LABELS[priority.priority]}
              </p>
              <p className="text-sm font-bold">{priority.percentageOfTotal}%</p>
            </div>
            <Progress value={priority.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default TasksPerPriority;
