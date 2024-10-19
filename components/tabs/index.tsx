'use client'

import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { getPanelElement, ImperativePanelHandle, Panel } from "react-resizable-panels";
import FileExplorerTab from "./file-explorer";
import SourceControlTab from "./source-control";
import ExtensionTab from "./extensions";
import RunAndDebugTab from "./run-and-debug";
import HighlightHandler from "../utils/highlight-panel-handler";

export function ActiveTabComponent() {
  const activeTab = useSelector((state: RootState) => state.toolbox.activeItem);
  const previewRef = useRef<ImperativePanelHandle>(null)

  const sidebarContent = {
    'Folders': <FileExplorerTab />,
    'Source Control': <SourceControlTab parentPanelRef={previewRef} />,
    'Extensions': <ExtensionTab />,
    'Run and Debug': <RunAndDebugTab />,
  }

  return (
    <>
      <Panel ref={previewRef} id="active-tab" minSize={15} maxSize={50} defaultSize={25} collapsedSize={0} collapsible={true} className="font-ide">
        {
          sidebarContent[activeTab.text] ?? <FileExplorerTab />
        }
      </Panel>
      <HighlightHandler />
    </>
  )
}