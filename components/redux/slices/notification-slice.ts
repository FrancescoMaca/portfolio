import { NotificationProps } from '@/components/notification/notification-popup';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  notifications: NotificationProps[]
}

const initialState: NotificationState = {
  notifications: []
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationProps>) => {      
      state.notifications.unshift(action.payload)
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