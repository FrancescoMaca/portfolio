'use client'
import { useDispatch } from "react-redux";
import { hideNotification, showNotification } from "../redux/slices/notification-slice";
import { useEffect } from "react";
import { setPendingCommand } from "../redux/slices/console-commands-slice";
import { generateUUID } from "../utils/helpers";

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
  hasCloseButton?: boolean;
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
  onClose,
  hasCloseButton
}: NotificationProps) {
  const dispatch = useDispatch();
  
  // This approach is not great, not terrible
  const callbackMap: Record<string, () => void> = {
    'spareDuck': () => dispatch(setPendingCommand('hwmemsize=$(sysctl -n hw.memsize)')),
    'killDuck': () => dispatch(setPendingCommand('pkill -KILL duck.exe')),
    'closeNotification': () => {},
    'openSorryDialog': () => setTimeout(() => dispatch(showNotification({
      id: generateUUID(),
      title: 'Ok',
      body: 'ok sorry for telling you. If you want to completely hide notification since you clearly have a problem with them you can...',
      type: 'info',
      actionButton: 'Hide them',
      actionButtonCb: 'hideNotifications',
      secondaryButton: 'No leave them on',
      secondaryButtonCb: ''
    })), 500),
    'hideNotifications': () => setTimeout(() => dispatch(showNotification({
      id: generateUUID(),
      title: 'Ah-ah-ah',
      body: 'You thought you could disable them? Don\'t be so naive, I can do whatever I want here, for example by giving you no choice here :)',
      type: 'error',
      actionButton: 'Ok',
      actionButtonCb: "",
      secondaryButton: 'Ok',
      secondaryButtonCb: ""
    })), 500)
  }

  const handleOnClose = () => {
    if (title === 'Ah-ah-ah') {
      dispatch(showNotification({
        id: generateUUID(),
        title: 'Why trying so hard?',
        body: 'Don\'t think I am not 3 steps ahead of you with being a total ******** :/',
        type: 'error',
        actionButton: 'Ok, sorry',
        actionButtonCb: "",
        secondaryButton: 'Ok',
        secondaryButtonCb: "",
        hasCloseButton: false
      }))
    }

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
        {
          hasCloseButton &&
          <button onClick={handleOnClose} className="hover:bg-hover-dark rounded-md">
            <img src='/svg/ide/close.svg' alt="Close Icon" width={24} />
          </button>
        }
      </div>
      <p className="pb-5 pt-2">{body} </p>
      <div className="flex gap-5 self-end">
        {
          actionButton &&
          <button className='p-2 shadow-dark shadow-sm rounded-none whitespace-nowrap bg-accent hover:brightness-125'
            onClick={() => {              
              callbackMap[actionButtonCb] && callbackMap[actionButtonCb]()
              handleOnClose();
            }}
          >
            {actionButton}
          </button>
        }
        {
          secondaryButton &&
          <button className="p-2 shadow-dark shadow-sm rounded-none bg-hover-dark hover:brightness-125 whitespace-nowrap"
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