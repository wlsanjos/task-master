import AddTaskButton from "@/app/_components/add-task-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  count: number;
  size?: "small" | "large";
  userCanAddTask?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  count,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {count}
        </p>

        {size === "large" && <AddTaskButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
