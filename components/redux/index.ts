import { configureStore } from '@reduxjs/toolkit';
import toolboxReducer from './slices/tab-slice'

const store = configureStore({
  reducer: {
    toolbox: toolboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;