import React, { useState, useEffect, useRef } from 'react';

export default function ImageViewer({ name }) {
  const [dimensions, setDimensions] = useState({ width: 700, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
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
    <div ref={containerRef} className="flex items-center justify-center h-full">
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