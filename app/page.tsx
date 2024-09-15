'use client'

import Navbar from "@/components/navbar"
import Toolbox from "@/components/toolbox"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

export default function Default() {

  return (
    <div className="h-screen">
      <PanelGroup direction="vertical">
        <Navbar/>
        <Panel>
          <PanelGroup direction="horizontal">
            <Toolbox/>
            <Panel id='files' className="bg-green-950" maxSize={15} minSize={0} collapsible={true}>
              files go here
            </Panel>
            <PanelResizeHandle />
            <Panel>
              <PanelGroup direction="vertical">
                <Panel className="bg-red-950">
                  IDE and code go here
                </Panel>
                <PanelResizeHandle/>
                <Panel defaultSize={20}>
                  <PanelGroup direction="horizontal">
                    <Panel className="bg-pink-900" defaultSize={10}>
                      Console
                    </Panel>
                  </PanelGroup>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  )
}