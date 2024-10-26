'use client'
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react"

interface TextWithIconProps {
  label: string;
  icon?: string;
}

export default function TextWithIcon({ label, icon }: TextWithIconProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setPosition({
        x: event.clientX - rect.left + 20,
        y: event.clientY - rect.top + 20
      });
    }
  }, []);

  useEffect(() => {
    if (isHovering) {
      document.addEventListener('mousemove', handleMouseMove as any);
    } else {
      document.removeEventListener('mousemove', handleMouseMove as any);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, [isHovering, handleMouseMove]);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative inline-block ${icon ? 'cursor-pointer' : ''}`}
      ref={iconRef}
    >
      {label}
      {icon && (
        <div
          className="absolute z-10"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none'
          }}
        >
          <div className={`${isHovering ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <Image src={icon} alt="Skill Icon" className="min-w-[64px] md:min-w-[128px] rounded-md" width={128} height={128} />
          </div>
        </div>
      )}
    </span>
  );
}