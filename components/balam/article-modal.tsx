"use client"

import { useState } from "react"
import { CloseIcon, SendIcon, UserIcon, HeartIcon, BookIcon } from "./custom-icons"

interface ArticleModalProps {
  article: {
    id: number
    title: string
    description: string
    category: string
  }
  onClose: () => void
}

const articleContents: { [key: number]: string } = {
  1: `Развитие речи у детей — это процесс, который можно и нужно поддерживать дома. Вот 5 простых игр, которые помогут вашему ребёнку:

**1. «Угадай по описанию»**
Опишите предмет, не называя его. Пусть ребёнок угадает, о чём идёт речь. Это развивает словарный запас и понимание признаков предметов.

**2. «Закончи предложение»**
Начните фразу и попросите ребёнка её закончить: «Утром мы...», «Когда идёт дождь...». Это стимулирует мышление и формирование предложений.

**3. «Цепочка слов»**
Называйте слова по очереди, где каждое новое слово начинается на последнюю букву предыдущего. Отлично тренирует фонематический слух.

**4. «Расскажи историю по картинке»**
Покажите ребёнку картинку и попросите рассказать, что на ней происходит. Задавайте наводящие вопросы.

**5. «Повтори ритм»**
Прохлопайте простой ритм и попросите ребёнка повторить. Постепенно усложняйте задание. Это развивает слуховое внимание.

Занимайтесь регулярно по 10-15 минут в день, и вы заметите прогресс!`,
  2: `Разговор о диагнозе с ребёнком — важный и деликатный момент. Вот рекомендации психологов:

**Когда говорить?**
Когда ребёнок начинает задавать вопросы о своих отличиях от других детей. Обычно это происходит в возрасте 5-7 лет.

**Как говорить?**
- Используйте простые, понятные слова
- Говорите честно, но с акцентом на сильные стороны
- Объясните, что каждый человек уникален
- Подчеркните, что любите его таким, какой он есть

**Что говорить?**
«Твой мозг работает немного по-другому. Это не плохо и не хорошо — просто по-другому. Это означает, что некоторые вещи тебе даются сложнее, но зато ты можешь...»

**Чего избегать?**
- Не используйте слово «болезнь» без необходимости
- Не сравнивайте с другими детьми
- Не делайте диагноз центром личности ребёнка

Помните: ваше спокойствие и принятие — главная поддержка для ребёнка.`,
  3: `Сенсорная комната помогает детям с различными нарушениями расслабиться и получить необходимую сенсорную стимуляцию. Создать её можно и дома!

**Что понадобится:**
- Мягкое освещение (гирлянды, светодиодные ленты)
- Мягкие подушки и пуфы
- Текстуры (мягкие ткани, песок в контейнере, крупы)
- Музыкальный проигрыватель

**Зона релаксации:**
Создайте уголок с мягкими подушками, где ребёнок может отдохнуть. Добавьте утяжелённое одеяло для успокоения.

**Тактильная зона:**
Соберите корзину с предметами разных текстур: мягкие игрушки, щётки, мячики с шипами, кинетический песок.

**Световая зона:**
Используйте гирлянды или проектор звёздного неба. Мягкий свет успокаивает и создаёт уютную атмосферу.

**Звуковая зона:**
Подготовьте подборку спокойной музыки, звуков природы или белого шума.

Бюджет: от 3000 до 10000 сомов в зависимости от выбранных материалов.`
}

const defaultComments = [
  { id: 1, author: "Айгуль М.", text: "Очень полезно, спасибо!" },
  { id: 2, author: "Бакыт Т.", text: "Мы тоже через это прошли" },
  { id: 3, author: "Назгуль К.", text: "Сохранила в закладки" }
]

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [comments, setComments] = useState(defaultComments)
  const [newComment, setNewComment] = useState("")
  const [liked, setLiked] = useState(false)

  const handleAddComment = () => {
    if (!newComment.trim()) return
    
    setComments(prev => [...prev, {
      id: prev.length + 1,
      author: "Вы",
      text: newComment
    }])
    setNewComment("")
  }

  const content = articleContents[article.id] || article.description

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <BookIcon className="w-5 h-5" />
            </div>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {article.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-xl font-bold text-foreground mb-4">{article.title}</h2>
          
          <div className="prose prose-sm max-w-none text-foreground">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {paragraph.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                )}
              </p>
            ))}
          </div>

          {/* Like button */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                liked ? "bg-accent/30 text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <HeartIcon className="w-5 h-5" filled={liked} />
              <span className="text-sm font-medium">{liked ? "Понравилось" : "Нравится"}</span>
            </button>
          </div>

          {/* Comments */}
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-bold text-foreground mb-4">Комментарии ({comments.length})</h3>
            
            <div className="space-y-4 mb-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{comment.author}</p>
                    <p className="text-sm text-muted-foreground">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add comment */}
            <div className="flex gap-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Ваш комментарий..."
                className="flex-1 px-4 py-3 bg-muted border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                rows={2}
              />
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-end"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
