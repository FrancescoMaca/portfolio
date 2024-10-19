// components/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/editor-tab-slice'
import toolboxReducer from './slices/toolbox-slice'
import consoleTabReducer from './slices/console-tab-slice'
import notificationReducer from './slices/notification-slice'
import consoleCommandsReducer from './slices/console-commands-slice'
import loadingReducer from './slices/webpage-loading-slice'
import ideControlsReducer from './slices/ide-controls-slice'

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    toolbox: toolboxReducer,
    consoleTabs: consoleTabReducer,
    consoleCommands: consoleCommandsReducer,
    notification: notificationReducer,
    loading: loadingReducer,
    ideControls: ideControlsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;