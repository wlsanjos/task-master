import { Status, Priority } from "@prisma/client";

export const TASK_STAUTS_ICONS = {
  [Status.COMPLETED]: "completed_task.svg",
  [Status.PENDING]: "pending_task.svg",
  [Status.IN_PROGRESS]: "in_progress_task.svg",
};

export const TASK_STATUS_LABELS = {
  COMPLETED: "Completo",
  IN_PROGRESS: "Em Progresso",
  PENDING: "Pendente",
};

export const TASK_STATUS_OPTIONS = [
  {
    value: Status.COMPLETED,
    label: "Completo",
  },
  {
    value: Status.IN_PROGRESS,
    label: "Em Progresso",
  },
  {
    value: Status.PENDING,
    label: "Pendente",
  },
];

export const TASK_PRIORITY_LABELS = {
  LOW: "Baixa",
  NORMAL: "Normal",
  HIGH: "Alta",
};

export const TASK_PRIORITY_OPTIONS = [
  {
    value: Priority.LOW,
    label: "Baixa",
  },
  {
    value: Priority.NORMAL,
    label: "Normal",
  },
  {
    value: Priority.HIGH,
    label: "Alta",
  },
];
