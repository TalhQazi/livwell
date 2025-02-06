import { Card } from "@/components/ui/card";

interface LineChartProps {
  points: { x: number; y: number }[];
  done: number;
  left: number;
}

export function LineChart({ points, done, left }: LineChartProps) {
  const pathData = points
    .map((point, index) => (index === 0 ? "M" : "L") + `${point.x},${point.y}`)
    .join(" ");

  return (
    <Card className="p-4">
      <div className="graph-container">
        <svg className="graph" viewBox="0 0 300 100">
          <path
            d={pathData}
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />
        </svg>

        <div className="stats-container">
          <div className="stat-item">
            <span className="value">{done}</span>
            <span className="label">Done</span>
          </div>
          <div className="stat-item">
            <span className="value">{left}</span>
            <span className="label">Left</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
