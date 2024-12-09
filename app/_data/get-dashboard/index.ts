"use server";

import { db } from "@/app/_lib/prisma";
import { Status } from "@prisma/client";
import { TotalTasksPerPriority, TaskPercentagePerStatus } from "./types";
import { auth } from "@/auth";

export const getDashboard = async (month: string) => {
  const session = await auth();
  if (!session || !session.user?.id) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;

  const where = {
    userId,
    dateStarted: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const pendingTotal = Number(
    (
      await db.task.aggregate({
        where: { ...where, status: Status.PENDING },
        _count: { id: true },
      })
    )?._count?.id,
  );

  const inProgressTotal = Number(
    (
      await db.task.aggregate({
        where: { ...where, status: Status.IN_PROGRESS },
        _count: { id: true },
      })
    )?._count?.id,
  );

  const completedTotal = Number(
    (
      await db.task.aggregate({
        where: { ...where, status: Status.COMPLETED },
        _count: { id: true },
      })
    )?._count?.id,
  );

  const totalTasks = pendingTotal + inProgressTotal + completedTotal;

  const statusPercentage: TaskPercentagePerStatus = {
    [Status.PENDING]: Math.round((pendingTotal / totalTasks) * 100),
    [Status.IN_PROGRESS]: Math.round((inProgressTotal / totalTasks) * 100),
    [Status.COMPLETED]: Math.round((completedTotal / totalTasks) * 100),
  };

  const totalTasksPerPriority: TotalTasksPerPriority[] = (
    await db.task.groupBy({
      by: ["priority"],
      where,
      _count: {
        id: true,
      },
    })
  ).map((priority) => ({
    priority: priority.priority,
    totalTasks: Number(priority._count.id),
    percentageOfTotal: Math.round(
      (Number(priority._count.id) / totalTasks) * 100,
    ),
  }));

  const lastTasks = await db.task.findMany({
    where,
    orderBy: { dateStarted: "desc" },
    take: 15,
  });

  return {
    pendingTotal,
    inProgressTotal,
    completedTotal,
    statusPercentage,
    totalTasksPerPriority,
    lastTasks: JSON.parse(JSON.stringify(lastTasks)),
  };
};
