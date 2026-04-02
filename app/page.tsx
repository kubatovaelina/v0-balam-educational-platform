"use client"

import { useState } from "react"
import { Header } from "@/components/balam/header"
import { HeroSection } from "@/components/balam/hero-section"
import { WebinarsCarousel } from "@/components/balam/webinars-carousel"
import { ArticlesSection } from "@/components/balam/articles-section"
import { SpecialistsSection } from "@/components/balam/specialists-section"
import { RegistrationSection } from "@/components/balam/registration-section"
import { PersonalCabinet } from "@/components/balam/personal-cabinet"
import { ForumSection } from "@/components/balam/forum-section"
import { Footer } from "@/components/balam/footer"
import { WebinarModal } from "@/components/balam/webinar-modal"
import { ChatModal } from "@/components/balam/chat-modal"
import { ArticleModal } from "@/components/balam/article-modal"

export default function BalamPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [userMode, setUserMode] = useState<"normal" | "vision" | "ras">("normal")
  const [childMode, setChildMode] = useState(false)
  const [language, setLanguage] = useState<"ru" | "kg">("ru")
  
  // Modal states
  const [selectedWebinar, setSelectedWebinar] = useState<any>(null)
  const [selectedSpecialist, setSelectedSpecialist] = useState<any>(null)
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const handleLogin = () => {
    setShowRegistration(true)
  }

  const handleRegistrationComplete = (mode: "vision" | "ras") => {
    setUserMode(mode)
    setIsLoggedIn(true)
    setShowRegistration(false)
  }

  const bodyStyles = {
    fontSize: userMode === "vision" ? "18px" : childMode ? "20px" : "16px",
    backgroundColor: userMode === "ras" || childMode ? "#fff9ee" : "#fffff4",
  }

  return (
    <div style={bodyStyles} className="min-h-screen transition-all duration-300">
      <Header 
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      {(userMode === "ras" || childMode) && (
        <div className="bg-accent/30 text-center py-2 text-sm font-medium text-accent-foreground">
          {childMode ? "Детский режим активен" : "Режим РАС активен"}
        </div>
      )}

      <main>
        <HeroSection />
        
        <WebinarsCarousel onSelectWebinar={setSelectedWebinar} />
        
        <ArticlesSection onSelectArticle={setSelectedArticle} />
        
        <SpecialistsSection onSelectSpecialist={setSelectedSpecialist} />
        
        {showRegistration && (
          <RegistrationSection 
            onComplete={handleRegistrationComplete}
            onClose={() => setShowRegistration(false)}
          />
        )}
        
        {isLoggedIn && (
          <PersonalCabinet 
            childMode={childMode}
            onToggleChildMode={() => setChildMode(!childMode)}
          />
        )}
        
        <ForumSection />
      </main>

      <Footer />

      {/* Modals */}
      {selectedWebinar && (
        <WebinarModal 
          webinar={selectedWebinar} 
          onClose={() => setSelectedWebinar(null)} 
        />
      )}
      
      {selectedSpecialist && (
        <ChatModal 
          specialist={selectedSpecialist} 
          onClose={() => setSelectedSpecialist(null)} 
        />
      )}
      
      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  )
}
