import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";
import { format } from "date-fns";

interface WeeklyBarsProps {
  data: { date: Date; value: number }[];
}

export const WeeklyBars = ({ data }: WeeklyBarsProps) => {
  const chartData = data.map((item) => ({
    day: format(item.date, "EEE"),
    value: item.value,
    max: 200,
  }));

  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: `hsl(var(--muted-foreground))`,
              fontSize: 12,
            }}
          />
          <Bar
            dataKey="value"
            fill="#ADD1DD"
            barSize={12}
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
