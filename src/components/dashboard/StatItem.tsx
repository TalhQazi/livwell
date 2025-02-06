interface StatItemProps {
  value: number;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-lg font-medium">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);
