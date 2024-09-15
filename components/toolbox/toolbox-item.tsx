'use client'

export interface ToolboxItemData {
  text: string;
  icon: string;
}

export default function ToolboxItem(item: ToolboxItemData) {
  return (
    <div className="p-2 my-4">
      <img src={item.icon} alt="Toolbox Icon" title="" width={32}/>
    </div>
  )
}