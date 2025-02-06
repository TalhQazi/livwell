import { RunningIcon } from "@/assets";
import { Card, CardContent } from "@/components/ui/card";
import { IWalkActivityData } from "@/types/dashboard";
import Image from "next/image";
import React from "react";
import { WalkActivitySkeleton } from "./DashboardSkeleton";

interface WalkActivityCardProps {
  isLoading: boolean;
  data?: IWalkActivityData;
}

export default function WalkActivityCard({
  isLoading,
  data,
}: WalkActivityCardProps) {
  if (isLoading) {
    return <WalkActivitySkeleton />;
  }

  return (
    <Card className="bg-[#71DDB1] relative">
      <Image
        src={"/dashboard/rectangle.png"}
        alt=" "
        width={96}
        height={96}
        className="absolute top-0 right-0"
      />
      <CardContent className="space-y-24 p-8">
        <div className="flex gap-1">
          <Image
            src={"/dashboard/sunBehindCloud.png"}
            alt="Sun"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-semibold text-secondary">
            Morning Walk
          </h1>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-secondary">
            <RunningIcon />
            <div>
              <p className="text-sm">Running</p>
              <p className="font-semibold">{data?.calories} Col</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <RunningIcon />
            <div>
              <p className="text-sm">Duration</p>
              <p className="font-semibold">{data?.duration}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
