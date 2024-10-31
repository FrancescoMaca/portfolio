import NextImage from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';

export default function ImageViewer({ name }: { name: string }) {
  const [_, setDimensions] = useState({ width: 700, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCracked, setIsCracked] = useState<boolean>(false)

  useEffect(() => {
    if (name === 'francesco-macaluso.png' && read_cookie('open-profile-image')) {
      bake_cookie('open-profile-image', '')
      setIsCracked(true)
    }
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const img = new Image();
        img.onload = () => {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          setDimensions({
            width: containerHeight * aspectRatio,
            height: containerHeight
          });
        };
        img.src = `/pictures/${name.substring(0, name.length - 4)}.webp`;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [name]);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center h-full bg-editor">
      {
        isCracked &&
        <NextImage src="/pictures/cracked-glass.png" alt="Cracked glass" title="" height={300} width={300}
          className="absolute top-1/2 -translate-x-2/3 left-1/2 -translate-y-1/2 pointer-events-none animate-fade-out z-40"
        />
      }
      <NextImage 
        src={`/pictures/${name.substring(0, name.length - 4)}.webp`}
        alt="Opened Image"
        title="This is meee!"
        className=''
        width={500}
        height={500}
        style={{
          width: 'auto',
          height: '100%',
          maxWidth: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};