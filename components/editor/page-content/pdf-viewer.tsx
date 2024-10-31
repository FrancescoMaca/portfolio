'use client'
import { detectOS } from "@/components/utils/helpers";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PdfViewer({ name }: { name: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApple, _] = useState<boolean>(detectOS() === 'macOS')
  const width = useWindowWidth()

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setIsLoading(false);
      };
    }

    // If its an apple mobile device
    if (isApple && width <= 768) {
      setIsLoading(false);
    }
  }, [isApple]);

  return (
    <div className="relative w-full h-full bg-editor">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/svg/ide/loading.svg" className="animate-spin text-accent" alt={"Loading..."} width={20} height={20}/>
        </div>
      )}
      {
        isApple && width <= 768 ?
        <div className="flex flex-col items-center justify-center gap-5 w-full h-full p-4 text-xs md:text-sm">
          <p className="flex flex-col gap-1 text-text-normal text-center">
            <span>There are problems...</span>
            <span className="text-[0.5rem]">{` (I do not know how to code properly) `}</span>
            <span>iframes dont seem to work on mobile devices, here is a link to open it in a new tab though!</span>
          </p>
          <a className="bg-accent text-text-normal px-2 py-1 rounded-sm"
            onClick={() => open('/documents/resume.pdf')}
          >
            Open PDF
          </a>
        </div> :
        <iframe
          ref={iframeRef}
          src={`/documents/${name}`}
          className="w-full h-full border-none"
          title="PDF Viewer"
        />
      }
    </div>
  );
}