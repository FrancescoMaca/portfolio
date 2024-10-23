import { RootState } from "@/components/redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export interface ExtensionEntryProps {
  name: string;
  description: string;
  icon: string;
  action: () => { payload: string; type: "ide-controls/changeTheme"; };
  undoAction: () => { payload: string; type: "ide-controls/undoLastThemeChange"; };
}

export function ExtensionEntry({ name, description, icon, action, undoAction }: ExtensionEntryProps) {
  const themeName = useSelector((root: RootState) => root.ideControls.themeName)
  const [isDefaultTheme, setDefaultTheme] = useState<boolean>(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setDefaultTheme(themeName === 'atomOneDark')
  }, [themeName])

  return (
    <div className="flex hover:bg-hover-dark px-3 py-2 text-text-normal">
      {
        icon &&
        <div className="flex items-center justify-center w-20 h-20 shrink-0">
          <Image 
            src={`/svg/extensions/${icon}.svg`} 
            alt="Extension Icon"
            className="w-full h-full object-contain rounded-md"
            width={80}
            height={80}
          />
        </div>
      }
      <div className="flex flex-col pl-5 w-full min-w-0 justify-between">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-white truncate pr-4">{name}</span>
          <div className="flex gap-2 items-center shrink-0">
            <Image src="/svg/ide/history.svg" alt="Time Icon" width={16} height={16} />
            <span>{Math.floor(Math.random() * 300)}ms</span>
          </div>
        </div>
        
        <p className="truncate">
          {description}
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center min-w-0">
            <Image src="/svg/ide/verified.svg" alt="Verified Badge" width={16} height={16} className="min-w-[16px]" />
            <span className="truncate">FrancescoMaca</span>
          </div>
          <button className={`px-1 ${isDefaultTheme ? 'bg-accent' : 'bg-red-600'} rounded-md shrink-0 ml-2`}
            onClick={() => {
              if (isDefaultTheme) {
                dispatch(action())
              }
              else {
                dispatch(undoAction())
              }
            }}
          >
            {isDefaultTheme ? 'Add Extensions' : 'Uninstall'}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ComingMoreExtEntry() {
  return (
    <p className="flex flex-col px-3 py-2 text-text-normal truncate">
      <span className="text-white">Don&apos;t worry!</span>
      <span>
        More extensions are coming whenever I feel like!
      </span>
    </p>
  )
}