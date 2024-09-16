'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveTab } from "../redux/slices/tab-slice";

export interface ToolboxItemData {
  text: string;
  icon: string;
}

export default function ToolboxItem({item}: { item: ToolboxItemData }) {
  const dispatch = useDispatch()
  const [isHovered, setHovered] = useState<boolean>()
  const activeTab = useSelector((state: RootState) => state.toolbox.activeTab);
  
  return (
    <button className="relative p-4 select-disable"
      onClick={() => dispatch(setActiveTab(item))}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`/svg/ide/${item.icon}${item.text === activeTab.text || isHovered ? '.svg' : '-inactive.svg'}`}
        alt="Toolbox Icon"
        title=""
        width={32}
      />
      <div className={`absolute top-0 left-0 h-full w-0.5 rounded-r-sm ${item.text === activeTab.text ? 'bg-accent' : 'bg-dark'}`}/>
    </button>
  )
}