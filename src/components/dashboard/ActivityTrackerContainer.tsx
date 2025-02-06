import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Timer, Activity, Zap } from "lucide-react";
import { addWeeks, format, subWeeks } from "date-fns";
import { CalendarRow } from "./CalendarRow";
import { ActivityGraph } from "./ActivityGraph";
import { StatItem } from "./StatItem";
import { StatCard } from "./StatCard";
import { WeeklyBars } from "./WeeklyBars";
import { ProgressCircle } from "./ProgressCircle";
import { SpeedBars } from "./SpeedBars";
import { ActivityTrackingContainerSkeleton } from "./DashboardSkeleton";
import { IActivityData } from "@/types/dashboard";

interface ActivityTrackingContainerProps {
  data?: IActivityData;
  isLoading?: boolean;
  onDateChange: (date: Date) => void;
}

export function ActivityTrackingContainer({
  data,
  isLoading,
  onDateChange,
}: ActivityTrackingContainerProps) {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handlePreviousWeek = () => {
    const newWeek = subWeeks(currentWeek, 1);
    setCurrentWeek(newWeek);
    handleDateChange(newWeek);
  };

  const handleNextWeek = () => {
    const newWeek = addWeeks(currentWeek, 1);
    setCurrentWeek(newWeek);
    handleDateChange(newWeek);
  };

  if (isLoading) return <ActivityTrackingContainerSkeleton />;
  if (!data)
    return (
      <Card className="p-6 text-muted-foreground">
        No activity data available
      </Card>
    );

  return (
    <Card className="p-6 bg-background text-foreground">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Activity Tracking</h2>
        <p className="text-sm text-muted-foreground">
          {format(data.trackingDate, "MMMM d, yyyy")}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
        <div>
          <CalendarRow
            currentWeek={currentWeek}
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            onPreviousWeek={handlePreviousWeek}
            onNextWeek={handleNextWeek}
          />
          <ActivityGraph points={data.points} />
          <div className="flex justify-between mt-4">
            <StatItem value={data.done} label="Done" />
            <StatItem value={data.left} label="Left" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={<Timer className="text-primary" size={20} />}
            label="Total Time"
            value={`${data.totalTime}h`}
          >
            <WeeklyBars data={data.weeklyBars} />
          </StatCard>
          <StatCard
            icon={<Activity className="text-primary" size={20} />}
            label="Total Distance"
            value={`${data.targetDistance} Km`}
          >
            <ProgressCircle
              progress={data.progress}
              current={data.currentDistance}
              target={data.targetDistance}
            />
          </StatCard>
          <StatCard
            icon={<Zap className="text-primary" size={20} />}
            label="Average Speed"
            value={`${data.averageSpeed} Km/h`}
          >
            <SpeedBars data={data.speedBars} />
          </StatCard>
        </div>
      </div>
    </Card>
  );
}
