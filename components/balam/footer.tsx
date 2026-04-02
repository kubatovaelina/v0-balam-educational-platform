"use client"

import { LeafIcon, BirdIcon, CloudsDecoration } from "./custom-icons"

export function Footer() {
  return (
    <footer className="relative bg-secondary border-t border-border">
      {/* Decorative clouds */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none opacity-50">
        <CloudsDecoration className="w-full h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-foreground">BALAM</span>
              <LeafIcon className="w-7 h-7" />
            </a>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Образовательная платформа для детей с особыми потребностями в Кыргызстане. 
              Мы помогаем семьям на пути развития их детей.
            </p>
            
            {/* Birds decoration */}
            <BirdIcon className="w-24 h-8 opacity-50" />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Платформа</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Статьи
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Вебинары
                </a>
              </li>
              <li>
                <a href="#specialists" className="text-muted-foreground hover:text-foreground transition-colors">
                  Специалисты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>г. Бишкек, Кыргызстан</li>
              <li>
                <a href="mailto:info@balam.kg" className="hover:text-foreground transition-colors">
                  info@balam.kg
                </a>
              </li>
              <li>
                <a href="tel:+996555123456" className="hover:text-foreground transition-colors">
                  +996 555 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BALAM. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
