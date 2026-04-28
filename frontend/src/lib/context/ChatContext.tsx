'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import { useChat } from '../hooks/useChat';

interface ChatContextType {
  messages: any[];
  loading: boolean;
  error: string | null;
  sendMessage: (message: string, context?: any) => Promise<any>;
  clearChat: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const chat = useChat();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        ...chat,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useGiftChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useGiftChat must be used within ChatProvider');
  }
  return context;
};
