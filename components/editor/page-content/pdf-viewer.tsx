'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PdfViewer({ name }: { name: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setIsLoading(false);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark">
          <Image src="/svg/ide/loading.svg" className="animate-spin text-accent" alt={"Loading..."} width={20} height={20}/>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={`/documents/${name}`}
        className="w-full h-full border-none"
        title="PDF Viewer"
      />
    </div>
  );
}