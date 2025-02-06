import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Palette, Laptop, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

export function UserMenu() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuContent className="w-40">
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Appearance
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-32">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="flex items-center gap-2"
          >
            <Sun className="h-4 w-4" />
            Light
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="flex items-center gap-2"
          >
            <Moon className="h-4 w-4" />
            Dark
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="flex items-center gap-2"
          >
            <Laptop className="h-4 w-4" />
            System
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuItem
        onClick={() => toast.info("Logging out")}
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
