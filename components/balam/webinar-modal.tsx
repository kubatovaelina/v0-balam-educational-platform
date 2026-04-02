"use client"

import { useState } from "react"
import { CloseIcon, CalendarIcon, UserIcon, CheckIcon } from "./custom-icons"

interface WebinarModalProps {
  webinar: {
    id: number
    title: string
    specialist: string
    role: string
    date: string
    time: string
  }
  onClose: () => void
}

export function WebinarModal({ webinar, onClose }: WebinarModalProps) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Запись на вебинар</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <>
            {/* Webinar info */}
            <div className="p-5 border-b border-border">
              <h3 className="font-bold text-foreground mb-3">{webinar.title}</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <UserIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{webinar.specialist}</p>
                  <p className="text-xs text-muted-foreground">{webinar.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>{webinar.date}, {webinar.time}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="+996 XXX XXX XXX"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground mb-6">
              Мы отправим вам напоминание за день до вебинара
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-muted hover:bg-border text-foreground font-medium rounded-xl transition-colors"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
