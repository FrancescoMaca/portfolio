// components/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/editor-tab-slice'
import toolboxReducer from './slices/toolbox-slice'
import consoleTabReducer from './slices/console-tab-slice'

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    toolbox: toolboxReducer,
    consoleTabs: consoleTabReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;