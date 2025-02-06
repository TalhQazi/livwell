export interface IActivityCardData {
  protein: ActivityDetail;
  carbs: ActivityDetail;
  fats: ActivityDetail;
  water: ActivityDetail;
}

interface ActivityDetail {
  value: number;
  unit: string;
  calories: number;
}

export interface IHealthStatsData {
  title: string;
  value: number;
  unit: string;
  status: string;
  iconSrc: string;
  chartImageSrc: string;
}

export interface IWalkActivityData {
  calories: number;
  duration: string;
}

export interface IActivityData {
  trackingDate: Date;
  points: { x: number; y: number }[];
  done: number;
  left: number;
  weeklyBars: { date: Date; value: number }[];
  totalTime: number;
  targetDistance: number;
  currentDistance: number;
  progress: number;
  averageSpeed: number;
  speedBars: number[];
}

export interface DashboardData {
  activityCards: IActivityCardData;
  healthStats: IHealthStatsData[];
  walkActivity: IWalkActivityData;
  activityTracking: IActivityData;
}
