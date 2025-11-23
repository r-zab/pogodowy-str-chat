import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 p-4">
      <div className="flex items-center gap-2 max-w-3xl mx-auto">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Zapytaj o pogodę, ostrzeżenia lub stan wód..."
          disabled={disabled}
          className="flex-1 rounded-full bg-accent/50 backdrop-blur-sm border-border/50 focus-visible:ring-primary transition-all duration-300 focus-visible:shadow-lg"
        />
        <Button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          size="icon"
          className="rounded-full h-10 w-10 shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
