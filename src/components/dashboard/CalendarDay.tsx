import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CalendarDayProps {
  date: Date;
  isSelected: boolean;
  onClick: () => void;
}

export const CalendarDay = ({
  date,
  isSelected,
  onClick,
}: CalendarDayProps) => (
  <button
    className="flex flex-col items-center gap-2 group"
    onClick={onClick}
    type="button"
  >
    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
      {format(date, "EEE")}
    </span>
    <span
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-full transition-colors",
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-muted hover:bg-accent"
      )}
    >
      {format(date, "d")}
    </span>
  </button>
);
