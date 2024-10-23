import { useState } from "react";

interface UrlRendererProps {
  label: string;
  url: string;
}

export default function UrlRenderer({ label, url }: UrlRendererProps) {

  const [isHovering, setHovering] = useState(false)

  return (
    <span
      onClick={() => open(url)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span className="hover:underline hover:text-accent cursor-pointer">{label}</span>
      {
        isHovering &&
        <span>
          <span className={`text-[#e06c75]`}> $&#123; </span>
          <span className={`text-[#5c6370]`}>{'/* '}{<span className="underline">{url}</span>}{' */'}</span>
          <span className={`text-[#e06c75]`}> &#125;</span>
        </span>
      }
    </span>
  )
}