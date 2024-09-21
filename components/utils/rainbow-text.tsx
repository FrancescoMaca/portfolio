'use client'
import React, { useEffect, useState } from 'react';

interface RainbowTextProps {
  children: React.ReactNode;
  className: string;
}

const RainbowText = ({ children, className }: RainbowTextProps) => {
  return (
    <span
      className={`
        inline-block
        animate-gradient-text
        bg-highlight-gradient
        bg-[length:200%_auto]
        bg-clip-text
        text-transparent
        font-bold
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default RainbowText;