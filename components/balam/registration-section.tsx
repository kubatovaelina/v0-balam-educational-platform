"use client"

import { useState } from "react"
import { CloseIcon, EyeIcon, PuzzleIcon, CheckIcon, ArrowLeftIcon } from "./custom-icons"

interface RegistrationSectionProps {
  onComplete: (mode: "vision" | "ras") => void
  onClose: () => void
}

export function RegistrationSection({ onComplete, onClose }: RegistrationSectionProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [selectedMode, setSelectedMode] = useState<"vision" | "ras" | null>(null)
  const [age, setAge] = useState(8)
  const [region, setRegion] = useState("")

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleModeSelect = (mode: "vision" | "ras") => {
    setSelectedMode(mode)
    setStep(3)
  }

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedMode) {
      onComplete(selectedMode)
    }
  }

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="p-1 hover:bg-muted rounded-full transition-colors text-foreground"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            )}
            <h2 className="text-xl font-bold text-foreground">
              {step === 1 && "Регистрация"}
              {step === 2 && "Выберите профиль"}
              {step === 3 && "Дополнительная информация"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Progress */}
        <div className="px-5 pt-5">
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Basic info */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="p-5 pt-0">
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

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Минимум 6 символов"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
            >
              Получить SMS-код
            </button>
          </form>
        )}

        {/* Step 2: Select mode */}
        {step === 2 && (
          <div className="p-5 pt-0">
            <p className="text-muted-foreground mb-6">
              Выберите профиль, который лучше всего подходит вашему ребёнку. 
              Мы адаптируем интерфейс и контент под его потребности.
            </p>

            <div className="space-y-4">
              {/* Vision mode */}
              <button
                onClick={() => handleModeSelect("vision")}
                className="w-full p-5 bg-chart-3/10 border-2 border-chart-3/30 rounded-2xl text-left hover:border-chart-3 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-chart-3/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EyeIcon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-chart-3 transition-colors">
                      Нарушение зрения
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Адаптируем контент: увеличенный шрифт, озвучка уроков, высокий контраст
                    </p>
                  </div>
                </div>
              </button>

              {/* RAS mode */}
              <button
                onClick={() => handleModeSelect("ras")}
                className="w-full p-5 bg-accent/20 border-2 border-accent/30 rounded-2xl text-left hover:border-accent transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PuzzleIcon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent-foreground transition-colors">
                      РАС / Задержка развития
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Спокойные визуалы, структурированные уроки, расписание и лайфхаки для родителей
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Additional info */}
        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="p-5 pt-0">
            <div className="space-y-6">
              {/* Age slider */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Возраст ребёнка: <span className="text-primary font-bold">{age} лет</span>
                </label>
                <input
                  type="range"
                  min={3}
                  max={18}
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 года</span>
                  <span>18 лет</span>
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Регион
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none text-foreground"
                >
                  <option value="">Выберите регион</option>
                  <option value="bishkek">Бишкек</option>
                  <option value="chuy">Чуйская область</option>
                  <option value="osh">Ош</option>
                  <option value="other">Другой</option>
                </select>
              </div>

              {/* Selected mode preview */}
              <div className={`p-4 rounded-xl ${selectedMode === "vision" ? "bg-chart-3/10" : "bg-accent/20"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckIcon className="w-5 h-5" />
                  <span className="font-medium text-foreground">
                    {selectedMode === "vision" ? "Режим для слабовидящих" : "Режим РАС"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedMode === "vision" 
                    ? "Интерфейс будет адаптирован с увеличенным шрифтом и озвучкой"
                    : "Интерфейс будет иметь спокойные тона и структурированный контент"
                  }
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
            >
              Завершить регистрацию
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
