'use client'

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { ImperativePanelHandle, Panel } from "react-resizable-panels";
import FileExplorerTab from "./file-explorer";
import SourceControlTab from "./source-control";
import ExtensionTab from "./extensions";
import RunAndDebugTab from "./run-and-debug";
import HighlightHandler from "../utils/highlight-panel-handler";
import { useWindowWidth } from "@react-hook/window-size";

export function ActiveTabComponent() {
  const { activeItem, collapsed } = useSelector((state: RootState) => state.toolbox);
  const previewRef = useRef<ImperativePanelHandle>(null);
  const [panelSizes, setPanelSizes] = useState<{ max: number, min: number, def: number}>({ max: -1, min: 15, def: 25 });
  const width = useWindowWidth({ wait: 100 })

  const sidebarContent: { [key: string]: any }= {
    'Folders': <FileExplorerTab parentPanelRef={previewRef}/>,
    'Source Control': <SourceControlTab parentPanelRef={previewRef} />,
    'Extensions': <ExtensionTab />,
    'Run and Debug': <RunAndDebugTab />,
  };

  useEffect(() => {
    if (!previewRef.current) {
      return
    }

    if (collapsed) {
      previewRef.current.collapse()
    }
    else {
      previewRef.current.expand()
    }
  }, [collapsed])

  useEffect(() => {
    const handleResize = () => {      
      if (previewRef.current && width <= 768) {
        setPanelSizes({ max: -1, min: 100, def: 100 });

        if (collapsed) {
          previewRef.current.collapse()
        }
        else {
          previewRef.current.expand()
        }
      } else {
        setPanelSizes({ max: 40, min: 15, def: 25 });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ collapsed, width ]);

  return (
    <>
      <Panel 
        ref={previewRef} 
        id="active-tab" 
        minSize={panelSizes.min}
        maxSize={panelSizes.max === -1 ? undefined : panelSizes.max}
        defaultSize={panelSizes.def}
        collapsedSize={0}
        collapsible={true}
        className={`font-ide ${width <= 768 ? 'transition-all' : ''}`}
      >
        {sidebarContent[activeItem.text] ?? <FileExplorerTab parentPanelRef={previewRef}/>}
      </Panel>
      <HighlightHandler disabled={width <= 768}/>
    </>
  );
}