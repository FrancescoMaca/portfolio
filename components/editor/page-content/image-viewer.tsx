import React, { useState, useEffect, useRef } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';

export default function ImageViewer({ name }) {
  const [_, setDimensions] = useState({ width: 700, height: 0 });
  const containerRef = useRef(null);
  const [isCracked, setIsCracked] = useState<boolean>(false)

  useEffect(() => {
    if (name === 'francesco-macaluso.png' && read_cookie('open-profile-image') !== 'yes') {
      bake_cookie('open-profile-image', 'yes')
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
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center h-full">
      {
        isCracked &&
        <img src="/pictures/cracked-glass.png" alt="Cracked glass" title="" 
          className="absolute top-0 left-0 pointer-events-none animate-fade-out z-40"
        />
      }
      <img 
        src={`/pictures/${name.substring(0, name.length - 4)}.webp`}
        alt="Opened Image"
        title="This is meee!"
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