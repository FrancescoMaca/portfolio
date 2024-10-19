'use client'
import { MutableRefObject, useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/slices/notification-slice";
import { generateUUID } from "../utils/helpers";
import { SourceControlDropdown } from "./source-control/dropdown-entry";
import { CommitDropdown } from "./source-control/commit-dropdown";
import { RemotesDropdown } from "./source-control/remotes-dropdown";
import { ContributionDropdown } from "./source-control/contributions-dropdown";
import { getPanelElement, ImperativePanelHandle } from "react-resizable-panels";

export default function SourceControl({ parentPanelRef }: { parentPanelRef: MutableRefObject<ImperativePanelHandle>}) {
  const dispatch = useDispatch()
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const onCardHover = () => {
    const percentage = (100 * 360) / (window.innerWidth - 64) 
    
    if (parentPanelRef.current.getSize() < percentage) {
      const panelhtml = getPanelElement(parentPanelRef.current.getId())
      panelhtml.classList.add('transition-all')
      parentPanelRef.current.resize(percentage)
      setTimeout(() => panelhtml.classList.remove('transition-all'), 300)
    }
  }

  const dropdowns = [
    { title: 'commits', content: <CommitDropdown expanded={expandedSection === 'commits'} /> },
    { title: 'contributors', content: <ContributionDropdown expanded={expandedSection === 'contributors'} onCardHover={onCardHover}/> },
    { title: 'remotes', content: <RemotesDropdown expanded={expandedSection === 'remotes'} /> },
  ]

  const refresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, Math.floor(Math.random() * 500));
  }

  const commit = () => {
    dispatch(showNotification({
      id: generateUUID(),
      title: "Git Commit Message",
      body: "In case you were wondering, by using `git commit -m \"[message]\"` you can send me email containing a specific message! Good to know right?",
      type: "info",
      actionButton: "Commit message",
      actionButtonCb: "",
      secondaryButton: "No thanks",
      secondaryButtonCb: ""
    }))
  }

  const handleToggle = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };
  
  return (
    <div className="flex flex-col h-full pt-2 bg-dark text-white select-disable">
      <div className='flex justify-between items-center px-3 mb-2'>
        <span className='uppercase text-text-normal text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
          source control
        </span>
        <div className='flex gap-2 ml-5'>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={commit}
          >
            <img src="/svg/ide/check.svg" alt="Check Icon" title='' width={20} />
          </button>
          <button className='hover:bg-hover-dark rounded-md p-1 min-w-[28px]'
            onClick={refresh}
          >
            <img src={`/svg/ide/${isRefreshing ? 'loading' : 'refresh'}.svg`} alt="More Icon" title='' width={20}
              className={`${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col h-full min-h-0 overflow-visible'>
      {
        dropdowns.map((section) => (
          <SourceControlDropdown
            key={section.title}
            title={section.title}
            isExpanded={expandedSection === section.title}
            onToggle={() => handleToggle(section.title)}
          >
            {section.content}
          </SourceControlDropdown>
        ))
      }
      </div>
    </div>
  )
}