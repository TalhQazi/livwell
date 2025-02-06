export interface ActivityData {
  points: { x: number; y: number }[];
  trackingDate: string;
  done: number;
  left: number;
  totalTime: string;
  weeklyBars: number[];
  targetDistance: number;
  currentDistance: number;
  progressAngle: number;
  averageSpeed: number;
  speedBars: number[];
}
