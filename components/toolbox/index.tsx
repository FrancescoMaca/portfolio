import { useState } from "react";
import ToolboxItem, { ToolboxItemData } from "./toolbox-item"


const topToolboxItems: ToolboxItemData[] = [
  { text: 'Folders', icon: 'files', active: true },
  { text: 'Source Control', icon: 'source-control', active: false },
  { text: 'Run and Debug', icon: 'debug-alt', active: false },
  { text: 'Extensions', icon: 'extensions', active: false },
  { text: 'Remote Explorer', icon: 'vm-connect', active: false },
  { text: 'Search', icon: 'search', active: false },
]

const bottomToolboxItems: ToolboxItemData[] = [
  { text: 'Account', icon: 'account', active: false },
  { text: 'Settings', icon: 'settings-gear', active: false },
]

export default function Toolbox() {
  const [activeItem, setActiveItem] = useState<ToolboxItemData>(topToolboxItems[0]);

  const setFocus = (item: ToolboxItemData) => {
    setActiveItem(item)
  }

  return (
    <div className="flex flex-col justify-between border-r-border-panel border-r-2">
      <div className="flex flex-col">
        {
          topToolboxItems.map((ti: ToolboxItemData, i: number) =>
            <ToolboxItem key={i} item={{ ...ti, active: activeItem.icon === ti.icon}} setFocus={setFocus}/>
          )
        }
      </div>
      <div className="flex flex-col">
        {
          bottomToolboxItems.map((ti: ToolboxItemData, i: number) =>
            <ToolboxItem key={i} item={{ ...ti, active: activeItem.icon === ti.icon}} setFocus={setFocus}/>
          )
        }
      </div>
    </div>
  )
}