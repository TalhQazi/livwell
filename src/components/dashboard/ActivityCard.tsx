import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ActivityCardProps {
  type: string;
  value: number;
  unit: string;
  calories: number;
  imageUrl: string;
}

export default function ActivityCard({
  type,
  unit,
  value,
  imageUrl,
  calories,
}: ActivityCardProps) {
  return (
    <Card className="bg-muted p-4 h-40 relative">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs capitalize">{type}</p>
          <p className="font-semibold">
            {value} {unit}
          </p>
        </div>
        <Image src={imageUrl} alt="Ellipse" height={44} width={44} />
        <Badge className="bg-muted-foreground rounded absolute bottom-4 left-4">
          {calories} Kcl
        </Badge>
      </div>
    </Card>
  );
}
