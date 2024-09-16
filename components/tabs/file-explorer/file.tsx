import React from 'react';

interface FileProps {
  name: string | string[];
  icon: string;
  isFolder?: boolean;
  isOpen?: boolean;
  level: number;
  onToggle?: () => void;
}

export default function File({ name, icon, isFolder = false, isOpen = false, level, onToggle }: FileProps) {
  return (
    <div 
      className={`flex items-center py-1 cursor-pointer hover:bg-control-disable`} 
      style={{ paddingLeft: `${(level * 16) + 12 + (isFolder ? 0 : 24)}px` }}
      onClick={onToggle}
    >
      <div className="flex mr-2">
        {
          isFolder &&
          <img
            src={`/svg/ide/chevron-${isOpen ? 'down' : 'right'}.svg`}
            alt="Chevron Right"
            title=""
            width={20}
            height={20}
            className='min-w-[20px] min-h-[20px] mr-1'
          />
        }
        <img 
          src={`/svg/files/${isFolder ? 'folder_' : 'file_'}${icon}${isOpen ? '_opened' : ''}.svg`} 
          alt={isFolder ? "Folder Icon" : "File Icon"} 
          width={20}
          height={20}
          className='min-w-[20px] min-h-[20px]'
        />
      </div>
      <div>
        <p className="text-sm">
          {
            isFolder && Array.isArray(name) ?
              formatFolderName(name) :
              <span className='whitespace-nowrap'>{name}</span>
          }
        </p>
      </div>
    </div>
  )
}

function formatFolderName(name: string[]) {
  return (
    <>
      {
        name.map((fName: string, i: number) => {
          return (
            <span key={i} className=''>
              <span className='hover:underline'>{fName}</span>
              {i === name.length ? '' : <span className='text-text-unfocused px-0.5'>/</span>}
            </span>
          )
        })
      }
    </>
  )
}