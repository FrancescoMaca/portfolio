'use client'

import { MouseEvent } from "react";

interface TabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  onClose: (name: string) => void;
}


export default function Tab({ name, isActive, onClick, onClose }: TabProps) {

  const handleMiddleClick = (e: MouseEvent) => {
    e.preventDefault()

    // Middle click
    if (e.button === 1) {
      onClose(name)
    }
  }

  return (
    <button className={`
      flex items-center justify-between gap-4 px-4 py-2
      hover:bg-hover-dark focus:outline-none
      border-t-2 border-x-[1px] border-x-editor
      whitespace-nowrap
      ${isActive ?
        'border-t-accent bg-editor' :
        'border-t-dark'}
      `}
      onMouseDown={handleMiddleClick}
      onClick={onClick}
    >
      {name}
      {
        isActive &&
        <div className="hover:bg-hover-dark rounded-md p-1"
          onClick={() => onClose(name)}
        >
          <img src="/svg/ide/close.svg" alt="Close Icon" title="" width={20}
            className="min-w-[20px]"
          />
        </div>
      }
    </button>
  )
};