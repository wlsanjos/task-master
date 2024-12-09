import { Badge } from "@/app/_components/ui/badge";
import { Task, Priority } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TaskPriorityBadgeProps {
  task: Task;
}

const TaskPriorityBadge = ({ task }: TaskPriorityBadgeProps) => {
  if (task.priority === Priority.HIGH) {
    return (
      <Badge className="font bold bg-danger bg-opacity-10 text-danger">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Alta
      </Badge>
    );
  }
  if (task.priority === Priority.NORMAL) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Normal
      </Badge>
    );
  }
  return (
    <Badge className="font bold bg-white bg-opacity-10 text-white">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Baixa
    </Badge>
  );
};

export default TaskPriorityBadge;
