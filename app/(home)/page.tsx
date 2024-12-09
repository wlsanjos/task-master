import Navbar from "../_components/Navbar";
import { validateUserSession } from "../_lib/auth/validateUserSession";

import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TasksPieChart from "./_components/tasks-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import TasksPerPriority from "./_components/tasks-per-priority";
import LastTasks from "./_components/last-tasks";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const session = await validateUserSession();

  if (!session) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TasksPieChart {...dashboard} />
              <TasksPerPriority
                tasksPerPriority={dashboard.totalTasksPerPriority}
              />
            </div>
          </div>
          <LastTasks lastTasks={dashboard.lastTasks} />
        </div>
      </div>
    </>
  );
};

export default Home;
