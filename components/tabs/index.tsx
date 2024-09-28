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
  
  const renderComponent = () => {
    switch (activeTab.text) {
      case 'Folders':
        return <FileExplorerTab />;
      case 'Source Control':
        return <SourceControlTab />;
      case 'Extensions':
        return <ExtensionTab />;
      case 'Run and Debug':
        return <RunAndDebugTab />;
      default:
        return <FileExplorerTab />;
    }
  }

  return (
    <>
      <Panel id="active-tab" minSize={15} maxSize={50} defaultSize={25} collapsedSize={0} collapsible={true}>
        {
          sidebarContent[activeTab.text] ?? <FileExplorerTab />
        }
      </Panel>
      <HighlightHandler />
    </>
  )
}