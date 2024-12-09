import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Task, Priority } from "@prisma/client";
import { formatDate } from "@/app/_lib/date";
import Link from "next/link";
import {
  TASK_PRIORITY_LABELS,
  TASK_STAUTS_ICONS,
} from "@/app/_constants/tasks";
import Image from "next/image";

interface LastTasksProps {
  lastTasks: Task[];
}

const LastTasks = ({ lastTasks }: LastTasksProps) => {
  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case Priority.HIGH:
        return "text-red-500";
      case Priority.NORMAL:
        return "text-yellow-500";
      case Priority.LOW:
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas Tarefas</CardTitle>
        <Button variant="outline" className="rounded-full font-bold" asChild>
          <Link href="/tasks">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg p-3 ${getPriorityColor(task.priority)}`}
              >
                <Image
                  src={`/${TASK_STAUTS_ICONS[task.status]}`}
                  color="red"
                  height={24}
                  width={24}
                  alt="TASKs"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{task.title}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(new Date(task.dateStarted))}
                </p>
              </div>
            </div>
            <p
              className={`text-sm font-bold ${getPriorityColor(task.priority)}`}
            >
              {TASK_PRIORITY_LABELS[task.priority]}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTasks;
