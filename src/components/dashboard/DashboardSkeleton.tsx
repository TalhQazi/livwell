import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const ActivityCardSkeleton = () => (
  <Card className="bg-muted p-4 h-36 relative">
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-6 w-24" />
      </div>
      <Skeleton className="h-11 w-11 rounded-full" />
    </div>
    <Skeleton className="h-6 w-20 absolute bottom-4 left-4 rounded-full" />
  </Card>
);

export const HealthStatsSkeleton = () => (
  <Card className="bg-muted p-4 sm:p-6 relative lg:w-56 flex-1">
    <Skeleton className="h-4 w-24 mb-8" />
    <div className="flex items-center justify-between mb-8">
      <div className="space-y-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-20 w-20" />
    </div>
    <Skeleton className="h-8 w-full mb-4" />
    <Skeleton className="h-4 w-20" />
  </Card>
);

export const WalkActivitySkeleton = () => (
  <Card className="bg-[#71DDB1] relative">
    <div className="p-6 space-y-16">
      <div className="flex gap-1">
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export function ActivityTrackingContainerSkeleton() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-24 mt-1" />
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function HealthStatsCardContainerSkeleton() {
  return (
    <Card className="flex lg:flex-col gap-6 bg-background p-6 w-auto">
      <Skeleton className="lg:w-56 flex-1" />
      <Skeleton className="lg:w-56 flex-1" />
    </Card>
  );
}
