'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveToolboxItem } from "../redux/slices/toolbox-slice";

export interface ToolboxItemData {
  text: string;
  icon: string;
}

export default function ToolboxItem({item}: { item: ToolboxItemData }) {
  const dispatch = useDispatch()
  const [isHovered, setHovered] = useState<boolean>(false)
  const activeItem = useSelector((state: RootState) => state.toolbox.activeItem);
  
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
      <div className={`absolute top-0 left-0 h-full w-0.5 rounded-r-sm ${item.text === activeItem.text ? 'bg-accent' : 'bg-dark'}`}/>
    </button>
  )
}