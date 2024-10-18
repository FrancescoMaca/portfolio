'use client'

import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Panel } from "react-resizable-panels";
import FileExplorerTab from "./file-explorer";
import SourceControlTab from "./source-control";
import ExtensionTab from "./extensions";
import RunAndDebugTab from "./run-and-debug";
import HighlightHandler from "../utils/highlight-panel-handler";

export function ActiveTabComponent() {
  const activeTab = useSelector((state: RootState) => state.toolbox.activeItem);

  const sidebarContent = {
    'Folders': <FileExplorerTab />,
    'Source Control': <SourceControlTab />,
    'Extensions': <ExtensionTab />,
    'Run and Debug': <RunAndDebugTab />,
  }

  return (
    <>
      <Panel id="active-tab" minSize={15} maxSize={50} defaultSize={25} collapsedSize={0} collapsible={true} className="font-ide">
        {
          sidebarContent[activeTab.text] ?? <FileExplorerTab />
        }
      </Panel>
      <HighlightHandler />
    </>
  )
}