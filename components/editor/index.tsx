'use client'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { Panel } from "react-resizable-panels";
import { getRandomFunnyFileName } from './page-content/new-tab-names';
import Tab from './tab';
import TextEditor from './text-editor';
import DefaultPage from './page-content/default-page';
import HighlightHandler from '../utils/highlight-panel-handler';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { addTab, closeTab, setActiveTab } from '../redux/slices/editor-tab-slice';
import ContextMenu from '../context-menu';

export default function Editor() {
  const dispatch = useDispatch()
  const { tabs, activeTabIndex } = useSelector((state: RootState) => state.tabs)
  const [clickTimeout, setClickTimeout] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);

  useEffect(() => {
    const handleOutsideClick = () => setContextMenu(null);
    if (contextMenu) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [contextMenu]);
  
  const handleDoubleClick = () => {
    dispatch(addTab({ name: getRandomFunnyFileName(), isLink: false }))
  };

  const handleCloseTab = (name: string) => {
    dispatch(closeTab(name))
  };

  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
        handleDoubleClick();
      } else {
        setClickTimeout(
          setTimeout(() => {
            setClickTimeout(null);
          }, 200)
        );
      }
    }
  };

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            x: e.pageX,
            y: e.pageY,
          }
        : null,
    );
  }, [contextMenu]);
  
  return (
    <>
      <Panel className="flex flex-col" minSize={30} defaultSize={35}>
        {
          tabs.length > 0 ?
          <div className="flex items-center pr-10 text-text-unfocused overflow-y-hidden overflow-x-auto"
            onClick={handleClick}
            onContextMenu={handleContextMenu}
          >
            {tabs.map((tab, i) => (
              <Tab
                key={i}
                name={tab.name}
                isActive={i === activeTabIndex}
                isLink={tab.isLink}
                onClick={() => dispatch(setActiveTab(i))}
                onClose={handleCloseTab}
              />
            ))}
            {
              contextMenu && (
                <ContextMenu
                  x={contextMenu.x}
                  y={contextMenu.y}
                  onClose={() => setContextMenu(null)}
                  tabName={tabs[activeTabIndex].name}
                />
              )
            }
          </div> : <></>
        }
        {
          activeTabIndex === -1 ?
          <DefaultPage /> :
          <div className="h-full overflow-y-auto">
            <TextEditor currentPage={tabs[activeTabIndex].name}/>
          </div>
        }
      </Panel>
      <HighlightHandler horizontal />
    </>
  );
}