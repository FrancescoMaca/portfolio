'use client'

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getEditorContent, getPageLanguage } from "./page-content/content-handler";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { ToggleButton } from "../utils/toggle-button";
import React from 'react'
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/slices/notification-slice";
import { generateUUID } from "../utils/helpers";
import { setPendingCommand } from "../redux/slices/console-commands-slice";
import { specificCmd } from "../console/commands/command-handler";
import { addTab } from "../redux/slices/editor-tab-slice";
import { finishLoading } from "../redux/slices/webpage-loading-slice";

interface Action {
  name: string;
  label: string;
  className?: string;
  action: () => void;
}

const actions: Action[] = [
  { name: 'openImage', label: "[Open Image]", action: undefined },
  { name: 'seeMore', label: "[See More]", action: () => console.log('seeing more')},
  { name: 'runCommand', label: "[Run Command]", action: undefined },
  { name: 'openGithub', label: "FrancescoMaca", action: () => open('https://github.com/FrancescoMaca') },
  { name: 'openInstagram', label: "@franky_maca", action: () => open('https://www.instagram.com/franky_maca/') },
  { name: 'openLinkedin', label: "francesco-macaluso", action: () => open('https://www.linkedin.com/in/francesco-macaluso/') },
]

export default function TextEditor({ currentPage }: { currentPage: string }) {
  const [goodFormat, setGoodFormat] = useState<boolean>(false)
  const content = getEditorContent(currentPage, goodFormat)
  const duckRef = useRef<HTMLImageElement>(null)
  const dispatch = useDispatch()

  const handleCommandClick = () => {

    // The duck is unavailable so just execute command
    if (!duckRef.current) {
      dispatch(setPendingCommand(specificCmd.getWebsiteDirs))
      return
    }

    // Was the animation already ran??
    if (duckRef.current.classList.contains('animate-fly-duck')) {
      dispatch(setPendingCommand(specificCmd.getWebsiteDirs))
    }
    else {
      duckRef.current.classList.add('animate-fly-duck')

      // If the duck exist tho, its different,  Make it fly
      dispatch(showNotification({
        id: generateUUID(),
        title: 'U.F.O Detected',
        body: 'A duck process keeps running in the background burning valuable processing power. Do you want to kill the process?',
        actionButton: 'No, I got 64gb RAM',
        actionButtonCb: 'spareDuck',
        secondaryButton: 'Kill Duck',
        secondaryButtonCb: 'killDuck',
        type: 'warning',
      }))
    }
  }

  const handleOpenImage = () => {
    dispatch(addTab({ name: 'francesco-macaluso.png', isLink: false }))
  }

  actions[0].action = handleOpenImage
  actions[2].action = handleCommandClick

  return (
    <div className="relative flex w-full h-full flex-col bg-editor text-white font-mono text-sm overflow-hidden">
      {
        currentPage === 'page.tsx' &&
        <img ref={duckRef} src="/pictures/duck.png" alt="A duck?" title="Duck"
          className="absolute bottom-0 -right-[50%] scale-50 select-disable rotate-[30deg] z-40"
        />
      }
      <div className="absolute top-2 right-3 p-2 z-10 bg-editor rounded-md border-editor border">
        <ToggleButton onChange={() => setGoodFormat(!goodFormat)} label="Fellow Developer Mode"/>
      </div>
      <div className="flex-grow overflow-auto">
        <div className='flex h-full'>
          <SyntaxHighlighter
            customStyle={editorStyle}
            lineNumberStyle={lineNumberStyle}
            language={getPageLanguage(currentPage)}
            style={atomOneDark}
            showLineNumbers={true}
            PreTag={CustomPreComponent}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}


const editorStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#1E1E1E',
  padding: '10px 30px',
  color: '#cccccc',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  userSelect: 'none',
}

const lineNumberStyle: CSSProperties = {
  textAlign: 'right',
  color: '#717680'
}

function CustomPreComponent({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()

  // Removes the loading screen once everything is gone
  useEffect(() => {
    dispatch(finishLoading());
  }, [dispatch]);
  
  if (!(children as any).props) {
    return <span>Cannot load editor</span>
  }
  
  const content: any[] = (children as any).props.children[1];
  
  const updatedContent = content.map((code) => {
    if (!code.props || typeof code.props.children[0] !== 'string') {
      return code;
    }

    const newChildren = code.props.children[0].split(/(\[\[ACTION:\w+\]\])/).map((part: string, index: number) => {
      const actionMatch = part.match(/\[\[ACTION:(\w+)\]\]/);
      if (actionMatch) {
        const actionName = actionMatch[1];
        const action = actions.find(a => a.name === actionName);
        if (action) {
          return React.createElement('span', {
            key: index,
            onClick: action.action,
            className: `cursor-pointer hover:underline ${action.className ? action.className : ''}`,
            children: `${action.label}`
          });
        }
      }
      return part;
    });

    return {
      ...code,
      props: {
        ...code.props,
        children: newChildren
      }
    };
  });
  
  return (
    <span className="select-disable">
      {updateObject(children, updatedContent)}
    </span>
  )
}

function updateObject(originalObject: any, newChildContent: any) {
  return {
    ...originalObject,
    props: {
      ...originalObject.props,
      children: [
        originalObject.props.children[0],
        newChildContent,
        ...(originalObject.props.children.slice(2) || [])
      ]
    }
  };
}