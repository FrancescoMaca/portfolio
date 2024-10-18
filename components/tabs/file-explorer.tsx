'use client'
import React, { useState } from 'react';
import FileExplorerItem from './file-explorer/file-explorer-item';
import { fileStructure } from './file-explorer/file-structure';
import { useDispatch } from 'react-redux';
import { showNotification } from '../redux/slices/notification-slice';
import { generateUUID } from '../utils/helpers';
import { NotificationProps } from '../notification/notification-popup';

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

export default function FileExplorer() {
  const dispatch = useDispatch()
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const [collapsedAll, setCollapsedAll] = useState<boolean>(false);

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

  return (
    <div className="flex flex-col h-full pt-2 bg-dark text-white select-disable">
      <div className='flex justify-between items-center px-3 mb-2'>
        <span className='uppercase text-sm text-text-normal whitespace-nowrap overflow-hidden text-ellipsis block'>
          Folders: portfolio
        </span>
        <div className='flex gap-2 ml-5'>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={createFile}
          >
            <img src="/svg/ide/new-file.svg" alt="New File Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={createFolder}
          >
            <img src="/svg/ide/new-folder.svg" alt="New Folder Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={refresh}
          >
            <img src={`/svg/ide/${isRefreshing ? 'loading' : 'refresh'}.svg`} alt="Refresh Icon" title='' width={20}
              className={`${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={collapseAll}
          >
            <img src="/svg/ide/collapse-all.svg" alt="More Icon" title='' width={20} />
          </button>
        </div>
      </div>
      <div className='overflow-y-auto overflow-x-hidden'>
        {fileStructure.map((item, index) => (
          <FileExplorerItem key={index} item={item} level={0} allCollapsed={collapsedAll} />
        ))}
      </div>
    </div>
  );
}