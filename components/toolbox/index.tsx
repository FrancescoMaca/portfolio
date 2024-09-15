import ToolboxItem, { ToolboxItemData } from "./toolbox-item"


const toolboxItems: ToolboxItemData[] = [
  {
    text: 'Folders',
    icon: '/svg/ide/files.svg'
  },
  {
    text: 'Source Control',
    icon: '/svg/ide/source-control.svg'
  },
  {
    text: 'Run and Debug',
    icon: '/svg/ide/debug-alt.svg'
  },
]

export default function Toolbox() {
  return (
    <div className="flex flex-col">
      {
        toolboxItems.map((ti: ToolboxItemData) => 
          <ToolboxItem icon={ti.icon} text={ti.text}/>
        )
      }
    </div>
  )
}