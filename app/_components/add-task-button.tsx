"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTaskDialog from "./upsert-task-dialog";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const AddTaskButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold sm:mt-0"
              onClick={() => setDialogIsOpen(true)}
            >
              Adicionar Tarefas
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
      <UpsertTaskDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
  );
};

export default AddTaskButton;
