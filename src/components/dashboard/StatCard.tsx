import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  children: React.ReactNode;
}

export const StatCard = ({ icon, label, value, children }: StatCardProps) => (
  <Card className="p-6 flex flex-col justify-between">
    <div className="space-y-1 mb-4">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
      <h3 className="text-xl font-semibold ml-2">{value}</h3>
    </div>
    {children}
  </Card>
);
