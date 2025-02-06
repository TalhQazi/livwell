import { useQuery } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";
import { DashboardData, IActivityData } from "@/types/dashboard";
import { addDays, startOfWeek } from "date-fns";

const generateActivityData = (date: Date): IActivityData => ({
  trackingDate: date,
  points: Array(10)
    .fill(null)
    .map(() => ({
      x: faker.number.int({ min: 0, max: 300 }),
      y: faker.number.int({ min: 0, max: 100 }),
    })),
  done: faker.number.int({ min: 50, max: 100 }),
  left: faker.number.int({ min: 0, max: 50 }),
  weeklyBars: Array(7)
    .fill(null)
    .map((_, index) => ({
      date: addDays(startOfWeek(date), index),
      value: faker.number.int({ min: 20, max: 100 }),
    })),
  totalTime: faker.number.int({ min: 100, max: 300 }),
  targetDistance: faker.number.int({ min: 8, max: 15 }),
  currentDistance: faker.number.int({ min: 1, max: 7 }),
  progress: faker.number.int({ min: 0, max: 360 }),
  averageSpeed: faker.number.float({ min: 4, max: 12, fractionDigits: 1 }),
  speedBars: Array(10)
    .fill(null)
    .map(() => faker.number.int({ min: 20, max: 100 })),
});

const generateDashboardData = (): Omit<DashboardData, "activityTracking"> => ({
  activityCards: {
    protein: {
      value: faker.number.int({ min: 100, max: 500 }),
      unit: "g",
      calories: faker.number.int({ min: 50, max: 200 }),
    },
    carbs: {
      value: faker.number.int({ min: 100, max: 500 }),
      unit: "g",
      calories: faker.number.int({ min: 50, max: 200 }),
    },
    fats: {
      value: faker.number.int({ min: 100, max: 500 }),
      unit: "g",
      calories: faker.number.int({ min: 50, max: 200 }),
    },
    water: {
      value: faker.number.int({ min: 100, max: 500 }),
      unit: "ml",
      calories: 0,
    },
  },

  healthStats: [
    {
      title: "Heart Rate",
      value: faker.number.int({ min: 60, max: 100 }),
      unit: "BPM",
      status: faker.helpers.arrayElement(["Normal", "Elevated", "High"]),
      iconSrc: "/dashboard/blood-drop.png",
      chartImageSrc: "/dashboard/heart-beat.svg",
    },
    {
      title: "Blood Glucose",
      value: faker.number.int({ min: 80, max: 200 }),
      unit: "mg/dL",
      status: faker.helpers.arrayElement(["Normal", "Elevated", "High"]),
      iconSrc: "/dashboard/heart.png",
      chartImageSrc: "/dashboard/blood-glucose-chart.svg",
    },
  ],

  walkActivity: {
    calories: faker.number.int({ min: 100, max: 300 }),
    duration: `${faker.number.int({ min: 20, max: 59 })}:${faker.number
      .int({ min: 0, max: 59 })
      .toString()
      .padStart(2, "0")}`,
  },
});

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async (): Promise<Omit<DashboardData, "activityTracking">> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      //   if (Math.random() > 0.9) {
      //     throw new Error("Failed to fetch dashboard data");
      //   }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      //   if (Math.random() > 0.9) {
      //     throw new Error("Failed to fetch dashboard data");
      //   }
      return generateDashboardData();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};

export const useActivityData = (date: Date) => {
  return useQuery({
    queryKey: ["activity", date],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      //   if (Math.random() > 0.9) {
      //     throw new Error("Failed to fetch dashboard data");
      //   }

      return generateActivityData(date);
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};
