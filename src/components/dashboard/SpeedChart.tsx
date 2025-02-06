import { Card } from "@/components/ui/card";
import { Gauge } from "lucide-react";

interface SpeedChartProps {
  averageSpeed: number;
  speedBars: number[];
}

export function SpeedChart({ averageSpeed, speedBars }: SpeedChartProps) {
  return (
    <Card className="stat-card">
      <div className="stat-header">
        <div className="stat-icon">
          <Gauge size={20} />
        </div>
        <div className="stat-info">
          <p className="text-sm text-muted-foreground">Average Speed</p>
          <h3 className="text-xl font-semibold">{averageSpeed} km/h</h3>
        </div>
      </div>

      <div className="speed-bars flex items-end justify-between h-32 mt-4">
        {speedBars.map((height, index) => (
          <div
            key={index}
            className="w-4 bg-primary/20 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </Card>
  );
}
