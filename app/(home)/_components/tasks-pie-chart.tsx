"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { Status } from "@prisma/client";
import { TaskPercentagePerStatus } from "@/app/_data/get-dashboard/types";
import { CheckCircleIcon, HourglassIcon, CircleIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [Status.PENDING]: {
    label: "Pendente",
    color: "#E93030",
  },
  [Status.IN_PROGRESS]: {
    label: "Em Progresso",
    color: "#55B02E",
  },
  [Status.COMPLETED]: {
    label: "Concluído",
    color: "#FFFFFF",
  },
} satisfies ChartConfig;

interface TasksPieChartProps {
  statusPercentage: TaskPercentagePerStatus;
  pendingTotal: number;
  inProgressTotal: number;
  completedTotal: number;
}

const TasksPieChart = ({
  pendingTotal,
  inProgressTotal,
  completedTotal,
  statusPercentage,
}: TasksPieChartProps) => {
  const chartData = [
    {
      type: Status.PENDING,
      amount: pendingTotal,
      fill: chartConfig[Status.PENDING].color,
    },
    {
      type: Status.IN_PROGRESS,
      amount: inProgressTotal,
      fill: chartConfig[Status.IN_PROGRESS].color,
    },
    {
      type: Status.COMPLETED,
      amount: completedTotal,
      fill: chartConfig[Status.COMPLETED].color,
    },
  ];

  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<HourglassIcon size={16} className="text-red-500" />}
            title="Pendente"
            value={statusPercentage[Status.PENDING]}
          />
          <PercentageItem
            icon={<CircleIcon size={16} className="text-green-500" />}
            title="Em Progresso"
            value={statusPercentage[Status.IN_PROGRESS]}
          />
          <PercentageItem
            icon={<CheckCircleIcon size={16} className="text-white" />}
            title="Concluído"
            value={statusPercentage[Status.COMPLETED]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksPieChart;
