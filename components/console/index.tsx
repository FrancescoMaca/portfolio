import { useSelector } from "react-redux"
import ConsoleTab from "./tabs/console-tab"
import { RootState } from "@/components/redux"
import ConsoleContent from "./contents/console-content"
import ProblemContent from "./contents/problems-content"
import OutputContent from "./contents/output-content"
import { Panel } from "react-resizable-panels"

export default function Console() {
  const { tabs, activeTabIndex } = useSelector((state: RootState) => state.consoleTabs)

  const sidebarContent = [
    <ProblemContent />,
    <OutputContent />,
    <ConsoleContent />
  ]

  return (
    <Panel className="flex flex-col h-full">
      <div className="flex text-sm">
        {
          tabs.map((tabName, index) => 
            <ConsoleTab key={index} name={tabName.toUpperCase()} index={index} />
          )
        }
      </div>
      <div className="h-full overflow-y-auto">
        { sidebarContent[activeTabIndex] }
      </div>
    </Panel>
  )
}