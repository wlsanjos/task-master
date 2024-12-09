import { CheckCircleIcon, HourglassIcon, CircleIcon } from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  pendingTotal: number;
  inProgressTotal: number;
  completedTotal: number;
  userCanAddTask?: boolean;
}

const SummaryCards = async ({
  pendingTotal,
  inProgressTotal,
  completedTotal,
  userCanAddTask,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}

      <SummaryCard
        icon={<HourglassIcon size={16} />}
        title="Tarefas Pendentes"
        count={pendingTotal}
        size="large"
        userCanAddTask={userCanAddTask}
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<CircleIcon size={16} className="text-yellow-500" />}
          title="Em Progresso"
          count={inProgressTotal}
        />
        <SummaryCard
          icon={<CheckCircleIcon size={16} className="text-green-500" />}
          title="Concluídas"
          count={completedTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
