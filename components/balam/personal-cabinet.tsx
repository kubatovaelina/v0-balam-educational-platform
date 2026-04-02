"use client"

import { useState } from "react"
import { ChartIcon, BookIcon, ChatIcon, UserIcon, ChildIcon, StarIcon, CheckIcon } from "./custom-icons"

interface PersonalCabinetProps {
  childMode: boolean
  onToggleChildMode: () => void
}

const tabs = [
  { id: "progress", label: "Прогресс", icon: ChartIcon },
  { id: "lessons", label: "Уроки", icon: BookIcon },
  { id: "consultations", label: "Консультации", icon: ChatIcon },
  { id: "forum", label: "Форум", icon: UserIcon }
]

const lessons = [
  { id: 1, title: "Пазл слов", stars: 3, completed: true, color: "bg-primary/20" },
  { id: 2, title: "Найди пару", stars: 2, completed: true, color: "bg-accent/20" },
  { id: 3, title: "Звуковая игра", stars: 1, completed: false, color: "bg-chart-3/20" }
]

const progressData = [
  { label: "Урок 1", percent: 100 },
  { label: "Урок 2", percent: 80 },
  { label: "Урок 3", percent: 60 },
  { label: "Урок 4", percent: 40 },
  { label: "Урок 5", percent: 20 }
]

const specialists = [
  { id: 1, name: "Айгуль С.", role: "Психолог", available: true },
  { id: 2, name: "Нуржан Т.", role: "Логопед", available: true },
  { id: 3, name: "Бермет А.", role: "Дефектолог", available: false }
]

const forumTopics = [
  { id: 1, title: "Как выбрать школу?", replies: 12 },
  { id: 2, title: "Опыт с логопедом", replies: 8 },
  { id: 3, title: "Игры для развития", replies: 15 }
]

export function PersonalCabinet({ childMode, onToggleChildMode }: PersonalCabinetProps) {
  const [activeTab, setActiveTab] = useState("progress")

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Личный кабинет
            </h2>
            <p className="text-muted-foreground">
              Управляйте обучением вашего ребёнка
            </p>
          </div>

          {/* Child mode toggle */}
          <button
            onClick={onToggleChildMode}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
              childMode
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <ChildIcon className="w-5 h-5" />
            {childMode ? "Вернуться в кабинет родителя" : "Детский режим"}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          {/* Progress tab */}
          {activeTab === "progress" && (
            <div>
              <h3 className="font-bold text-foreground mb-6">Прогресс обучения</h3>
              <div className="space-y-4">
                {progressData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-16">{item.label}</span>
                    <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground w-12 text-right">
                      {item.percent}%
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <ChartIcon className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-foreground">Отличный прогресс!</p>
                    <p className="text-sm text-muted-foreground">
                      Ваш ребёнок завершил 60% всех уроков
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lessons tab */}
          {activeTab === "lessons" && (
            <div>
              <h3 className="font-bold text-foreground mb-6">Игровые уроки</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`${lesson.color} rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`font-bold ${childMode ? "text-xl" : "text-base"} text-foreground`}>
                        {lesson.title}
                      </h4>
                      {lesson.completed && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <CheckIcon className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((star) => (
                        <StarIcon
                          key={star}
                          className="w-5 h-5"
                          filled={star <= lesson.stars}
                        />
                      ))}
                    </div>
                    <button className="w-full mt-4 py-2 bg-card hover:bg-muted text-foreground font-medium rounded-lg transition-colors">
                      {lesson.completed ? "Повторить" : "Начать"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultations tab */}
          {activeTab === "consultations" && (
            <div>
              <h3 className="font-bold text-foreground mb-6">Записаться на консультацию</h3>
              <div className="space-y-3">
                {specialists.map((specialist) => (
                  <div
                    key={specialist.id}
                    className="flex items-center justify-between p-4 bg-muted rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{specialist.name}</p>
                        <p className="text-sm text-muted-foreground">{specialist.role}</p>
                      </div>
                    </div>
                    <button
                      disabled={!specialist.available}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        specialist.available
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-border text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      {specialist.available ? "Записаться" : "Недоступен"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Forum tab */}
          {activeTab === "forum" && (
            <div>
              <h3 className="font-bold text-foreground mb-6">Активные темы</h3>
              <div className="space-y-3">
                {forumTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-border/50 cursor-pointer transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{topic.title}</p>
                      <p className="text-sm text-muted-foreground">{topic.replies} ответов</p>
                    </div>
                    <span className="text-sm font-medium text-primary">Открыть</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
