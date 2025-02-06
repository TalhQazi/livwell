import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface HealthStatsCardProps {
  title: string;
  value: number;
  unit: string;
  status: string;
  iconSrc: string;
  chartImageSrc: string;
}

export default function HealthStatsCard({
  title,
  value,
  unit,
  status,
  iconSrc,
  chartImageSrc,
}: HealthStatsCardProps) {
  return (
    <Card className="bg-muted p-4 sm:p-6 relative lg:w-56 flex-1">
      <h1 className="text-primary font-medium text-sm mb-4 sm:mb-8">{title}</h1>

      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-medium">{value}</h1>
          <h1 className="text-primary text-sm">{unit}</h1>
        </div>

        <Image
          src={iconSrc}
          alt="icon"
          width={72}
          height={48}
          className="!w-20 h-20"
        />
      </div>
      <Image
        src={chartImageSrc}
        alt="Chart"
        width={128}
        height={32}
        className="w-full mb-4"
      />
      <h1 className="font-medium text-sm">{status}</h1>
    </Card>
  );
}
