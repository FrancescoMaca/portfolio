'use client'

import { ReduxProvider } from "@/components/redux/redux-provider"
import { ActiveTabComponent } from "@/components/tabs"
import { Panel, PanelGroup } from "react-resizable-panels"
import Toolbox from "@/components/toolbox"
import Navbar from "@/components/navbar"
import Editor from "@/components/editor"
import Console from "@/components/console"

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
                  <Console />
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </ReduxProvider>
  )
}