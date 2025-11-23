import { Message } from "@/hooks/useWeatherChat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
          isBot
            ? "bg-card/80 backdrop-blur-sm text-card-foreground rounded-tl-sm border border-border/50"
            : "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-tr-sm"
        )}
      >
        <p className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.text}
        </p>
        <time className={cn(
          "text-xs mt-1 block",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {message.timestamp.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </div>
  );
}
