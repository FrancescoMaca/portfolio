import React from 'react';
import FileExplorerItem from './file-explorer/file-explorer-item';
import { fileStructure } from './file-explorer/file-structure';

export default function FileExplorer() {
  return (
    <div className="flex flex-col h-full pt-2 pb-10 bg-dark text-white overflow-y-auto select-disable">
      <div className='flex justify-between items-center px-3 mb-2'>
        <span className='uppercase text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
          Folders: portfolio
        </span>
        <div className='flex gap-2 ml-5'>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={createFile}
          >
            <img src="/svg/ide/new-file.svg" alt="More Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'>
            <img src="/svg/ide/new-folder.svg" alt="More Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'>
            <img src="/svg/ide/refresh.svg" alt="More Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'>
            <img src="/svg/ide/collapse-all.svg" alt="More Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'>
            <img src="/svg/ide/more.svg" alt="More Icon" title='' width={20} />
          </button>
        </div>
      </div>
      {fileStructure.map((item, index) => (
        <FileExplorerItem key={index} item={item} level={0} />
      ))}
    </div>
  );
}

function createFile() {
  // TODO: Add this
  console.log('creating file');
}