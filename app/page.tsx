'use client'

import { ReduxProvider } from "@/components/redux/redux-provider"
import { Panel, PanelGroup } from "react-resizable-panels"
import { ActiveTabComponent } from "@/components/tabs"
import Toolbox from "@/components/toolbox"
import Navbar from "@/components/navbar"
import Editor from "@/components/editor"
import Console from "@/components/console"
import NotificationProvider from "@/components/notification/notification-provider"
import BottomBar from "@/components/bottom-bar"
import LoadingScreen from "@/components/loading-screen"

export default function Default() {
  return (
    <ReduxProvider>
      <div className="h-screen">
        <LoadingScreen />
        <PanelGroup direction="vertical">
          <Navbar/>
          <Panel>
            <PanelGroup direction="horizontal">
              <Toolbox />
              <ActiveTabComponent />
              <Panel defaultSize={75}>
                <PanelGroup direction="vertical">
                  <Editor />
                  <Console />
                  <NotificationProvider />
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>
          <BottomBar/>
        </PanelGroup>
      </div>
    </ReduxProvider>
  )
}