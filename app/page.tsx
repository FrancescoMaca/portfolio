'use client'

import { ReduxProvider } from "@/components/redux/redux-provider"
import { ActiveTabComponent } from "@/components/tabs"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Toolbox from "@/components/toolbox"
import Navbar from "@/components/navbar"
import Editor from "@/components/editor"
import HighlightHandler from "@/components/utils/highlight-panel-handler"

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
                  <Editor />
                  <Panel className="bg-dark text-white" defaultSize={10} minSize={15} maxSize={50}>
                    Console
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