import { Card } from "@/components/ui/card";
import React from "react";
import HealthStatsCard from "./HealthStatsCard";
import { IHealthStatsData } from "@/types/dashboard";
import { HealthStatsCardContainerSkeleton } from "./DashboardSkeleton";

interface HealthStatsCardContainerProps {
  data: IHealthStatsData[];
  isLoading: boolean;
}

export default function HealthStatsCardContainer({
  data,
  isLoading,
}: HealthStatsCardContainerProps) {
  if (isLoading) {
    return <HealthStatsCardContainerSkeleton />;
  }

  return (
    <Card className="flex lg:flex-col gap-6 bg-background p-6 w-auto">
      {data.map((stats, index) => (
        <HealthStatsCard key={index} {...stats} />
      ))}
    </Card>
  );
}
