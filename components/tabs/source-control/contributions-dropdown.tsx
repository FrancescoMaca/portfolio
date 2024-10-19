'use client'

import ParallaxCard from "./parallax-card"

export function ContributionDropdown({expanded, onCardHover}: { expanded: boolean, onCardHover: () => void }) {
  return (
    <div className={`flex items-center justify-center flex-col overflow-hidden ${expanded ? 'h-full' : 'h-0'} transition-all duration-500`}>
      <ParallaxCard onCardHover={onCardHover} />
    </div>
  )
}