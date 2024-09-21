'use client'
import React, { MouseEvent, useRef, useState } from 'react';
import { Panel } from "react-resizable-panels";
import { getRandomFunnyFileName } from './page-content/tab-names';
import Tab from './tab';
import TextEditor from './text-editor';
import DefaultPage from './page-content/default-page';
import HighlightHandler from '../utils/highlight-panel-handler';

export default function Editor() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState([
    'home-page.tsx',
    'project-page.tsx',
    'company-page.tsx',
    'contact-page.tsx',
  ]);
  const [clickTimeout, setClickTimeout] = useState(null);

  const handleDoubleClick = () => {
    const newTab = getRandomFunnyFileName()
    setTabs([...tabs, newTab]);
    setActiveTabIndex(tabs.length);
  };

  const closeTab = (name: string) => {
    const closingIndex = tabs.indexOf(name);
    let newActiveIndex: number;
  
    if (tabs.length === 1) {
      newActiveIndex = -1;
    } else if (closingIndex === activeTabIndex) {
      newActiveIndex = Math.max(0, activeTabIndex - 1);
    } else if (closingIndex < activeTabIndex) {
      newActiveIndex = activeTabIndex - 1;
    } else {
      newActiveIndex = activeTabIndex;
    }
  
    setActiveTabIndex(newActiveIndex);
    setTabs(tabs.filter(tab => tab !== name));
  };

  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      if (clickTimeout) {
        // Double click
        clearTimeout(clickTimeout);
        setClickTimeout(null);
        handleDoubleClick();
      } else {
        // Single click
        setClickTimeout(
          setTimeout(() => {
            setClickTimeout(null);
          }, 200)
        );
      }
    }
  };
  
  return (
    <>
      <Panel className="flex flex-col" minSize={30} defaultSize={35}>
        {
          tabs.length > 0 ?
          <div className="flex items-center pr-10 text-text-unfocused overflow-y-auto"
            onClick={handleClick}
          >
            {tabs.map((tab, i) => (
              <Tab
              key={i}
              name={tab}
              isActive={i === activeTabIndex}
              onClick={() => setActiveTabIndex(i)}
              onClose={closeTab}
              />
            ))}
          </div> : <></>
        }
        {
          activeTabIndex === -1 ?
          <DefaultPage /> :
          <div className="flex-grow overflow-y-auto">
            <TextEditor currentPage={tabs[activeTabIndex]}/>
          </div>
        }
      </Panel>
      <HighlightHandler horizontal />
    </>
  );
}