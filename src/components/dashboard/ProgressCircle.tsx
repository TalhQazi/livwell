import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

interface ProgressCircleProps {
  progress: number;
  current: number;
  target: number;
}

export const ProgressCircle = ({
  progress,
  current,
  target,
}: ProgressCircleProps) => {
  return (
    <div className="h-56 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={[{ value: progress }]}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar background dataKey="value" fill={"hsl(var(--primary))"} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">{current} Km</div>
          <div className="text-sm text-muted-foreground">of {target} Km</div>
        </div>
      </div>
    </div>
  );
};
