'use client'

import { useDispatch } from "react-redux"
import { focusNextTab, focusPreviousTab } from "../redux/slices/editor-tab-slice"
import Image from "next/image"

export default function Navbar() {
  const dispatch = useDispatch()

  const forward = () => {
    dispatch(focusNextTab())
  }

  const backward = () => {
    dispatch(focusPreviousTab())
  }

  return (
    <div className="flex justify-center bg-dark py-1 border-b-border-panel border-b-2 text-xs md:text-sm">
      <div className="flex gap-4">
        <Image src="/svg/ide/arrow-left.svg" alt="arrow left" title="" width={20} height={20} style={{ width: "auto" }}
          onClick={backward}
          className="rounded-md hover:bg-hover-dark cursor-pointer"
        />
        <Image src="/svg/ide/arrow-right.svg" alt="arrow right" title=""  width={20} height={20} style={{ width: "auto" }}
          onClick={forward}
          className="rounded-md hover:bg-hover-dark cursor-pointer"
        />
      </div>
      <input className="
          tracking-[-.05em] bg-input text-text-unfocused min-w-[200px] md:min-w-[400px] ml-5 px-6 text-center rounded-lg
        border-border-input border-2 outline-none placeholder:text-text-unfocused focus:text-left focus:placeholder:text-input"
        disabled
        placeholder={'francesco-vs-code'}
      />
    </div>
  )
}