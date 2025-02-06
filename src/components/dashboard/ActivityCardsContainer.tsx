import React from "react";
import ActivityCard from "./ActivityCard";
import { Card } from "@/components/ui/card";
import { IActivityCardData } from "@/types/dashboard";
import { ActivityCardSkeleton } from "./DashboardSkeleton";

interface Props {
  data?: IActivityCardData;
  isLoading: boolean;
}

export default function ActivityCardsContainer({ data, isLoading }: Props) {
  if (isLoading) {
    return (
      <Card className="bg-background p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <ActivityCardSkeleton key={i} />
            ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActivityCard
          type={"Protein"}
          value={data?.protein.value ?? 0}
          unit={data?.protein.unit ?? ""}
          calories={data?.protein.calories ?? 0}
          imageUrl={"/dashboard/protein.svg"}
        />
        <ActivityCard
          type={"Carbs"}
          value={data?.carbs.value ?? 0}
          unit={data?.carbs.unit ?? ""}
          calories={data?.carbs.calories ?? 0}
          imageUrl={"/dashboard/carbs.svg"}
        />
        <ActivityCard
          type={"Fats"}
          value={data?.fats.value ?? 0}
          unit={data?.fats.unit ?? ""}
          calories={data?.fats.calories ?? 0}
          imageUrl={"/dashboard/fats.svg"}
        />
        <ActivityCard
          type={"Water"}
          value={data?.water.value ?? 0}
          unit={data?.water.unit ?? ""}
          calories={data?.water.calories ?? 0}
          imageUrl={"/dashboard/water.svg"}
        />
      </div>
    </Card>
  );
}
