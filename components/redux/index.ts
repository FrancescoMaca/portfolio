// components/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tab-slice'
import toolboxReducer from './slices/toolbox-slice'

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    toolbox: toolboxReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;