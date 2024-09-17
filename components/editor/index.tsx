'use client'
import React, { useState } from 'react';
import { Panel } from "react-resizable-panels";
import { getRandomFunnyFileName } from './page-content/tab-names';
import Tab from './tab';
import TextEditor from './text-editor';
import DefaultPage from './page-content/default-page';

export default function Editor() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState([
    'home.tsx',
    'projects.tsx',
    'my-company.tsx',
    'textme.md',
  ]);

  const addNewTab = () => {
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
  
  return (
    <Panel className="flex flex-col" minSize={30} defaultSize={35}>
      {
        tabs.length > 0 ?
        <div className="flex items-center text-white overflow-y-auto">
          {tabs.map((tab, i) => (
            <Tab
            key={i}
            name={tab}
            isActive={i === activeTabIndex}
            onClick={() => setActiveTabIndex(i)}
            onClose={closeTab}
            />
          ))}
          <button
            className="px-4 py-2 text-white hover:text-blue-500 focus:outline-none"
            onClick={addNewTab}
          >
            +
          </button>
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
  );
}