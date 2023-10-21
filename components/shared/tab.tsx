'use client'
import React, { useEffect } from "react";

export default function Tab({title}: {title: string}) {

    const tabRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentPath = window.location.pathname;
    
        if (currentPath.endsWith(title)) {
          tabRef.current?.classList.toggle('bg-light-gray')
        }
    }, [tabRef]);

    const closeTab = () => {
        const currentTab = tabRef.current;

        if (!currentTab || !currentTab.parentElement) return;

        if (currentTab.parentElement.children.length > 1) {
          currentTab.remove();
        }
    }

    return (
    <div ref={tabRef} className={`flex justify-between bg-${title === 'home-page.tsx' ? 'bg-lighter-dark-gray' : 'dark-gray'} border-light-gray p-2 w-1/4 max-w-[15rem] text-white`}>
        <div className="flex items-center">
            <img src="./svg/react.svg" alt=">"  width={20} height={20} className="mr-2"/>
            <h3>{title}</h3>
        </div>
        <div className="flex items-center aspect-square" onClick={closeTab}>
            <img src="./svg/close.svg" alt="x" width={20} height={20} className="p-1 rounded-md hover:bg-slate-400 hover:cursor-pointer"/>
        </div>
    </div>
    )
}