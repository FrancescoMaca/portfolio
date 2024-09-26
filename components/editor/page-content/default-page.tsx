'use client'
import { useEffect, useState } from "react"


export default function DefaultPage() {
  const [mainKey, setMainKey] = useState<string>('ctrl')
  const [altKey, setAltKey] = useState<string>('alt')
  
  useEffect(() => {
    if (detectOS() === 'macOS') {
      setMainKey('⌘')
      setAltKey('⌥')
    }
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="relative h-full flex flex-col items-center justify-center text-text-normal select-disable">
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
          <span>{createKey(mainKey)} + {createKey('H')}</span>
          <span>{createKey(altKey)} + {createKey('N')}</span>
          <span>{createKey(altKey)} + {createKey('D')}</span>
          <span>{createKey(mainKey)} + {createKey('W')}</span>
        </div>
      </div>
      <div className="absolute flex items-center bottom-2 right-2 text-sm mt-10">
        <span>100% made with</span>
        <img src="/svg/ide/vscode-logo.svg" alt="IDE logo" title="" width={32}/>
        <span>VS Code</span>
      </div>

    </div>
  )
}

function createKey(ch: string) {
  return (
    <span className="px-1.5 py-0.5 border-[1px] border-text-normal rounded-md bg-text-normal text-black">
      {ch}
    </span>
  )
}

function handleKeyDown(e: KeyboardEvent) {
  console.log(e.altKey, e.key);
  
}

function detectOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i;
  const windowsPlatforms = /(win32|win64|windows|wince)/i;
  
  if (macosPlatforms.test(userAgent)) {
    return "macOS";
  } else if (windowsPlatforms.test(userAgent)) {
    return "Windows";
  } else {
    return "Other";
  }
}