import { useSelector } from "react-redux"
import ConsoleTab from "./tabs/console-tab"
import { RootState } from "@/components/redux"
import ConsoleContent from "./contents/console-content"
import ProblemContent from "./contents/problems-content"
import OutputContent from "./contents/output-content"
import { ImperativePanelHandle, Panel } from "react-resizable-panels"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setConsoleCollpased } from "../redux/slices/console-tab-slice"

export default function Console() {
  const dispatch = useDispatch()
  const { tabs, activeTabIndex, collapsed } = useSelector((state: RootState) => state.consoleTabs)
  const consolePanelRef = useRef<ImperativePanelHandle | null>(null)

  const sidebarContent = [
    <ProblemContent key={Math.random()} />,
    <OutputContent key={Math.random()} />,
    <ConsoleContent key={Math.random()} />
  ]

  return (
    <Panel 
      onResize={() => {
        if (!consolePanelRef.current) {
          return
        }

        if (collapsed !== consolePanelRef.current.isCollapsed()) {
          dispatch(setConsoleCollpased(consolePanelRef.current.isCollapsed()))
        }
      }}
      ref={consolePanelRef}
      className="flex flex-col h-full" 
      defaultSize={20} 
      maxSize={50} 
      minSize={15} 
      collapsedSize={0} 
      collapsible
    >
      <div className="flex text-xs md:text-sm">
        {tabs.map((tabName, index) => (
          <ConsoleTab 
            key={index} 
            name={tabName.toUpperCase()} 
            index={index} 
          />
        ))}
      </div>
      {
        sidebarContent.map((content, index) => (
          <div key={index} className={`${index === activeTabIndex ? 'block' : 'hidden'} h-full overflow-y-auto`}>
            {content}
          </div>
        ))
      }
    </Panel>
  );
}