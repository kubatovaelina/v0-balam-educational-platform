// Custom hand-drawn style SVG icons for BALAM
// No emojis, no standard icons - all custom illustrations

export function LeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 4C16 4 8 8 6 16C4 24 8 28 16 28C16 28 16 20 16 16C16 12 20 8 24 6C20 6 16 4 16 4Z" 
        fill="#7cb97c" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 28C16 20 16 16 16 12" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M12 18C14 16 16 15 16 15" 
        stroke="#5a9a5a" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
      <path 
        d="M20 14C18 15 16 16 16 16" 
        stroke="#5a9a5a" 
        strokeWidth="1" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StarIcon({ className = "w-6 h-6", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 4L19.5 12.5L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12.5 12.5L16 4Z" 
        fill={filled ? "#f5c4a1" : "none"}
        stroke="#e5a881" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#e8e5dc" strokeWidth="2"/>
      <path 
        d="M20 16L32 24L20 32V16Z" 
        fill="#7cb97c" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CloudIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="20" rx="16" ry="10" fill="#ffffff" opacity="0.9"/>
      <ellipse cx="14" cy="18" rx="10" ry="8" fill="#ffffff" opacity="0.9"/>
      <ellipse cx="34" cy="18" rx="10" ry="8" fill="#ffffff" opacity="0.9"/>
      <ellipse cx="20" cy="14" rx="8" ry="6" fill="#ffffff" opacity="0.9"/>
      <ellipse cx="30" cy="14" rx="8" ry="6" fill="#ffffff" opacity="0.9"/>
    </svg>
  )
}

export function FlowerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="14" r="4" fill="#f5e6a3"/>
      <ellipse cx="16" cy="6" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1"/>
      <ellipse cx="22" cy="10" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1" transform="rotate(60 22 10)"/>
      <ellipse cx="22" cy="18" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1" transform="rotate(120 22 18)"/>
      <ellipse cx="16" cy="22" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1" transform="rotate(180 16 22)"/>
      <ellipse cx="10" cy="18" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1" transform="rotate(240 10 18)"/>
      <ellipse cx="10" cy="10" rx="3" ry="4" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1" transform="rotate(300 10 10)"/>
      <path d="M16 22V30" stroke="#7cb97c" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function BirdIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4 12C4 12 12 4 20 8C28 12 36 8 36 8" 
        stroke="#4a4a4a" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M8 16C8 16 14 10 20 13C26 16 32 12 32 12" 
        stroke="#737373" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function HeartIcon({ className = "w-6 h-6", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 28C16 28 4 20 4 12C4 8 7 4 11 4C13.5 4 15.5 5.5 16 7C16.5 5.5 18.5 4 21 4C25 4 28 8 28 12C28 20 16 28 16 28Z" 
        fill={filled ? "#f5c4a1" : "none"}
        stroke="#e5a881" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SendIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4 16L28 4L20 28L16 18L4 16Z" 
        fill="#7cb97c" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 18L28 4" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M8 8L24 24M24 8L8 24" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4 6C4 6 8 4 16 4C24 4 28 6 28 6V26C28 26 24 24 16 24C8 24 4 26 4 26V6Z" 
        fill="#fffff4" 
        stroke="#e8e5dc" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M16 4V24" stroke="#e8e5dc" strokeWidth="2"/>
      <path d="M8 10H12" stroke="#7cb97c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14H14" stroke="#7cb97c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10H24" stroke="#7cb97c" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 14H24" stroke="#7cb97c" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function UserIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="6" fill="#f5c4a1" stroke="#e5a881" strokeWidth="1.5"/>
      <path 
        d="M6 28C6 22 10 18 16 18C22 18 26 22 26 28" 
        fill="#7cb97c" 
        stroke="#5a9a5a" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="24" height="22" rx="3" fill="#ffffff" stroke="#e8e5dc" strokeWidth="2"/>
      <path d="M4 12H28" stroke="#e8e5dc" strokeWidth="2"/>
      <path d="M10 4V8" stroke="#7cb97c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 4V8" stroke="#7cb97c" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="10" cy="18" r="2" fill="#f5c4a1"/>
      <circle cx="16" cy="18" r="2" fill="#7cb97c"/>
      <circle cx="22" cy="18" r="2" fill="#a8d4e6"/>
      <circle cx="10" cy="24" r="2" fill="#a8d4e6"/>
      <circle cx="16" cy="24" r="2" fill="#f5c4a1"/>
    </svg>
  )
}

export function ChatIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4 8C4 6 6 4 8 4H24C26 4 28 6 28 8V18C28 20 26 22 24 22H12L6 28V22H8C6 22 4 20 4 18V8Z" 
        fill="#ffffff" 
        stroke="#e8e5dc" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M10 11H22" stroke="#7cb97c" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 15H18" stroke="#f5c4a1" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function EyeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M2 16C2 16 7 8 16 8C25 8 30 16 30 16C30 16 25 24 16 24C7 24 2 16 2 16Z" 
        fill="#fffff4" 
        stroke="#7cb97c" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="4" fill="#7cb97c" stroke="#5a9a5a" strokeWidth="1.5"/>
      <circle cx="17" cy="15" r="1.5" fill="#ffffff"/>
    </svg>
  )
}

export function PuzzleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M14 4H18V6C18 7.5 19.5 8 20 8C20.5 8 22 7.5 22 6V4H26C27 4 28 5 28 6V10H26C24.5 10 24 11.5 24 12C24 12.5 24.5 14 26 14H28V18C28 19 27 20 26 20H22V18C22 16.5 20.5 16 20 16C19.5 16 18 16.5 18 18V20H14V18C14 16.5 12.5 16 12 16C11.5 16 10 16.5 10 18V20H6C5 20 4 19 4 18V14H6C7.5 14 8 12.5 8 12C8 11.5 7.5 10 6 10H4V6C4 5 5 4 6 4H10V6C10 7.5 11.5 8 12 8C12.5 8 14 7.5 14 6V4Z" 
        fill="#a8d4e6" 
        stroke="#88b4c6" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="18" width="6" height="10" rx="1" fill="#7cb97c"/>
      <rect x="13" y="12" width="6" height="16" rx="1" fill="#f5c4a1"/>
      <rect x="22" y="6" width="6" height="22" rx="1" fill="#a8d4e6"/>
      <path d="M2 28H30" stroke="#e8e5dc" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#fffff4" stroke="#7cb97c" strokeWidth="2"/>
      <ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="#7cb97c" strokeWidth="1.5"/>
      <path d="M4 16H28" stroke="#7cb97c" strokeWidth="1.5"/>
      <path d="M6 10H26" stroke="#7cb97c" strokeWidth="1"/>
      <path d="M6 22H26" stroke="#7cb97c" strokeWidth="1"/>
    </svg>
  )
}

export function ChildIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="6" fill="#f5c4a1" stroke="#e5a881" strokeWidth="1.5"/>
      <circle cx="14" cy="9" r="1" fill="#4a4a4a"/>
      <circle cx="18" cy="9" r="1" fill="#4a4a4a"/>
      <path d="M14 12C14 12 15 13 16 13C17 13 18 12 18 12" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round"/>
      <path 
        d="M10 28V20C10 18 12 16 16 16C20 16 22 18 22 20V28" 
        fill="#7cb97c" 
        stroke="#5a9a5a" 
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function CheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M6 16L13 23L26 10" 
        stroke="#7cb97c" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowLeftIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 8L12 16L20 24" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowRightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 8L20 16L12 24" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M6 16H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M6 22H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

// Animal Illustration Placeholders with custom soft watercolor style
export function PandaIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="60" cy="60" r="55" fill="#f5f5f0" opacity="0.5"/>
      
      {/* Main panda body */}
      <ellipse cx="60" cy="70" rx="35" ry="30" fill="#ffffff" stroke="#e8e5dc" strokeWidth="2"/>
      
      {/* Panda head */}
      <circle cx="60" cy="45" r="28" fill="#ffffff" stroke="#e8e5dc" strokeWidth="2"/>
      
      {/* Ears */}
      <circle cx="38" cy="25" r="10" fill="#4a4a4a"/>
      <circle cx="82" cy="25" r="10" fill="#4a4a4a"/>
      
      {/* Eye patches */}
      <ellipse cx="48" cy="42" rx="10" ry="8" fill="#4a4a4a"/>
      <ellipse cx="72" cy="42" rx="10" ry="8" fill="#4a4a4a"/>
      
      {/* Eyes */}
      <circle cx="48" cy="42" r="4" fill="#ffffff"/>
      <circle cx="72" cy="42" r="4" fill="#ffffff"/>
      <circle cx="49" cy="41" r="2" fill="#4a4a4a"/>
      <circle cx="73" cy="41" r="2" fill="#4a4a4a"/>
      
      {/* Nose */}
      <ellipse cx="60" cy="52" rx="4" ry="3" fill="#4a4a4a"/>
      
      {/* Mouth */}
      <path d="M55 56C55 56 58 59 60 59C62 59 65 56 65 56" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      
      {/* Baby panda */}
      <circle cx="85" cy="85" r="15" fill="#ffffff" stroke="#e8e5dc" strokeWidth="1.5"/>
      <circle cx="80" cy="77" r="5" fill="#4a4a4a"/>
      <circle cx="90" cy="77" r="5" fill="#4a4a4a"/>
      <ellipse cx="82" cy="84" rx="4" ry="3" fill="#4a4a4a"/>
      <ellipse cx="88" cy="84" rx="4" ry="3" fill="#4a4a4a"/>
      <circle cx="82" cy="84" r="2" fill="#ffffff"/>
      <circle cx="88" cy="84" r="2" fill="#ffffff"/>
      <ellipse cx="85" cy="89" rx="2" ry="1.5" fill="#4a4a4a"/>
      
      {/* Bamboo accent */}
      <rect x="10" y="50" width="4" height="50" rx="2" fill="#7cb97c" opacity="0.6"/>
      <rect x="10" y="60" width="4" height="2" fill="#5a9a5a" opacity="0.6"/>
      <rect x="10" y="75" width="4" height="2" fill="#5a9a5a" opacity="0.6"/>
      <rect x="10" y="90" width="4" height="2" fill="#5a9a5a" opacity="0.6"/>
    </svg>
  )
}

export function FoxIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#fff9ee" opacity="0.5"/>
      
      {/* Fox body */}
      <ellipse cx="60" cy="75" rx="30" ry="25" fill="#f5c4a1"/>
      
      {/* Fox head */}
      <ellipse cx="60" cy="45" rx="25" ry="22" fill="#f5c4a1"/>
      
      {/* Ears */}
      <path d="M40 25L35 45L50 40Z" fill="#f5c4a1" stroke="#e5a881" strokeWidth="1"/>
      <path d="M80 25L85 45L70 40Z" fill="#f5c4a1" stroke="#e5a881" strokeWidth="1"/>
      <path d="M42 30L38 42L48 39Z" fill="#ffffff"/>
      <path d="M78 30L82 42L72 39Z" fill="#ffffff"/>
      
      {/* White face patch */}
      <ellipse cx="60" cy="52" rx="15" ry="12" fill="#ffffff"/>
      
      {/* Eyes */}
      <ellipse cx="50" cy="42" rx="4" ry="5" fill="#4a4a4a"/>
      <ellipse cx="70" cy="42" rx="4" ry="5" fill="#4a4a4a"/>
      <circle cx="51" cy="41" r="1.5" fill="#ffffff"/>
      <circle cx="71" cy="41" r="1.5" fill="#ffffff"/>
      
      {/* Nose */}
      <ellipse cx="60" cy="55" rx="4" ry="3" fill="#4a4a4a"/>
      
      {/* Mouth */}
      <path d="M56 58L60 62L64 58" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      
      {/* Baby fox */}
      <ellipse cx="85" cy="90" rx="12" ry="10" fill="#f5c4a1"/>
      <ellipse cx="85" cy="80" rx="10" ry="9" fill="#f5c4a1"/>
      <path d="M78 72L76 82L82 79Z" fill="#f5c4a1"/>
      <path d="M92 72L94 82L88 79Z" fill="#f5c4a1"/>
      <ellipse cx="85" cy="84" rx="6" ry="5" fill="#ffffff"/>
      <circle cx="82" cy="79" r="2" fill="#4a4a4a"/>
      <circle cx="88" cy="79" r="2" fill="#4a4a4a"/>
      <ellipse cx="85" cy="85" rx="2" ry="1.5" fill="#4a4a4a"/>
      
      {/* Tail */}
      <ellipse cx="25" cy="85" rx="15" ry="8" fill="#f5c4a1" transform="rotate(-30 25 85)"/>
      <ellipse cx="18" cy="88" rx="5" ry="4" fill="#ffffff" transform="rotate(-30 18 88)"/>
    </svg>
  )
}

export function PenguinIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#e8f4f8" opacity="0.5"/>
      
      {/* Penguin body */}
      <ellipse cx="60" cy="70" rx="28" ry="35" fill="#4a4a4a"/>
      
      {/* White belly */}
      <ellipse cx="60" cy="75" rx="18" ry="25" fill="#ffffff"/>
      
      {/* Head */}
      <circle cx="60" cy="35" r="22" fill="#4a4a4a"/>
      
      {/* White face patch */}
      <ellipse cx="60" cy="40" rx="12" ry="10" fill="#ffffff"/>
      
      {/* Eyes */}
      <circle cx="52" cy="35" r="4" fill="#ffffff"/>
      <circle cx="68" cy="35" r="4" fill="#ffffff"/>
      <circle cx="53" cy="35" r="2" fill="#4a4a4a"/>
      <circle cx="69" cy="35" r="2" fill="#4a4a4a"/>
      
      {/* Beak */}
      <path d="M55 45L60 52L65 45Z" fill="#f5c4a1"/>
      
      {/* Wings */}
      <ellipse cx="30" cy="65" rx="8" ry="20" fill="#4a4a4a" transform="rotate(-15 30 65)"/>
      <ellipse cx="90" cy="65" rx="8" ry="20" fill="#4a4a4a" transform="rotate(15 90 65)"/>
      
      {/* Feet */}
      <ellipse cx="50" cy="102" rx="8" ry="4" fill="#f5c4a1"/>
      <ellipse cx="70" cy="102" rx="8" ry="4" fill="#f5c4a1"/>
      
      {/* Baby penguin */}
      <ellipse cx="95" cy="90" rx="12" ry="15" fill="#737373"/>
      <ellipse cx="95" cy="93" rx="8" ry="10" fill="#ffffff"/>
      <circle cx="95" cy="78" r="10" fill="#737373"/>
      <ellipse cx="95" cy="80" rx="6" ry="5" fill="#ffffff"/>
      <circle cx="92" cy="77" r="2" fill="#4a4a4a"/>
      <circle cx="98" cy="77" r="2" fill="#4a4a4a"/>
      <path d="M93 83L95 86L97 83Z" fill="#f5c4a1"/>
    </svg>
  )
}

export function ElephantIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#f5f0f5" opacity="0.5"/>
      
      {/* Body */}
      <ellipse cx="55" cy="70" rx="35" ry="30" fill="#a8d4e6"/>
      
      {/* Head */}
      <circle cx="35" cy="50" r="28" fill="#a8d4e6"/>
      
      {/* Ear */}
      <ellipse cx="15" cy="45" rx="15" ry="20" fill="#88b4c6"/>
      <ellipse cx="18" cy="45" rx="10" ry="14" fill="#c8e4f0"/>
      
      {/* Trunk */}
      <path d="M30 65C30 65 25 80 20 90C15 100 25 105 30 95C35 85 40 75 35 70" fill="#a8d4e6" stroke="#88b4c6" strokeWidth="2"/>
      
      {/* Eye */}
      <circle cx="40" cy="45" r="5" fill="#ffffff"/>
      <circle cx="41" cy="44" r="2.5" fill="#4a4a4a"/>
      <circle cx="42" cy="43" r="1" fill="#ffffff"/>
      
      {/* Tusk */}
      <path d="M45 60C45 60 50 68 48 72" stroke="#fffff4" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Legs */}
      <rect x="35" y="85" width="12" height="20" rx="6" fill="#a8d4e6"/>
      <rect x="55" y="85" width="12" height="20" rx="6" fill="#a8d4e6"/>
      <rect x="75" y="85" width="12" height="20" rx="6" fill="#a8d4e6"/>
      
      {/* Tail */}
      <path d="M88 75C88 75 95 80 98 90" stroke="#a8d4e6" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="98" cy="92" rx="3" ry="4" fill="#88b4c6"/>
      
      {/* Baby elephant */}
      <ellipse cx="100" cy="75" rx="15" ry="12" fill="#c8e4f0"/>
      <circle cx="95" cy="65" r="12" fill="#c8e4f0"/>
      <ellipse cx="85" cy="62" rx="6" ry="8" fill="#a8d4e6"/>
      <path d="M92 72C92 72 88 78 86 82" stroke="#c8e4f0" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="98" cy="62" r="2" fill="#4a4a4a"/>
    </svg>
  )
}

export function SquirrelIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#fff5e6" opacity="0.5"/>
      
      {/* Tail */}
      <ellipse cx="85" cy="50" rx="20" ry="35" fill="#d4a574" transform="rotate(30 85 50)"/>
      <ellipse cx="90" cy="45" rx="12" ry="25" fill="#e5b584" transform="rotate(30 90 45)"/>
      
      {/* Body */}
      <ellipse cx="50" cy="70" rx="22" ry="28" fill="#d4a574"/>
      
      {/* White belly */}
      <ellipse cx="50" cy="75" rx="14" ry="18" fill="#fff5e6"/>
      
      {/* Head */}
      <circle cx="50" cy="40" r="20" fill="#d4a574"/>
      
      {/* Ears */}
      <ellipse cx="38" cy="25" rx="5" ry="8" fill="#d4a574"/>
      <ellipse cx="62" cy="25" rx="5" ry="8" fill="#d4a574"/>
      <ellipse cx="38" cy="26" rx="3" ry="5" fill="#e5b584"/>
      <ellipse cx="62" cy="26" rx="3" ry="5" fill="#e5b584"/>
      
      {/* White face */}
      <ellipse cx="50" cy="45" rx="12" ry="10" fill="#fff5e6"/>
      
      {/* Eyes */}
      <circle cx="44" cy="38" r="4" fill="#4a4a4a"/>
      <circle cx="56" cy="38" r="4" fill="#4a4a4a"/>
      <circle cx="45" cy="37" r="1.5" fill="#ffffff"/>
      <circle cx="57" cy="37" r="1.5" fill="#ffffff"/>
      
      {/* Nose */}
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#4a4a4a"/>
      
      {/* Cheeks */}
      <circle cx="38" cy="45" r="4" fill="#f5c4a1" opacity="0.5"/>
      <circle cx="62" cy="45" r="4" fill="#f5c4a1" opacity="0.5"/>
      
      {/* Paws holding acorn */}
      <ellipse cx="45" cy="65" rx="6" ry="4" fill="#d4a574"/>
      <ellipse cx="55" cy="65" rx="6" ry="4" fill="#d4a574"/>
      
      {/* Acorn */}
      <ellipse cx="50" cy="68" rx="6" ry="8" fill="#d4a574"/>
      <path d="M44 62C44 62 47 58 50 58C53 58 56 62 56 62" fill="#8b6914"/>
      <rect x="48" y="55" width="4" height="4" rx="2" fill="#5a4a14"/>
      
      {/* Feet */}
      <ellipse cx="40" cy="98" rx="8" ry="4" fill="#d4a574"/>
      <ellipse cx="60" cy="98" rx="8" ry="4" fill="#d4a574"/>
    </svg>
  )
}

export function OtterIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#e8f0f5" opacity="0.5"/>
      
      {/* Body */}
      <ellipse cx="60" cy="65" rx="25" ry="35" fill="#9e8b7d"/>
      
      {/* Belly */}
      <ellipse cx="60" cy="70" rx="16" ry="25" fill="#d4c8be"/>
      
      {/* Head */}
      <ellipse cx="60" cy="35" rx="22" ry="18" fill="#9e8b7d"/>
      
      {/* Ears */}
      <circle cx="42" cy="22" r="5" fill="#9e8b7d"/>
      <circle cx="78" cy="22" r="5" fill="#9e8b7d"/>
      
      {/* White muzzle */}
      <ellipse cx="60" cy="42" rx="14" ry="10" fill="#d4c8be"/>
      
      {/* Eyes */}
      <circle cx="50" cy="32" r="5" fill="#4a4a4a"/>
      <circle cx="70" cy="32" r="5" fill="#4a4a4a"/>
      <circle cx="51" cy="31" r="2" fill="#ffffff"/>
      <circle cx="71" cy="31" r="2" fill="#ffffff"/>
      
      {/* Nose */}
      <ellipse cx="60" cy="40" rx="4" ry="3" fill="#4a4a4a"/>
      
      {/* Whiskers */}
      <path d="M45 42L35 40" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round"/>
      <path d="M45 44L35 46" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round"/>
      <path d="M75 42L85 40" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round"/>
      <path d="M75 44L85 46" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round"/>
      
      {/* Paws */}
      <ellipse cx="42" cy="75" rx="8" ry="5" fill="#9e8b7d"/>
      <ellipse cx="78" cy="75" rx="8" ry="5" fill="#9e8b7d"/>
      
      {/* Feet */}
      <ellipse cx="50" cy="98" rx="10" ry="5" fill="#9e8b7d"/>
      <ellipse cx="70" cy="98" rx="10" ry="5" fill="#9e8b7d"/>
      
      {/* Tail */}
      <ellipse cx="60" cy="102" rx="8" ry="12" fill="#9e8b7d"/>
      
      {/* Water ripples */}
      <ellipse cx="60" cy="110" rx="40" ry="6" fill="#a8d4e6" opacity="0.3"/>
      <ellipse cx="60" cy="108" rx="30" ry="4" fill="#a8d4e6" opacity="0.2"/>
    </svg>
  )
}

export function MeadowIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
      {/* Ground */}
      <ellipse cx="200" cy="120" rx="250" ry="50" fill="#e8f0e8"/>
      
      {/* Grass blades */}
      <path d="M20 100C20 100 22 85 20 80C18 85 20 100 20 100Z" fill="#7cb97c"/>
      <path d="M40 100C40 100 44 82 40 75C36 82 40 100 40 100Z" fill="#8bc98b"/>
      <path d="M60 100C60 100 62 88 60 82C58 88 60 100 60 100Z" fill="#7cb97c"/>
      <path d="M80 100C80 100 85 80 80 72C75 80 80 100 80 100Z" fill="#9bd99b"/>
      
      {/* Daisies */}
      <g transform="translate(100, 70)">
        <circle cx="0" cy="0" r="4" fill="#f5e6a3"/>
        <ellipse cx="-6" cy="0" rx="4" ry="2" fill="#ffffff"/>
        <ellipse cx="6" cy="0" rx="4" ry="2" fill="#ffffff"/>
        <ellipse cx="0" cy="-6" rx="2" ry="4" fill="#ffffff"/>
        <ellipse cx="0" cy="6" rx="2" ry="4" fill="#ffffff"/>
        <ellipse cx="-4" cy="-4" rx="3" ry="2" fill="#ffffff" transform="rotate(-45 -4 -4)"/>
        <ellipse cx="4" cy="-4" rx="3" ry="2" fill="#ffffff" transform="rotate(45 4 -4)"/>
        <ellipse cx="-4" cy="4" rx="3" ry="2" fill="#ffffff" transform="rotate(45 -4 4)"/>
        <ellipse cx="4" cy="4" rx="3" ry="2" fill="#ffffff" transform="rotate(-45 4 4)"/>
        <path d="M0 10V30" stroke="#7cb97c" strokeWidth="2"/>
      </g>
      
      <g transform="translate(150, 75)">
        <circle cx="0" cy="0" r="3" fill="#f5e6a3"/>
        <ellipse cx="-5" cy="0" rx="3" ry="1.5" fill="#ffffff"/>
        <ellipse cx="5" cy="0" rx="3" ry="1.5" fill="#ffffff"/>
        <ellipse cx="0" cy="-5" rx="1.5" ry="3" fill="#ffffff"/>
        <ellipse cx="0" cy="5" rx="1.5" ry="3" fill="#ffffff"/>
        <path d="M0 8V25" stroke="#7cb97c" strokeWidth="1.5"/>
      </g>
      
      <g transform="translate(250, 68)">
        <circle cx="0" cy="0" r="4" fill="#f5e6a3"/>
        <ellipse cx="-6" cy="0" rx="4" ry="2" fill="#ffffff"/>
        <ellipse cx="6" cy="0" rx="4" ry="2" fill="#ffffff"/>
        <ellipse cx="0" cy="-6" rx="2" ry="4" fill="#ffffff"/>
        <ellipse cx="0" cy="6" rx="2" ry="4" fill="#ffffff"/>
        <path d="M0 10V32" stroke="#7cb97c" strokeWidth="2"/>
      </g>
      
      <g transform="translate(320, 78)">
        <circle cx="0" cy="0" r="3" fill="#f5e6a3"/>
        <ellipse cx="-5" cy="0" rx="3" ry="1.5" fill="#ffffff"/>
        <ellipse cx="5" cy="0" rx="3" ry="1.5" fill="#ffffff"/>
        <ellipse cx="0" cy="-5" rx="1.5" ry="3" fill="#ffffff"/>
        <ellipse cx="0" cy="5" rx="1.5" ry="3" fill="#ffffff"/>
        <path d="M0 8V22" stroke="#7cb97c" strokeWidth="1.5"/>
      </g>
      
      {/* More grass */}
      <path d="M120 100C120 100 123 88 120 82C117 88 120 100 120 100Z" fill="#7cb97c"/>
      <path d="M180 100C180 100 183 85 180 78C177 85 180 100 180 100Z" fill="#8bc98b"/>
      <path d="M220 100C220 100 224 82 220 74C216 82 220 100 220 100Z" fill="#7cb97c"/>
      <path d="M280 100C280 100 283 87 280 80C277 87 280 100 280 100Z" fill="#9bd99b"/>
      <path d="M350 100C350 100 354 84 350 76C346 84 350 100 350 100Z" fill="#7cb97c"/>
      <path d="M380 100C380 100 382 90 380 85C378 90 380 100 380 100Z" fill="#8bc98b"/>
    </svg>
  )
}

export function CloudsDecoration({ className = "w-full h-20" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Cloud 1 */}
      <g opacity="0.6">
        <ellipse cx="60" cy="40" rx="30" ry="18" fill="#ffffff"/>
        <ellipse cx="40" cy="38" rx="20" ry="14" fill="#ffffff"/>
        <ellipse cx="80" cy="38" rx="22" ry="15" fill="#ffffff"/>
        <ellipse cx="55" cy="32" rx="18" ry="12" fill="#ffffff"/>
        <ellipse cx="70" cy="30" rx="15" ry="10" fill="#ffffff"/>
      </g>
      
      {/* Cloud 2 */}
      <g opacity="0.5">
        <ellipse cx="200" cy="25" rx="25" ry="15" fill="#ffffff"/>
        <ellipse cx="180" cy="23" rx="18" ry="12" fill="#ffffff"/>
        <ellipse cx="220" cy="22" rx="20" ry="13" fill="#ffffff"/>
        <ellipse cx="195" cy="18" rx="15" ry="10" fill="#ffffff"/>
      </g>
      
      {/* Cloud 3 */}
      <g opacity="0.4">
        <ellipse cx="340" cy="45" rx="28" ry="16" fill="#ffffff"/>
        <ellipse cx="320" cy="42" rx="20" ry="13" fill="#ffffff"/>
        <ellipse cx="360" cy="40" rx="22" ry="14" fill="#ffffff"/>
        <ellipse cx="335" cy="35" rx="16" ry="11" fill="#ffffff"/>
      </g>
    </svg>
  )
}
