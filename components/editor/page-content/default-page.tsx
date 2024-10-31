'use client'
import { detectOS } from "@/components/utils/helpers"
import { useWindowWidth } from "@react-hook/window-size"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

function useKeyPress(ch: string) {
  const [isPressed, setIsPressed] = useState(false)

  const getKeyName = (ch: string) => {
    if (ch === '⌘') return 'meta'
    else if (ch === '⌥') return 'alt'
    return ch
  }

  useHotkeys(getKeyName(ch), 
    (event) => {
      setIsPressed(event.type === 'keydown');
    }, 
    { keydown: true, keyup: true, preventDefault: true }
  );

  return isPressed;
}

// Separate KeyComponent
const KeyComponent = ({ ch }: { ch: string }) => {
  const isPressed = useKeyPress(ch);

  return (
    <span className={`border-[1px] border-text-normal bg-white text-black ${isPressed ? 'text-xs px-1 rounded-[4px]' : 'text-sm px-1.5 rounded-md'} py-0.5 transition-all duration-100`}>
      {ch}
    </span>
  );
};

const Shortcut = ({ mainKey, symbol, letter }: { mainKey: string; symbol: string; letter: string }) => (
  <span className="grid grid-cols-3 w-fit">
    <span className="flex items-center justify-center">
      <KeyComponent ch={mainKey} />
    </span>
    <span className="px-2">{symbol}</span>
    <span className="flex items-center justify-center">
      <KeyComponent ch={letter} />
    </span>
  </span>
);

export default function DefaultPage() {
  const [mainKey, setMainKey] = useState<string>('ctrl')
  const [altKey, setAltKey] = useState<string>('alt')
  const width = useWindowWidth()

  useEffect(() => {
    if (detectOS() === 'macOS') {
      setMainKey('⌘')
      setAltKey('⌥')
    }
  }, [])

  return (
    <div className="relative h-full flex flex-col items-center justify-center text-text-normal select-disable">
      {width > 768 ? (
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 text-right">
            <span>Show all Commands</span>
            <span>New file</span>
            <span>Toggle Dark Theme</span>
            <div className="flex flex-col relative">
              <span>Close</span>
              <span className="text-[.75rem]">(the webpage, not the file :D)</span>
            </div>
          </div>
          <div className="flex flex-col items-left gap-4">
            <Shortcut mainKey={mainKey} symbol="+" letter="H" />
            <Shortcut mainKey={altKey} symbol="+" letter="N" />
            <Shortcut mainKey={altKey} symbol="+" letter="T" />
            <Shortcut mainKey={mainKey} symbol="+" letter="W" />
          </div>
        </div>
      ) : (
        <div>
          <span className="text-xs">Open a file by using the explorer</span>
        </div>
      )}
      <div className="absolute flex items-center bottom-2 right-2 text-xs md:text-sm mt-10">
        <span>100% made with</span>
        <Image 
          src="/svg/ide/vscode-logo.svg" 
          alt="IDE logo" 
          title="" 
          width={32} 
          height={32} 
          style={{ width: 'auto', height: '32px' }} 
        />
        <span>VS Code</span>
      </div>
    </div>
  )
}