'use client'
import dynamic from 'next/dynamic';

const LordIconPlayer = dynamic(() => import('@/components/LordIconPlayer'), {
  ssr: false
});

const LordIcon = ({ data, size, className, state}: { data: any; size?: number; className?: string | undefined, state: string }) => {
  
  return <LordIconPlayer className={className} src={data} size={size} state={state} />;
};

export default LordIcon;