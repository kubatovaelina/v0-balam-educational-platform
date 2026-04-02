"use client"

import { useState } from "react"
import { LeafIcon, UserIcon, GlobeIcon, MenuIcon, CloseIcon } from "./custom-icons"

interface HeaderProps {
  isLoggedIn: boolean
  onLogin: () => void
  language: "ru" | "kg"
  onLanguageChange: (lang: "ru" | "kg") => void
}

export function Header({ isLoggedIn, onLogin, language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: language === "ru" ? "Главная" : "Башкы бет", href: "#" },
    { label: language === "ru" ? "Статьи" : "Макалалар", href: "#articles" },
    { label: language === "ru" ? "Вебинары" : "Вебинарлар", href: "#webinars" },
    { label: language === "ru" ? "Специалисты" : "Адистер", href: "#specialists" },
    { label: language === "ru" ? "Форум" : "Форум", href: "#forum" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">BALAM</span>
            <LeafIcon className="w-7 h-7" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-card rounded-full p-1">
              <button
                onClick={() => onLanguageChange("kg")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === "kg"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                КЫР
              </button>
              <button
                onClick={() => onLanguageChange("ru")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === "ru"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                РУС
              </button>
            </div>

            {/* Login button */}
            {!isLoggedIn ? (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted rounded-full text-sm font-medium text-foreground transition-colors border border-border"
              >
                <UserIcon className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {language === "ru" ? "Войти" : "Кирүү"}
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">П</span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">
                  {language === "ru" ? "Профиль" : "Профиль"}
                </span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 px-4 py-3">
              <GlobeIcon className="w-5 h-5 text-muted-foreground" />
              <div className="flex gap-2">
                <button
                  onClick={() => onLanguageChange("kg")}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    language === "kg"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  Кыргызча
                </button>
                <button
                  onClick={() => onLanguageChange("ru")}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    language === "ru"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  Русский
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
