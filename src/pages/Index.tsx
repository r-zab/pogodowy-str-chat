import { useWeatherChat } from "@/hooks/useWeatherChat";
import { MessageList } from "@/components/chat/MessageList";
import { ChatInput } from "@/components/chat/ChatInput";
import { QuickActions } from "@/components/chat/QuickActions";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import weatherShield from "@/assets/weather-shield.png";
import weatherBg from "@/assets/weather-bg.jpg";

const Index = () => {
  const { messages, isLoading, sendMessage, messagesEndRef } = useWeatherChat();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weatherBg})` }}
      />
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-transparent to-primary/30 animate-gradient-shift" />
      
      {/* Floating orbs for decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="w-full max-w-2xl flex flex-col h-[90vh] max-h-[800px] relative z-10">
        {/* Header */}
        <header className="text-center py-6 px-4 animate-fade-in bg-card/60 backdrop-blur-xl rounded-2xl shadow-2xl mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-xl shadow-lg">
              <img 
                src={weatherShield} 
                alt="Weather Shield" 
                className="w-12 h-12 drop-shadow-2xl animate-float"
              />
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
