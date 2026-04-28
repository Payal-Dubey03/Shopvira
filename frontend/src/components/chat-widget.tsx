'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Loader2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGiftChat } from '@/lib/context/ChatContext';

interface ChatWidgetProps {
  productName?: string;
  productId?: string;
  currentPage?: string;
}

export const ChatWidget = ({
  productName,
  productId,
  currentPage,
}: ChatWidgetProps) => {
  const { messages, loading, sendMessage, clearChat, isOpen, setIsOpen } =
    useGiftChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const userInput = inputValue;
    setInputValue('');

    await sendMessage(userInput, {
      currentPage,
      productId,
      productName,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickSuggestion = async (suggestion: string) => {
    setInputValue('');
    await sendMessage(suggestion, {
      currentPage,
      productId,
      productName,
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
          ?
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-screen-3/4 max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">GiftLocal Assistant 🎁</p>
            <p className="text-xs text-white text-opacity-80">Here to help!</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-3">👋</div>
            <p className="font-bold text-gray-900 mb-2">Hi! I'm your gift advisor!</p>
            <p className="text-sm text-gray-600 mb-4">
              Ask me about gifts, occasions, or product recommendations.
            </p>
            <div className="space-y-2 w-full">
              <button
                onClick={() =>
                  handleQuickSuggestion('What should I gift for a birthday?')
                }
                className="w-full text-left p-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors text-gray-700"
              >
                Birthday gift ideas
              </button>
              <button
                onClick={() =>
                  handleQuickSuggestion('What gifts are under ₹500?')
                }
                className="w-full text-left p-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors text-gray-700"
              >
                Budget-friendly options
              </button>
              <button
                onClick={() =>
                  handleQuickSuggestion('Tell me about Diwali gifting')
                }
                className="w-full text-left p-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors text-gray-700"
              >
                Festival gifting
              </button>
            </div>
          </div>
        ) : (
          <>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none border border-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === 'user'
                        ? 'text-white text-opacity-70'
                        : 'text-gray-500'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none border border-gray-200 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Suggestions (if last message from bot and has suggestions) */}
      {messages.length > 0 &&
        messages[messages.length - 1]?.sender === 'bot' &&
        !loading && (
          <div className="px-4 py-2 bg-white border-t border-gray-200 flex gap-2 overflow-x-auto pb-2">
            {['Ask a question', 'Show options', 'Help me'].map(suggestion => (
              <button
                key={suggestion}
                onClick={() => handleQuickSuggestion(suggestion)}
                className="text-xs bg-gray-100 hover:bg-purple-50 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap border border-gray-200 hover:border-purple-300 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

      {/* Input Area */}
      <div className="border-t border-gray-200 p-3 bg-white flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          disabled={loading}
        />
        <Button
          onClick={handleSendMessage}
          disabled={loading || !inputValue.trim()}
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
