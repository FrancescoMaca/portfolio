'use client'
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Notification } from './notification-popup'

export default function NotificationProvider() {
  const notifications = useSelector((state: RootState) => state.notification.notifications);

  return (
    <div className="fixed min-w-[320px] bottom-10 right-10 flex flex-col-reverse gap-5 z-40">
      {notifications.map((notificationData, index) => (
        <Notification
          key={index}
          id={notificationData.id}
          title={notificationData.title}
          body={notificationData.body}
          type={notificationData.type}
          actionButton={notificationData.actionButton}
          actionButtonCb={notificationData.actionButtonCb}
          onClose={notificationData.onClose}
          secondaryButton={notificationData.secondaryButton}
          secondaryButtonCb={notificationData.secondaryButtonCb}
          hasCloseButton={notificationData.hasCloseButton ?? true}
        />
      ))}
    </div>
  );
}