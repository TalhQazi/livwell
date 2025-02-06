"use client";

import { useActivityData, useDashboardData } from "@/hooks/useMockData";
import ActivityCardsContainer from "@/components/dashboard/ActivityCardsContainer";
import HealthStatsCardContainer from "@/components/dashboard/HealthStatsCardContainer";
import HumanBodyCard from "@/components/dashboard/HumanBodyCard";
import WalkActivityCard from "@/components/dashboard/WalkActivityCard";
import { ActivityTrackingContainer } from "@/components/dashboard/ActivityTrackerContainer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { data, isLoading, error } = useDashboardData();
  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: ActivityError,
  } = useActivityData(selectedDate);

  if (error || ActivityError) {
    return (
      <div className="p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load dashboard data. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="px-2 sm:px-6 py-8  space-y-8">
      <div className="flex gap-4 flex-wrap-reverse mx-auto ">
        <div className="space-y-4 flex-grow-[1] md:min-w-[32rem] flex flex-col justify-between">
          <WalkActivityCard isLoading={isLoading} data={data?.walkActivity} />

          <ActivityCardsContainer
            data={data?.activityCards}
            isLoading={isLoading}
          />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row w-fit flex-grow-[2]">
          <HumanBodyCard />
          <HealthStatsCardContainer
            data={data?.healthStats ?? []}
            isLoading={isLoading}
          />
        </div>
      </div>
      <ActivityTrackingContainer
        onDateChange={setSelectedDate}
        isLoading={isActivityLoading}
        data={activityData}
      />
    </div>
  );
}
