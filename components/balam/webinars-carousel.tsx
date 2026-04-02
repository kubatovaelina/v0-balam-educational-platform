"use client"

import { useRef } from "react"
import { CalendarIcon, UserIcon, ArrowLeftIcon, ArrowRightIcon } from "./custom-icons"

interface WebinarsCarouselProps {
  onSelectWebinar: (webinar: any) => void
}

const webinars = [
  {
    id: 1,
    title: "Как помочь ребёнку с РАС адаптироваться в обществе",
    specialist: "Айгуль Сатыбалдиева",
    role: "Психолог",
    date: "15 апреля",
    time: "17:00",
    color: "bg-primary/10",
    borderColor: "border-primary/30"
  },
  {
    id: 2,
    title: "Развитие речи у детей с ЗПР: практические техники",
    specialist: "Нуржан Токтосунов",
    role: "Логопед",
    date: "20 апреля",
    time: "16:00",
    color: "bg-accent/20",
    borderColor: "border-accent/40"
  },
  {
    id: 3,
    title: "Зрение и обучение: адаптация материалов для слабовидящих",
    specialist: "Бермет Асанова",
    role: "Дефектолог",
    date: "25 апреля",
    time: "18:30",
    color: "bg-chart-3/20",
    borderColor: "border-chart-3/40"
  },
  {
    id: 4,
    title: "Поддержка родителей: как не выгореть",
    specialist: "Элина Джакыпова",
    role: "Психотерапевт",
    date: "2 мая",
    time: "15:00",
    color: "bg-chart-4/20",
    borderColor: "border-chart-4/40"
  },
  {
    id: 5,
    title: "Слуховые нарушения: ранняя диагностика и помощь",
    specialist: "Каныкей Маматова",
    role: "Сурдопедагог",
    date: "8 мая",
    time: "17:00",
    color: "bg-chart-5/20",
    borderColor: "border-chart-5/40"
  }
]

export function WebinarsCarousel({ onSelectWebinar }: WebinarsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="webinars" className="py-12 md:py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Вебинары
            </h2>
            <p className="text-muted-foreground">
              Бесплатные онлайн-занятия с экспертами
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
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
        >
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className={`flex-shrink-0 w-72 sm:w-80 ${webinar.color} ${webinar.borderColor} border rounded-2xl p-5 snap-start`}
            >
              <h3 className="font-bold text-foreground mb-4 leading-snug line-clamp-2">
                {webinar.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{webinar.specialist}</p>
                  <p className="text-xs text-muted-foreground">{webinar.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <CalendarIcon className="w-4 h-4" />
                <span>{webinar.date}, {webinar.time}</span>
              </div>

              <button
                onClick={() => onSelectWebinar(webinar)}
                className="w-full py-2.5 bg-card hover:bg-muted text-foreground font-medium rounded-full transition-colors border border-border"
              >
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
