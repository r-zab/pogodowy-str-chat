import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onQuickAction: (message: string) => void;
  disabled?: boolean;
}

const quickActions = [
  { label: "Pogoda w Warszawie", message: "Pogoda w Warszawie" },
  { label: "Ostrzeżenia Poznań", message: "Ostrzeżenia dla Poznania" },
  { label: "Stan wody Wisła", message: "Stan wody w Wiśle" },
];

export function QuickActions({ onQuickAction, disabled }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3 border-t bg-background/50 backdrop-blur-sm pt-3">
      {quickActions.map((action, index) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          onClick={() => onQuickAction(action.message)}
          disabled={disabled}
          className="text-xs rounded-full bg-card/50 hover:bg-card hover:scale-105 transition-all duration-300 hover:shadow-md animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
