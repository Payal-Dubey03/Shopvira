import { useState } from 'react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatResponse {
  reply: string;
  suggestions?: string[];
  relatedProducts?: Array<{
    productId: string;
    name: string;
    price: number;
  }>;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (
    userMessage: string,
    context?: {
      currentPage?: string;
      productId?: string;
      productName?: string;
    }
  ): Promise<ChatResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      // Add user message to chat
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        text: userMessage,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMsg]);

      // Send to backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/chatbot/message`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage,
            context: {
              ...context,
              userQuery: userMessage,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data: ChatResponse = await response.json();

      // Add bot message to chat
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);

      return data;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMsg);
      console.error('Chat error:', err);

      // Add error message to chat
      const errorBotMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble thinking right now. Could you try again? 🙏",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorBotMsg]);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat,
  };
};
