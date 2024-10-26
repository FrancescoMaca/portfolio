import Image from "next/image";

export default function Loading() {
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-loading-screen bg-dark select-disable transition-opacity duration-500`}
    >
      <div>
        <Image src="/svg/ide/vscode-logo.svg" alt="VS Code Icon" title="" width={256} height={256} priority />
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
      </div>
      <p className="mt-4 text-text-normal animate-pulse">Creating something strange...</p>
    </div>
  );
}
