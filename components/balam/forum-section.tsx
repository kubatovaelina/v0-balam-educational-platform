"use client"

import { useState } from "react"
import { ChatIcon, SendIcon, UserIcon } from "./custom-icons"

const forumTopics = [
  {
    id: 1,
    title: "Как вы справляетесь с истериками?",
    author: "Мария К.",
    replies: [
      { id: 1, author: "Асель Т.", text: "Мы используем технику дыхания, очень помогает успокоиться." },
      { id: 2, author: "Нургуль М.", text: "Стараемся предупредить триггеры заранее, составили список." }
    ]
  },
  {
    id: 2,
    title: "Посоветуйте логопеда в Бишкеке",
    author: "Алия Б.",
    replies: [
      { id: 1, author: "Динара С.", text: "Рекомендую Нуржана из BALAM, очень терпеливый специалист." },
      { id: 2, author: "Гульмира О.", text: "Мы ходим в центр на Манаса, там хорошая команда." },
      { id: 3, author: "Айнура К.", text: "Тоже ищем, буду следить за ответами!" }
    ]
  },
  {
    id: 3,
    title: "Первый класс с ЗПР — ваш опыт?",
    author: "Эльмира Д.",
    replies: [
      { id: 1, author: "Жанна Р.", text: "Прошли через это, главное найти понимающего учителя." },
      { id: 2, author: "Бактыгуль А.", text: "Мы выбрали инклюзивную школу, сын адаптировался за полгода." }
    ]
  }
]

export function ForumSection() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)
  const [newReplies, setNewReplies] = useState<{ [key: number]: string }>({})
  const [topicsWithReplies, setTopicsWithReplies] = useState(forumTopics)

  const handleReplyChange = (topicId: number, value: string) => {
    setNewReplies(prev => ({ ...prev, [topicId]: value }))
  }

  const handleSubmitReply = (topicId: number) => {
    const replyText = newReplies[topicId]
    if (!replyText?.trim()) return

    setTopicsWithReplies(prev => prev.map(topic => {
      if (topic.id === topicId) {
        return {
          ...topic,
          replies: [
            ...topic.replies,
            { id: topic.replies.length + 1, author: "Вы", text: replyText }
          ]
        }
      }
      return topic
    }))

    setNewReplies(prev => ({ ...prev, [topicId]: "" }))
  }

  return (
    <section id="forum" className="py-12 md:py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Форум родителей
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Делитесь опытом и получайте поддержку от других семей
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {topicsWithReplies.map((topic) => (
            <div
              key={topic.id}
              className="bg-background rounded-2xl border border-border overflow-hidden"
            >
              {/* Topic header */}
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{topic.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{topic.author}</span>
                      <span>•</span>
                      <span>{topic.replies.length} ответов</span>
                    </div>
                  </div>
                </div>
                <span className={`text-sm font-medium text-primary transition-transform ${
                  expandedTopic === topic.id ? "rotate-180" : ""
                }`}>
                  {expandedTopic === topic.id ? "Скрыть" : "Показать"}
                </span>
              </button>

              {/* Replies */}
              {expandedTopic === topic.id && (
                <div className="border-t border-border">
                  <div className="p-5 space-y-4">
                    {topic.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                          <UserIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground mb-1">{reply.author}</p>
                          <p className="text-sm text-muted-foreground">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Reply form */}
                  <div className="p-5 pt-0">
                    <div className="flex gap-3">
                      <textarea
                        value={newReplies[topic.id] || ""}
                        onChange={(e) => handleReplyChange(topic.id, e.target.value)}
                        placeholder="Ваш ответ..."
                        className="flex-1 px-4 py-3 bg-muted border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        rows={2}
                      />
                      <button
                        onClick={() => handleSubmitReply(topic.id)}
                        disabled={!newReplies[topic.id]?.trim()}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-end"
                      >
                        <SendIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
