'use client'

import Navbar from "@/components/navbar"
import { ReduxProvider } from "@/components/redux/redux-provider"
import { ActiveTabComponent } from "@/components/tabs"
import Toolbox from "@/components/toolbox"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

export default function Default() {

  return (
    <ReduxProvider>
      <div className="h-screen">
        <PanelGroup direction="vertical">
          <Navbar/>
          <Panel>
            <PanelGroup direction="horizontal">
              <Toolbox />
              <ActiveTabComponent />
              <Panel>
                <PanelGroup direction="vertical">
                  <Panel className="bg-red-400">
                    IDE and code go here
                  </Panel>
                  <PanelResizeHandle/>
                  <Panel defaultSize={20}>
                    <PanelGroup direction="horizontal">
                      <Panel className="bg-pink-400" defaultSize={10}>
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
    </ReduxProvider>
  )
}