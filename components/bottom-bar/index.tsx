'use client'
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Image from "next/image";

export default function BottomBar() {
  const { activeTabIndex, tabs } = useSelector((state: RootState) => state.tabs);
  const notifications = useSelector((state: RootState) => state.notification.notifications);
  const mustNotify = notifications.length !== 0
  
  return (
    <div className="flex justify-between border-t-[1px] border-t-border-panel text-text-normal select-disable">
      <div className="flex">
        <BottomBarEntry hoverDisable>
          <span className="text-xs md:text-sm">©</span>
          <span className="text-xs md:text-sm">{new Date().getFullYear()} Francesco Macaluso</span>
        </BottomBarEntry>
      </div>
      <div className="flex">
        {
          tabs.length > 0 &&
          <div className="flex items-center gap-2 p-2 bg-dark hover:bg-hover-dark text-xs md:text-sm group">
            <span className="inline-flex">
              <span className="group-hover:animate-push-left">{`{`}</span>
              <span className="group-hover:animate-push-right">{`}`}</span>
            </span>
            {
              tabs[activeTabIndex].substring(0, tabs[activeTabIndex].indexOf('.'))
            }
          </div>
        }
        <BottomBarEntry>
          <Image src={`/svg/ide/bell${mustNotify ? '-dot' : ''}.svg`} alt="Empty Notification List"
            title={`${mustNotify ? `There are ${notifications.length} notification${notifications.length > 1 ? 's' : ''} to see` : 'No new notifications'}`}
            width={18} 
            height={18} 
          />
        </BottomBarEntry>
        <BottomBarEntry icon="/svg/ide/rss.svg">
          <span className="text-xs md:text-sm">Go Live</span>
        </BottomBarEntry>
      </div>
    </div>
  )
}

interface BottomBarEntryProps {
  children?: React.ReactNode;
  icon?: string;
  right?: boolean;
  hoverDisable?: boolean;
}

function BottomBarEntry({ children, icon, right, hoverDisable}: BottomBarEntryProps) {

  return (
    <div className={`flex items-center gap-2 p-2 bg-dark ${hoverDisable ? '' : 'hover:bg-hover-dark'}`}>
      {
        icon && !right &&
        <Image src={icon} alt="BB Icon" title="" width={20} height={20} />
      }
      {children}
      {
        icon && right &&
        <Image src={icon} alt="BB Icon" title="" width={20} height={20} />
      }
    </div>
  )
}