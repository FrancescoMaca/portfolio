'use client'
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export function IDEControls() {
  const { needsDarken } = useSelector((state: RootState) => state.ideControls)

  return (
    <React.Fragment>
      <div className={`absolute top-0 left-0 w-screen h-screen
        ${needsDarken ? 'bg-black/70' : 'bg-transparent'}  z-[90] transition-all duration-500 pointer-events-none
      `}/>
    </React.Fragment>
  )
}