import { NotificationProps } from '@/components/notification/notification-popup';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// A middleware will map all the cbs to actual functions (*)
interface Notification {
  id: string;
  title: string;
  body: string;
  type: 'warning' | 'error' | 'info' | 'pass';
  actionButton?: string;
  actionButtonCb: string; // *
  secondaryButton?: string;
  secondaryButtonCb: string; // *
  onClose?: string; // *
  hasCloseButton?: boolean;
}

interface NotificationState {
  notifications: Notification[]
}

const initialState: NotificationState = {
  notifications: []
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationProps>) => {
      state.notifications.unshift({...action.payload })
    },
    hideNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;