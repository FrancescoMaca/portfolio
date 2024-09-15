'use client'

export interface ToolboxItemData {
  text: string;
  icon: string;
  active: boolean;
}

export default function ToolboxItem({item, setFocus}: { item: ToolboxItemData, setFocus: (item: ToolboxItemData) => void }) {

  return (
    <button className="relative p-4 select-disable"
      onClick={() => setFocus(item)}
    >
      <img src={`/svg/ide/${item.icon}${item.active ? '.svg' : '-inactive.svg'}`} alt="Toolbox Icon" title="" width={32}/>
      <div className={`absolute top-0 left-0 h-full w-0.5 rounded-r-sm ${item.active ? 'bg-accent' : 'bg-dark'}`}/>
    </button>
  )
}