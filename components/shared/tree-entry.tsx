import React, { useState } from 'react';

type TreeEntryProps = {
    title: string;
    icon: string;
    isDirectory?: boolean;
    isRootDirectory?: boolean;
    children?: React.ReactNode;
};

export default function TreeEntry({title, children, isDirectory, icon, isRootDirectory}: TreeEntryProps) {

    const [isOpen, setIsOpen] = useState(true)
    
    return (
        <div className={`relative serif text-sm font-bold ml-[${isRootDirectory ? 0 : 1}rem]`}>
            <div className='flex items-center mb-2 hover:cursor-pointer' onClick={() => { if (isDirectory) setIsOpen(!isOpen) }}>
                <img src={icon} alt=">" className={`mr-2 w-[24px] h-[24px] ${isOpen || !isRootDirectory ? '' : '-rotate-90'}`} />
                <h3 className='select-none'>{title}</h3>
            </div>
            <div className={`${isOpen ? '' : 'invisible'}`}>
                {isOpen && <>{children}</>}
            </div>
        </div>
    );
};
