import React, { useState } from 'react';

type TreeEntryProps = {
    title: string;
    icon: string;
    isDirectory?: boolean;
    isRootDirectory?: boolean;
    isClickable?: boolean;
    children?: React.ReactNode;
};

export default function TreeEntry({title, children, isDirectory, icon, isRootDirectory, isClickable}: TreeEntryProps) {

    const [isOpen, setIsOpen] = useState(true)
    const [backgroundColor, setBackgroundColor] = useState('')

    return (
        <div className={`relative serif text-sm font-bold ml-${isRootDirectory ? '0' : '4'} z-10`}
            onMouseEnter={() => setBackgroundColor('hover:bg-light-gray')}
            onMouseLeave={() => setBackgroundColor('')}
        >
            <div className={`absolute top-0 left-0 ${backgroundColor} w-[150%] -ml-20 h-full ${isDirectory ? 'invisible' : ''}`}></div>
            <div className='flex items-center p-1 hover:cursor-pointer' onClick={() => { if (isDirectory) setIsOpen(!isOpen) }}>
                <img src={icon} alt=">" width={20} height={20} className={`mr-2 z-10 ${isOpen || !isRootDirectory ? '' : '-rotate-90'}`} />
                <h3 className={`select-none text-${isClickable || isDirectory ? 'white' : 'details'} z-10`}>{title}</h3>
            </div>
            <div className={`${isOpen ? '' : 'invisible'}`}>
                {isOpen && <>{children}</>}
            </div>
        </div>
    );
};
