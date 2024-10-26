'use client'
import React, { RefObject, useEffect, useState } from 'react';
import FileExplorerItem from './file-explorer/file-explorer-item';
import { fileStructure } from './file-explorer/file-structure';
import { useDispatch } from 'react-redux';
import { showNotification } from '../redux/slices/notification-slice';
import { generateUUID } from '../utils/helpers';
import { NotificationProps } from '../notification/notification-popup';
import Image from 'next/image';
import { bake_cookie, read_cookie } from 'sfcookies';
import { ImperativePanelHandle } from 'react-resizable-panels';

const fileCreationNotification: NotificationProps = {
  id: '',
  title: 'Action Denied',
  body: 'You cannot create a file at the moment.',
  actionButton: 'Ok',
  actionButtonCb: '',
  secondaryButton: '',
  secondaryButtonCb: '',
  type: 'error',
  timeout: 2000
}

const folderCreationNotification: NotificationProps = {
  id: '',
  title: 'Action Denied',
  body: 'You cannot create a folder at the moment.',
  actionButton: 'Ok',
  actionButtonCb: '',
  secondaryButton: '',
  secondaryButtonCb: '',
  type: 'error',
  timeout: 2000
}

export default function FileExplorer({ parentPanelRef } : { parentPanelRef: RefObject<ImperativePanelHandle> }) {
  const dispatch = useDispatch()
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const [collapsedAll, setCollapsedAll] = useState<boolean>(false);
  const [tooltipVisible, isTooltipVisible] = useState<boolean>(false);

  useEffect(() => {
    isTooltipVisible(!!read_cookie('file-explorer-tooltip'))
  }, [tooltipVisible])

  const createFile = () => dispatch(showNotification({ ...fileCreationNotification, id: generateUUID() }))
  const createFolder = () => dispatch(showNotification({ ...folderCreationNotification, id: generateUUID()}))
  const refresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, Math.floor(Math.random() * 500));
  }
  
  const collapseAll = () => {
    setCollapsedAll(!collapsedAll)
  }

  const hideTooltip = () => {
    isTooltipVisible(false)
    bake_cookie('file-explorer-tooltip', '')
  }

  return (
    <div className="flex flex-col h-full pt-2 bg-dark text-white select-disable">
      <div className='flex justify-between items-center px-3 mb-2'>
        <span className='uppercase text-xs md:text-sm text-text-normal truncate'>
          Folders: portfolio
        </span>
        <div className='flex gap-2 ml-5'>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={createFile}
          >
            <Image src="/svg/ide/new-file.svg" alt="New File Icon" title='' width={20} height={20}/>
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={createFolder}
          >
            <Image src="/svg/ide/new-folder.svg" alt="New Folder Icon" title='' width={20} height={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={refresh}
          >
            <Image src={`/svg/ide/${isRefreshing ? 'loading' : 'refresh'}.svg`} alt="Refresh Icon" title='' width={20} height={20}
              className={`${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={collapseAll}
          >
            <Image src="/svg/ide/collapse-all.svg" alt="More Icon" title='' width={20} height={20} />
          </button>
        </div>
      </div>
      <div className='overflow-y-auto overflow-x-hidden'>
        {fileStructure.map((item, index) => (
          <FileExplorerItem key={index} item={item} level={0} allCollapsed={collapsedAll} parentPanel={parentPanelRef} />
        ))}
        {
          tooltipVisible && 
          <div className='flex flex-col mt-2 mb-5 px-9 text-center text-xs md:text-sm text-text-normal'>
            <Image src="/svg/ide/close.svg" alt='Close Icon' title='' width={20} height={20}
              className='self-end rounded-md hover:bg-hover-dark cursor-pointer'
              onClick={hideTooltip}
            />
              <span className='truncate'>This whole codebase is in a public</span>
              <span className='truncate'>repo if you want to check it out!</span>
          </div>
        }
      </div>
    </div>
  );
}