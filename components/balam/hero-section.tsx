"use client"

import { PandaIllustration, PlayIcon, StarIcon, CloudsDecoration, MeadowIllustration } from "./custom-icons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Clouds decoration */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <CloudsDecoration className="w-full h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-20 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/30 rounded-full mb-6">
              <StarIcon className="w-4 h-4" filled />
              <span className="text-sm font-medium text-accent-foreground">
                Для особенных детей
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Развиваем особенных детей{" "}
              <span className="text-primary">вместе</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Персонализированное обучение для детей с ОВЗ в Кыргызстане. 
              Поддержка специалистов, уроки и сообщество родителей.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-colors shadow-lg shadow-primary/20">
                Начать бесплатно
              </button>
              <button className="px-8 py-3 bg-card hover:bg-muted text-foreground rounded-full font-semibold transition-colors border border-border">
                Узнать больше
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Семей</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Специалистов</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Уроков</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative flex justify-center">
            {/* Main illustration */}
            <div className="relative">
              <PandaIllustration className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
              
              {/* Video placeholder */}
              <div className="absolute -bottom-4 -left-4 sm:left-auto sm:-right-8 sm:bottom-8 bg-card rounded-2xl shadow-xl border border-border p-4 w-48 sm:w-56">
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-card/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <PlayIcon className="w-10 h-10" />
                    </div>
                  </div>
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20"></div>
                </div>
                <p className="text-sm font-medium text-foreground">Истории семей</p>
                <p className="text-xs text-muted-foreground">Реальный опыт родителей</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meadow decoration */}
      <div className="relative -mt-4">
        <MeadowIllustration className="w-full h-24 md:h-32" />
      </div>
    </section>
  )
}
