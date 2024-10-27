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
import ShortcutManager from "@/components/utils/shortcut-manager"
import { IDEControls } from "@/components/utils/ide-controls"
import { useEffect, useState } from "react"

export default function Default() {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    
    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReduxProvider>
      <ShortcutManager />
      <IDEControls />
      <div style={{ height: `${height}px` }}  className="overflow-hidden">
        <LoadingScreen />
        <PanelGroup direction="vertical">
          <Navbar/>
          <Panel defaultSize={100}>
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