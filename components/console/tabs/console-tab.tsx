import { RootState } from "@/components/redux";
import { setActiveTab } from "@/components/redux/slices/console-tab-slice";
import { useDispatch, useSelector } from "react-redux";

interface ConsoleTabProps {
  name: string;
  index: number;
}

export default function ConsoleTab({ name, index }: ConsoleTabProps) {
  const dispatch = useDispatch()
  const activeTabIndex = useSelector((state: RootState) => state.consoleTabs.activeTabIndex)

  return (
    <div className="flex items-center justify-center bg-dark px-2 hover:cursor-pointer" onClick={() => dispatch(setActiveTab(index))}>
      <span className={`p-3 text-text-normal ${index == activeTabIndex ? 'border-b border-b-accent' : ''}`}>{name}</span>
    </div>
  )
}