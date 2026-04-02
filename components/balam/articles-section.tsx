"use client"

import { 
  SquirrelIllustration, 
  FoxIllustration, 
  ElephantIllustration, 
  PenguinIllustration, 
  StarIcon,
  BirdIcon,
  CloudIcon,
  FlowerIcon,
  OtterIllustration,
  PandaIllustration,
  BookIcon
} from "./custom-icons"

interface ArticlesSectionProps {
  onSelectArticle: (article: any) => void
}

const articles = [
  {
    id: 1,
    title: "5 игр для развития речи дома",
    description: "Простые упражнения, которые помогут развить речевые навыки вашего ребёнка в домашних условиях.",
    illustration: "squirrel",
    category: "Развитие речи"
  },
  {
    id: 2,
    title: "Как объяснить диагноз ребёнку",
    description: "Рекомендации психологов о том, как правильно и мягко объяснить ребёнку его особенности.",
    illustration: "fox",
    category: "Психология"
  },
  {
    id: 3,
    title: "Сенсорная комната своими руками",
    description: "Пошаговая инструкция по созданию сенсорного пространства дома с минимальными затратами.",
    illustration: "elephant",
    category: "Практика"
  },
  {
    id: 4,
    title: "Лайфхаки для родителей детей с РАС",
    description: "Проверенные советы от родителей, которые помогут справиться с повседневными трудностями.",
    illustration: "penguin",
    category: "РАС"
  },
  {
    id: 5,
    title: "Структурированный день при аутизме",
    description: "Как правильно организовать распорядок дня для ребёнка с расстройством аутистического спектра.",
    illustration: "star",
    category: "РАС"
  },
  {
    id: 6,
    title: "Как работает сурдоперевод",
    description: "Основы жестового языка и как его использовать при общении с детьми с нарушениями слуха.",
    illustration: "bird",
    category: "Слух"
  },
  {
    id: 7,
    title: "Гаджеты для слабовидящих детей",
    description: "Обзор современных технических средств, которые помогают детям с нарушениями зрения.",
    illustration: "cloud",
    category: "Зрение"
  },
  {
    id: 8,
    title: "Питание и концентрация внимания",
    description: "Какие продукты помогают улучшить концентрацию и когнитивные функции у детей.",
    illustration: "flower",
    category: "Здоровье"
  },
  {
    id: 9,
    title: "Как выбрать специалиста для ребёнка",
    description: "Критерии выбора логопеда, психолога или дефектолога для работы с вашим ребёнком.",
    illustration: "otter",
    category: "Советы"
  },
  {
    id: 10,
    title: "Инклюзивное образование в Кыргызстане",
    description: "Обзор возможностей инклюзивного образования и права детей с ОВЗ в нашей стране.",
    illustration: "panda",
    category: "Образование"
  }
]

function getIllustration(type: string) {
  switch (type) {
    case "squirrel":
      return <SquirrelIllustration className="w-24 h-24" />
    case "fox":
      return <FoxIllustration className="w-24 h-24" />
    case "elephant":
      return <ElephantIllustration className="w-24 h-24" />
    case "penguin":
      return <PenguinIllustration className="w-24 h-24" />
    case "star":
      return (
        <div className="w-24 h-24 flex items-center justify-center">
          <StarIcon className="w-16 h-16" filled />
        </div>
      )
    case "bird":
      return (
        <div className="w-24 h-24 flex items-center justify-center bg-muted/50 rounded-full">
          <BirdIcon className="w-16 h-10" />
        </div>
      )
    case "cloud":
      return (
        <div className="w-24 h-24 flex items-center justify-center">
          <CloudIcon className="w-20 h-16" />
        </div>
      )
    case "flower":
      return (
        <div className="w-24 h-24 flex items-center justify-center">
          <FlowerIcon className="w-16 h-16" />
        </div>
      )
    case "otter":
      return <OtterIllustration className="w-24 h-24" />
    case "panda":
      return <PandaIllustration className="w-24 h-24" />
    default:
      return (
        <div className="w-24 h-24 flex items-center justify-center">
          <BookIcon className="w-12 h-12" />
        </div>
      )
  }
}

export function ArticlesSection({ onSelectArticle }: ArticlesSectionProps) {
  return (
    <section id="articles" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Полезные статьи
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Материалы от специалистов и опыт других родителей
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-card rounded-2xl p-5 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer"
              onClick={() => onSelectArticle(article)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getIllustration(article.illustration)}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">5 мин чтения</span>
                <span className="text-sm font-medium text-primary group-hover:underline">
                  Читать
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
