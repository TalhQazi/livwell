import { ResponsiveContainer, LineChart, Line } from "recharts";

interface ActivityGraphProps {
  points: { x: number; y: number }[];
}

export const ActivityGraph = ({ points }: ActivityGraphProps) => {
  return (
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line
            type="monotone"
            dataKey="y"
            stroke={"hsl(var(--primary))"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
