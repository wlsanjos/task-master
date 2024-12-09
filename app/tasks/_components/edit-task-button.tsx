"use client";

import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import UpsertTaskDialog from "@/app/_components/upsert-task-dialog";
import { Task } from "@prisma/client";

interface EditTaskButtonProps {
  task: Task;
}

const EditTaskButton = ({ task }: EditTaskButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>

      <UpsertTaskDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...task }}
        taskId={Number(task.id)}
      />
    </>
  );
};

export default EditTaskButton;
