import { useState } from "react";
import { ComingMoreExtEntry, ExtensionEntry, ExtensionEntryProps } from "./extensions/extension-entry";
import { changeTheme, undoLastThemeChange } from "../redux/slices/ide-controls-slice";
import Image from "next/image";

const extensions: ExtensionEntryProps[] = [
  { 
    name: 'Atelier Cave Dark Theme',
    description: 'Changes the theme to Atelier Cave Dark in the IDE',
    icon: 'palette',
    action: () => changeTheme('atelierCaveDark'),
    undoAction: () => undoLastThemeChange()
  },
]

export default function Extension() {
  const [isRefreshing, setRefreshing] = useState<boolean>(false);

  const refresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, Math.floor(Math.random() * 500));
  }

  return (
    <div className="flex flex-col h-full pt-2 bg-dark text-white select-disable">
      <div className='flex justify-between items-center px-3 mb-2'>
        <span className='uppercase text-sm text-text-normal whitespace-nowrap overflow-hidden text-ellipsis block'>
          extensions
        </span>
        <div className='flex gap-2 ml-5'>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={refresh}
          >
            <Image src={`/svg/ide/${isRefreshing ? 'loading' : 'refresh'}.svg`} alt="Refresh Icon" title='' width={20} height={20}
              className={`${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-auto overflow-x-hidden">
        {
          extensions.map((ext, index) => 
            <ExtensionEntry
              key={index}
              name={ext.name}
              description={ext.description}
              icon={ext.icon}
              action={ext.action}
              undoAction={ext.undoAction}
            />
          )
        }
        <ComingMoreExtEntry />
      </div>
    </div>
  )
}