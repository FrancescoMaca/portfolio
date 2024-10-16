'use client'

import ToolboxItem, { ToolboxItemData } from "./toolbox-item"

const topToolboxItems: ToolboxItemData[] = [
  { text: 'Folders', icon: 'files' },
  { text: 'Source Control', icon: 'source-control' },
  { text: 'Run and Debug', icon: 'debug-alt' },
  { text: 'Extensions', icon: 'extensions' },
  { text: 'Remote Explorer', icon: 'vm-connect' },
  { text: 'Search', icon: 'search' },
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