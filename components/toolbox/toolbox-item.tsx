'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveToolboxItem } from "../redux/slices/toolbox-slice";
import { fetchGitHubCommits } from "../tabs/source-control/commit-finder";

export interface ToolboxItemData {
  text: string;
  icon: string;
}

export default function ToolboxItem({ item }: { item: ToolboxItemData }) {
  const dispatch = useDispatch()
  const [isHovered, setHovered] = useState<boolean>(false)
  const [toolTip, setToolTip] = useState<boolean>(false)
  const activeItem = useSelector((state: RootState) => state.toolbox.activeItem);
  const [notifCount, setNotifCount] = useState<number>(0)

  useEffect(() => {
    if (item.text.toLowerCase() === 'source control') {
      fetchGitHubCommits().then((commits) => {
        setNotifCount(commits.length)
      })
    }

    let timeoutId: NodeJS.Timeout;
    
    if (isHovered) {
      timeoutId = setTimeout(() => setToolTip(true), 1000);
    } else {
      setToolTip(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isHovered]);
  
  return (
    <button className="relative p-4 select-disable"
      onClick={() => dispatch(setActiveToolboxItem(item))}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`/svg/ide/${item.icon}${item.text === activeItem.text || isHovered ? '.svg' : '-inactive.svg'}`}
        alt="Toolbox Icon"
        title=""
        width={32}
      />
      {
        notifCount > 0 &&
        <div className={`
          absolute bottom-1 right-1 w-6 h-6 rounded-full bg-accent
          opacity-${notifCount > 0 ? '100' : '0'} transition-opacity
          contrast-200 text-text-normal 
        `}>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
            {notifCount}
          </span>
        </div>
      }
      {
        toolTip && 
        <div className="absolute top-1/2 -translate-y-1/2 left-[110%] px-4 py-1  border-2 rounded-md border-text-normal bg-dark text-text-normal whitespace-nowrap z-10">
          {item.text}
        </div>
      }
      <div className={`absolute top-0 left-0 h-full w-0.5 rounded-r-sm ${item.text === activeItem.text ? 'bg-accent' : 'bg-dark'}`}/>
    </button>
  )
}