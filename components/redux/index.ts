'use client'
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tabReducer from './slices/editor-tab-slice'
import toolboxReducer from './slices/toolbox-slice'
import consoleTabReducer from './slices/console-tab-slice'
import notificationReducer from './slices/notification-slice'
import consoleCommandsReducer from './slices/console-commands-slice'
import loadingReducer from './slices/webpage-loading-slice'
import ideControlsReducer from './slices/ide-controls-slice'
import consoleReducer from './slices/console-slice'

const consolePersistConfig = {
  key: 'console',
  storage,
};

const ideControlsPersistConfig = {
  key: 'ideControls',
  storage,
};

// Only wrap the reducers you want to persist
const persistedConsoleReducer = persistReducer(consolePersistConfig, consoleReducer);
const persistedIdeControlsReducer = persistReducer(ideControlsPersistConfig, ideControlsReducer);

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    toolbox: toolboxReducer,
    consoleTabs: consoleTabReducer,
    consoleCommands: consoleCommandsReducer,
    notification: notificationReducer,
    loading: loadingReducer,
    ideControls: persistedIdeControlsReducer,
    console: persistedConsoleReducer
  },
  // Important: needed to work with non-serializable values that redux-persist adds
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;