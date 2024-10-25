'use client'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

export interface SourceControlDropdownProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export function SourceControlDropdown({ title, children, isExpanded, onToggle }: SourceControlDropdownProps) {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);
  const ddHeadRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isHighlighted) {
      const timer = setTimeout(() => setIsHighlighted(false), 250);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);

  const handleClick = () => {
    setIsHighlighted(true);
    onToggle();
  };

  return (
    <div className={`flex flex-col ${isExpanded ? '' : 'flex-shrink-0'} overflow-y-auto text-xs md:text-sm`}>
      <div 
        className={`
          flex px-3 py-0.5 border-t-2 border-${isHighlighted ? 'accent' : 'dark'} border-t-border-panel
          transition-colors duration-300 gap-2 cursor-pointer
        `}
        onClick={handleClick}
        ref={ddHeadRef}
      >
        <Image 
          src={`/svg/ide/chevron-${isExpanded ? 'down' : 'right'}.svg`} 
          alt={isExpanded ? "Chevron down" : "Chevron right"} 
          title=""
          width={20}
          height={20}
          className="min-w-[20px]"
        />
        <span className="uppercase text-white font-bold">
          <span>{title}</span>
        </span>
      </div>
      <div className={`flex-grow overflow-y-auto min-h-0 overflow-hidden transition-transform ${isExpanded ? 'h-full' : 'h-0'} duration-150 ease-in-out`}>
        {children}
      </div>
    </div>
  );
}