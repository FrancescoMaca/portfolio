'use client'

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getPageContent, getPageLanguage } from "./page-content/content-handler";
import { CSSProperties, useRef, useState } from "react";
import { ToggleButton } from "../utils/toggle-button";
import React from 'react'

interface Action {
  name: string;
  label: string;
  className?: string;
  action: () => void;
}

const actions: Action[] = [
  { name: 'openImage', label: "[Open Image]", action: () => console.log('opening image')},
  { name: 'seeMore', label: "[See More]", action: () => console.log('seeing more')},
  { name: 'runCommand', label: "[Run Command]", action: () => console.log('running command')},
]

export default function TextEditor({ currentPage }: { currentPage: string }) {
  const [goodFormat, setGoodFormat] = useState<boolean>(false)
  const content = getPageContent(currentPage, goodFormat)
  const duckRef = useRef<HTMLImageElement>(null)
  
  const handleCommandClick = () => {

    // The duck is unavailable so just execute command
    if (!duckRef.current) {
      
      console.log('Executing command');
      return
    }
    duckRef.current.classList.toggle('animate-fly-duck')

    // Was the animation already ran??
    if (duckRef.current.classList.contains('animate-fly-duck')) {
      console.log('Executing command');
    }
    else {
      // If the duck exist tho, its different,  Make it fly

      // NotificationProvider.pushNotification('Duck Problem', 'Sorry for that, it just slipped away')
    }
  }

  actions[2].action = handleCommandClick
  return (  
    <div className="relative flex w-full h-full flex-col bg-editor text-white font-mono text-sm overflow-hidden">
      <img ref={duckRef} src="/pictures/duck.png" alt="A duck?" title="Duck"
        className="absolute bottom-0 -right-[50%] scale-50 select-disable rotate-[30deg] z-50"
      />
      <div className="absolute top-2 right-3 p-2 z-10 bg-editor rounded-md border-editor border">
        <ToggleButton onChange={() => setGoodFormat(!goodFormat)} label="Fellow Developer Mode"/>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="flex h-full">
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
  color: '#717680'
}

function CustomPreComponent({ children }: { children: React.ReactNode }) {
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
