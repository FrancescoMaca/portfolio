'use client'
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function BottomBar() {
  const notifications = useSelector((state: RootState) => state.notification.notifications);
  const mustNotify = notifications.length !== 0

  return (
    <div className="flex justify-between border-t-[1px] border-t-border-panel text-text-normal">
      <div className="flex">
        <BottomBarEntry hoverDisable>
          <span>©</span>
          <span className="text-sm">{new Date().getFullYear()} Francesco Macaluso</span>
        </BottomBarEntry>
      </div>
      <div className="flex">
        <BottomBarEntry>
          <img src={`/svg/ide/bell${mustNotify ? '-dot' : ''}.svg`} alt="Empty Notification List"
            title={`${mustNotify ? `There are ${notifications.length} notification${notifications.length > 1 ? 's' : ''} to see` : 'No new notifications'}`}
            width={18} />
        </BottomBarEntry>
        <BottomBarEntry icon="/svg/ide/rss.svg">
          <span>Go Live</span>
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
        <img src={icon} alt="BB Icon" title="" width={20}/>
      }
      {children}
      {
        icon && right &&
        <img src={icon} alt="BB Icon" title="" width={20}/>
      }
    </div>
  )
}