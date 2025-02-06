import { ResponsiveContainer, BarChart, Bar } from "recharts";

interface SpeedBarsProps {
  data: number[];
}

export const SpeedBars = ({ data }: SpeedBarsProps) => {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.map((value, index) => ({ value, index }))}>
          <Bar
            dataKey="value"
            fill={"hsl(var(--primary))"}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
