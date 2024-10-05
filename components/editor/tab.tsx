'use client'

import { MouseEvent, useState } from "react";
import { extToIcon } from "../utils/helpers";

interface TabProps {
  name: string;
  isActive: boolean;
  isLink: boolean;
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
      flex items-center justify-between gap-2 px-5 py-2
      hover:bg-hover-dark focus:outline-none
      border-t-[3px] border-x-[0.5px] border-x-border-panel
      whitespace-nowrap select-disable
      ${isActive ?
        'border-t-accent bg-editor text-white' :
        'border-t-dark hover:border-t-hover-dark'}
      `}
      onMouseDown={handleMiddleClick}
      onClick={onClick}
    >
      <img src={`svg/files/file_type_${extToIcon(name)}.svg`} width={16}/>
      <span className="text-sm">{name}</span>
      <div className={`hover:bg-dark hover:bg-opacity-70 rounded-md p-1 ${isActive ? '' : 'invisible'}`}
        onClick={(e) => {
          e.stopPropagation()
          onClose(name)
        }}
      >
        <img src="/svg/ide/close.svg" alt="Close Icon" title="" width={20}
          className="min-w-[20px]"
        />
      </div>
    </button>
  )
};