import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { startOfWeek, addDays, format } from "date-fns";
import { CalendarDay } from "./CalendarDay";

interface CalendarRowProps {
  currentWeek: Date;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
}

export const CalendarRow = ({
  currentWeek,
  selectedDate,
  onDateChange,
  onPreviousWeek,
  onNextWeek,
}: CalendarRowProps) => {
  const weekStart = startOfWeek(currentWeek);
  const dates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <div className="flex flex-col mb-8 gap-2 items-end w-full">
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPreviousWeek}
          className="hidden sm:flex h-6 w-6"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNextWeek}
          className="hidden sm:flex h-6 w-6"
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="flex justify-between flex-1 px-4 w-full">
        {dates.map((date) => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            isSelected={
              format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
            }
            onClick={() => onDateChange(date)}
          />
        ))}
      </div>
    </div>
  );
};
