import { useWeatherChat } from "@/hooks/useWeatherChat";
import { MessageList } from "@/components/chat/MessageList";
import { ChatInput } from "@/components/chat/ChatInput";
import { QuickActions } from "@/components/chat/QuickActions";
import { Card } from "@/components/ui/card";
import { Shield, Sun, Cloud } from "lucide-react";

const Index = () => {
  const { messages, isLoading, sendMessage, messagesEndRef } = useWeatherChat();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent scale-110 animate-gradient-shift" />
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-primary/20 to-secondary/40 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent animate-gradient-shift [animation-delay:-4s]" />
      
      {/* Flowing animated orbs */}
      <div className="absolute top-10 left-5 w-80 h-80 bg-primary/30 animate-float" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/20 animate-float-delayed" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-primary/25 animate-float [animation-delay:-2s]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/30 animate-float-delayed [animation-delay:-3s]" />
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-primary/20 animate-float [animation-delay:-4s]" />

      <div className="w-full max-w-2xl flex flex-col h-[90vh] max-h-[800px] relative z-10">
        {/* Header */}
        <header className="text-center py-6 px-4 animate-fade-in bg-card/60 backdrop-blur-xl rounded-2xl shadow-2xl mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-xl shadow-lg relative">
              <Shield className="w-12 h-12 text-primary drop-shadow-2xl animate-float" />
              <Sun className="w-5 h-5 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
              <Cloud className="w-4 h-4 text-muted-foreground absolute -bottom-1 -left-1" />
            </div>
            <h1 className="text-3xl font-bold text-foreground drop-shadow-lg">
              Pogodowy Stróż
            </h1>
          </div>
          <p className="text-sm text-foreground/90 font-medium animate-fade-in [animation-delay:0.2s] drop-shadow-md">
            Twoje centrum informacji meteo i hydro
          </p>
        </header>

        {/* Chat Container */}
        <Card className="flex-1 flex flex-col overflow-hidden shadow-2xl border-border/50 bg-card/80 backdrop-blur-xl animate-scale-in">
          <MessageList 
            messages={messages} 
            isLoading={isLoading} 
            messagesEndRef={messagesEndRef}
          />
          <QuickActions 
            onQuickAction={sendMessage} 
            disabled={isLoading}
          />
          <ChatInput 
            onSend={sendMessage} 
            disabled={isLoading}
          />
        </Card>

        {/* Footer hint */}
        <p className="text-xs text-center text-white drop-shadow-md mt-4 animate-fade-in [animation-delay:0.5s]">
          Projekt © SIWB 2025
        </p>
      </div>
    </div>
  );
};

export default Index;
