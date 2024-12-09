import AddTaskButton from "../_components/add-task-button";
import Navbar from "../_components/Navbar";
import { DataTable } from "../_components/ui/data-table";
import { ScrollArea } from "../_components/ui/scroll-area";
import { db } from "../_lib/prisma";
import { taskColumns } from "./_columns";
import { auth } from "@/auth";

const TaskPage = async () => {
  const session = await auth();

  const user = session!.user;

  const tasks = await db.task.findMany({
    where: {
      user: {
        id: user!.id,
      },
    },
    orderBy: {
      dateStarted: "desc",
    },
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Tarefas</h1>
          <div className="flex items-center gap-3">
            <AddTaskButton />
          </div>
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={taskColumns}
            data={JSON.parse(JSON.stringify(tasks))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TaskPage;
