'use client'

import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const isLoading = useSelector((state: RootState) => state.loading)
  const [render, setRender] = useState<boolean>(true)

  if (!render) {
    return null
  }

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-loading-screen bg-dark select-disable transition-opacity duration-500 ${isLoading ? '' : 'opacity-0'}`}
      onTransitionEnd={() => setRender(false)}
    >
      <div className="">
        <Image src="/svg/ide/vscode-logo.svg" alt="VS Code Icon" title="" width={256} height={256}  />
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
      </div>
      <p className="mt-4 text-text-normal animate-pulse">Creating something strange...</p>
    </div>
  );
}
