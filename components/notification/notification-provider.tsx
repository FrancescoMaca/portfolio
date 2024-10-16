'use client'
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Notification } from './notification-popup'

export default function NotificationProvider() {
  const notifications = useSelector((state: RootState) => state.notification.notifications);

  return (
    <div className="fixed min-w-[320px] bottom-10 right-10 flex flex-col-reverse gap-5 z-40">
      {
        notifications.map((data) => {
          return (
            <Notification
              key={Math.random()}
              id={data.id}
              title={data.title}
              body={data.body}
              type={data.type}
              actionButton={data.actionButton}
              actionButtonCb={data.actionButtonCb}
              onClose={data.onClose}
              secondaryButton={data.secondaryButton}
              secondaryButtonCb={data.secondaryButtonCb}
              hasCloseButton={data.hasCloseButton ?? true}
              timeout={data.timeout}
            />
          )
        })
      }
    </div>
  );
}