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
import { delete_cookie } from "sfcookies"

export default function Default() {
  return (
    <ReduxProvider>
      <button className='absolute bottom-10 right-10 bg-text-normal rounded-md p-1 z-[999]' onClick={resetCookies}>
        Reset cookies
      </button>
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

function resetCookies() {
  delete_cookie('duck-played')
  delete_cookie('open-profile-image')
}