import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface UserCardProps {
  name: string;
  avatarUrl?: string;
  role?: string;
}

export function UserCard({ name, avatarUrl = "https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Black-Boy-Retro-Charming-Avatar-47769583-1.png", role }: UserCardProps) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start">
        <h1 className="font-medium capitalize">{name}</h1>
        {role && <p className="text-muted-foreground text-sm">{role}</p>}
      </div>
    </div>
  );
}
