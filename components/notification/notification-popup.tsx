'use client'
import { useDispatch } from "react-redux";
import { hideNotification } from "../redux/slices/notification-slice";
import { useEffect } from "react";
import { setPendingCommand } from "../redux/slices/console-commands-slice";

export interface NotificationProps {
  id: string;
  title: string;
  body: string;
  type: 'warning' | 'error' | 'info' | 'pass';
  actionButton?: string;
  actionButtonCb: string;
  secondaryButton?: string;
  secondaryButtonCb: string;
  onClose?: string;
}

export function Notification({
  id,
  title,
  body,
  actionButton,
  actionButtonCb, 
  secondaryButton, 
  secondaryButtonCb,
  type,
  onClose
}: NotificationProps) {
  const dispatch = useDispatch();
  
  // This approach is not great, not terrible
  const callbackMap: Record<string, () => void> = {
    'spareDuck': () => dispatch(setPendingCommand('hwmemsize=$(sysctl -n hw.memsize)')),
    'killDuck': () => dispatch(setPendingCommand('pkill -KILL duck.exe')),
    'closeNotification': () => {},
  }
  
  useEffect(() => {

    // Make the notification persistent if its a problem
    if (type === 'warning' || type === 'error') {
      return
    }

    const hideTimer = setTimeout(() => {
      dispatch(hideNotification(id));
    }, 5000);
  
    return () => {
      clearTimeout(hideTimer);
    };
  
  }, [])

  const handleOnClose = () => {
    if (onClose) {
      callbackMap[onClose] && callbackMap[onClose]()
    }

    dispatch(hideNotification(id));
  };

  return (
    <div className={`flex flex-col p-5 w-[25vw] bg-notif-bg text-text-normal text-sm shadow-[0px_0px_20px_5px_#00000044]`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={`/svg/ide/type-${type}.svg`} alt="Close Icon" width={24} className="select-disable" />
          <span>{title}</span>
        </div>
        <button onClick={handleOnClose} className="hover:bg-hover-dark rounded-md">
          <img src='/svg/ide/close.svg' alt="Close Icon" width={24} />
        </button>
      </div>
      <p className="pb-5 pt-2">{body} </p>
      <div className="flex gap-5 self-end">
        {
          actionButton &&
          <button className='p-2 shadow-dark shadow-sm rounded-none whitespace-nowrap bg-accent hover:bg-selection-color'
            onClick={() => {
              console.log('calling command map of', actionButtonCb, 'aka', callbackMap[actionButtonCb]);
              
              callbackMap[actionButtonCb] && callbackMap[actionButtonCb]()
              handleOnClose();
            }}
          >
            {actionButton}
          </button>
        }
        {
          secondaryButton &&
          <button className="p-2 shadow-dark shadow-sm rounded-none bg-hover-dark whitespace-nowrap"
            onClick={() => {
              callbackMap[secondaryButtonCb] && callbackMap[secondaryButtonCb]()
              handleOnClose();
            }}
          >
            {secondaryButton}
          </button>
        }
      </div>
    </div>
  )
}