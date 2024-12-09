"use client";

import { Task } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { TASK_STATUS_LABELS } from "@/app/_constants/tasks";
import TaskPriorityBadge from "../_components/type-badge";
import EditTaskButton from "../_components/edit-task-button";
import DeleteTaskButton from "../_components/delete-task-button";
import { formatDate } from "@/app/_lib/date";

export const taskColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original: task } }) => TASK_STATUS_LABELS[task.status],
  },
  {
    accessorKey: "dateStarted",
    header: "Data de Início",
    cell: ({ row: { original: task } }) =>
      formatDate(new Date(task.dateStarted)),
  },
  {
    accessorKey: "dueDate",
    header: "Data de Vencimento",
    cell: ({ row: { original: task } }) =>
      task.dueDate ? formatDate(new Date(task.dueDate)) : "N/A",
  },
  {
    accessorKey: "priority",
    header: "Prioridade",
    cell: ({ row: { original: task } }) => <TaskPriorityBadge task={task} />,
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: task } }) => {
      return (
        <div className="space-x-1">
          <EditTaskButton task={task} />
          <DeleteTaskButton taskId={Number(task.id)} />
        </div>
      );
    },
  },
];
