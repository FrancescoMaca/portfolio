import React, { useState, useEffect, useRef } from 'react';

type TreeEntryProps = {
    title: string;
    icon: string;
    isLink?: boolean;
    isDirectory?: boolean;
    isRootDirectory?: boolean;
    isClickable?: boolean;
    children?: React.ReactNode;
};

export default function TreeEntry({title, children, isDirectory, icon, isRootDirectory, isLink, isClickable}: TreeEntryProps) {

    const [isOpen, setIsOpen] = useState(true)
    const [highlight, setHighlight] = useState(false)
    const entryRef = useRef<HTMLDivElement>(null)
    const ml = isRootDirectory ? 'ml-0' : 'ml-4'

    // Changes the icon when the user opens and closes a folder
    let openFolderIconPath = icon
    if (isDirectory && !isRootDirectory) {
        openFolderIconPath = icon.substring(0, icon.indexOf('.svg')) + '-open.svg'
    }
    
    function handleRedirect() {
        if (isLink) {
            window.location.href = title
        }
    }

    return (
        <div ref={entryRef} onClick={handleRedirect}
            className={`relative serif text-sm font-bold ${!isDirectory && isClickable ? 'border-l-2' : ''} border-light-gray ${ml} z-10`}
            onMouseEnter={() => setHighlight(true)}
            onMouseLeave={() => setHighlight(false)}
        >
            <div className={`absolute top-0 left-0 bg-light-gray w-[150%] -ml-20 h-full ${highlight && !isDirectory ? '' : 'invisible'}`}></div>
            <div className='flex items-center p-1 hover:cursor-pointer' onClick={() => { if (isDirectory) setIsOpen(!isOpen) }}>
                <img src={isOpen ? openFolderIconPath : icon} alt=">" width={20} height={20} className={`mr-2 z-10 ${isOpen || !isRootDirectory ? '' : '-rotate-90'}`} />
                <h3 className={`select-none text-white z-10`}>{title}</h3>
            </div>
            <div className={`${isOpen ? '' : 'invisible'}`}>
                {isOpen && <>{children}</>}
            </div>
        </div>
    );
};
