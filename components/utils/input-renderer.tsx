'use client'
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux"

interface InputRendererProps {
  placeholder: string;
  id: string;
}

export function InputRenderer({ placeholder, id }: InputRendererProps) {
  const theme = useSelector((state: RootState) => state.ideControls.themeName)
  const [val, setVal] = useState<string>('')

  return (
    <input
      id={id}
      className={`
        text-text-string-${theme === 'atomOneDark' ? '1' : '2'} text-xs md:text-sm
        p-0 w-fit outline-none border-none bg-transparent animate-border-glow
        rounded-md editor-input invalid:text-text-error
      `}
      type="tel"
      autoComplete="off"
      value={val}
      placeholder={placeholder}
      onChange={(e) => setVal(e.target.value)}
      size={val.length || placeholder.length}
    />
  )
}