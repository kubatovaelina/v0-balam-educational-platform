"use client"

import { useRef } from "react"
import { StarIcon, ChatIcon, ArrowLeftIcon, ArrowRightIcon } from "./custom-icons"

interface SpecialistsSectionProps {
  onSelectSpecialist: (specialist: any) => void
}

const specialists = [
  {
    id: 1,
    name: "Айгуль Сатыбалдиева",
    role: "Детский психолог",
    rating: 4.9,
    status: "online",
    color: "bg-primary/20",
    initials: "АС"
  },
  {
    id: 2,
    name: "Нуржан Токтосунов",
    role: "Логопед",
    rating: 4.8,
    status: "online",
    color: "bg-accent/30",
    initials: "НТ"
  },
  {
    id: 3,
    name: "Бермет Асанова",
    role: "Дефектолог",
    rating: 5.0,
    status: "busy",
    color: "bg-chart-3/30",
    initials: "БА"
  },
  {
    id: 4,
    name: "Каныкей Маматова",
    role: "Сурдопедагог",
    rating: 4.7,
    status: "online",
    color: "bg-chart-4/30",
    initials: "КМ"
  }
]

export function SpecialistsSection({ onSelectSpecialist }: SpecialistsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="specialists" className="py-12 md:py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Наши специалисты
            </h2>
            <p className="text-muted-foreground">
              Консультации с опытными профессионалами онлайн
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-muted hover:bg-border transition-colors text-foreground"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-muted hover:bg-border transition-colors text-foreground"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="flex-shrink-0 w-64 bg-background rounded-2xl p-5 border border-border snap-start"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 ${specialist.color} rounded-full flex items-center justify-center relative`}>
                  <span className="text-2xl font-bold text-foreground">
                    {specialist.initials}
                  </span>
                  {/* Status indicator */}
                  <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-background ${
                    specialist.status === "online" ? "bg-primary" : "bg-muted-foreground"
                  }`} />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-foreground mb-1">{specialist.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{specialist.role}</p>
                
                {/* Rating */}
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full">
                  <StarIcon className="w-4 h-4" filled />
                  <span className="text-sm font-medium text-foreground">{specialist.rating}</span>
                </div>
              </div>

              {/* Status text */}
              <p className={`text-center text-sm mb-4 ${
                specialist.status === "online" ? "text-primary" : "text-muted-foreground"
              }`}>
                {specialist.status === "online" ? "Онлайн" : "Занята"}
              </p>

              {/* Action button */}
              <button
                onClick={() => onSelectSpecialist(specialist)}
                className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <ChatIcon className="w-4 h-4" />
                Написать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
