'use client'

import ToolboxItem, { ToolboxItemData } from "./toolbox-item"

const topToolboxItems: ToolboxItemData[] = [
  { text: 'Folders', icon: 'files' },
  { text: 'Source Control', icon: 'source-control' },
  { text: 'Extensions', icon: 'extensions' },
]

const bottomToolboxItems: ToolboxItemData[] = [
  { text: 'Account', icon: 'account' },
  { text: 'Settings', icon: 'settings-gear' },
]

export default function Toolbox() {

  return (
    <div className="flex flex-col justify-between border-r-border-panel border-r-2">
      <div className="flex flex-col">
        {
          topToolboxItems.map((ti: ToolboxItemData, i: number) =>
            <ToolboxItem key={i} item={ti} />
          )
        }
      </div>
      <div className="flex flex-col">
        {
          bottomToolboxItems.map((ti: ToolboxItemData, i: number) =>
            <ToolboxItem key={i} item={ti} />
          )
        }
      </div>
    </div>
  )
}