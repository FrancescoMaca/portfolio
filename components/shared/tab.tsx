"use client";
import React, { useEffect, useState } from "react";

export default function Tab({ title }: { title: string }) {
  const [isActiveTab, setIsActiveTab] = useState<boolean>(false)
  const [pages, _] = useState<string[]>(['home-page.tsx', 'project-page.tsx', 'contact-page.tsx']);
  const tabRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {

    setIsActiveTab(window.location.pathname.endsWith(title))
  }, []);

  const closeTab = () => {
    const currentTab = tabRef.current;

    if (!currentTab || !currentTab.parentElement) {
      return;
    }

    // The check childs > 1 is temporary until I create the no-page.tsx file
    if (currentTab.parentElement.children.length > 1) {
      currentTab.parentElement.removeChild(currentTab)
    }
  };

  return (
    <div
      ref={tabRef}
      className={`flex justify-between hover:bg-lighter-dark-gray ${isActiveTab ? "bg-lighter-dark-gray" : "bg-dark-gray"} border-light-gray p-2 min-w-max w-1/4 max-w-[15rem] text-white`}
      onClick={() => (window.location.href = title)}
    >
      <div className="flex items-center min-w-fit">
        <img
          src="./svg/react.svg"
          alt=">"
          width={20}
          height={20}
          className="mr-2"
        />
        <h3>{title}</h3>
      </div>
      <div
        className="flex items-center aspect-square ml-4 min-w-[20px]"
        onClick={(e) => {
          e.stopPropagation();
          closeTab();
        }}
      >
        <img
          src="./svg/close.svg"
          alt="x"
          width={20}
          height={20}
          className="p-1 rounded-md hover:bg-light-gray hover:cursor-pointer"
        />
      </div>
    </div>
  );
}
