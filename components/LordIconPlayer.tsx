'use client'
import { Player } from '@lordicon/react';
import { useEffect, useRef } from 'react';

const LordIconPlayer = ({
  src,
  size = 96,
  className,
  state,
}: {
  src: any;
  size?: number;
  className?: string | undefined;
  state: string;
}) => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  })

  return (
    <div onClick={() => playerRef.current.playFromBeginning()} onMouseEnter={() => playerRef.current.playFromBeginning()} className={className + ' w-max h-max'}>
      <Player size={size} ref={playerRef} icon={src} state={state} />
    </div>
  );
};

export default LordIconPlayer;