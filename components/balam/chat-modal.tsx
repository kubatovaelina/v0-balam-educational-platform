"use client"

import { useState, useRef, useEffect } from "react"
import { CloseIcon, SendIcon, UserIcon } from "./custom-icons"

interface ChatModalProps {
  specialist: {
    id: number
    name: string
    role: string
    initials: string
    color: string
  }
  onClose: () => void
}

interface Message {
  id: number
  sender: "specialist" | "user"
  text: string
  time: string
}

export function ChatModal({ specialist, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "specialist",
      text: "Здравствуйте! Чем могу помочь?",
      time: "10:30"
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue("")

    // Simulate specialist response
    setTimeout(() => {
      const responses = [
        "Спасибо за ваш вопрос. Расскажите подробнее о ситуации.",
        "Это важный момент. Давайте обсудим это детальнее.",
        "Я понимаю вашу озабоченность. Мы можем назначить консультацию для более детального обсуждения.",
        "Хороший вопрос! Обычно в таких случаях я рекомендую..."
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "specialist",
        text: randomResponse,
        time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
      }])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl w-full max-w-md h-[600px] max-h-[90vh] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${specialist.color} rounded-full flex items-center justify-center relative`}>
              <span className="text-sm font-bold text-foreground">{specialist.initials}</span>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-card" />
            </div>
            <div>
              <p className="font-medium text-foreground">{specialist.name}</p>
              <p className="text-xs text-muted-foreground">{specialist.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
                    : "bg-muted text-foreground rounded-2xl rounded-bl-md"
                } px-4 py-2.5`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border flex-shrink-0">
          <div className="flex gap-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Напишите сообщение..."
              className="flex-1 px-4 py-3 bg-muted border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
