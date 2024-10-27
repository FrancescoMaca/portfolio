import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
  tabs: string[];
  activeTabIndex: number;
  collapsed: boolean;
}

const initialState: TabState = {
  tabs: [
    'Problems',
    'Output',
    'Console'
  ],
  activeTabIndex: 2,
  collapsed: false
};

const tabSlice = createSlice({
  name: 'console-tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTabIndex = action.payload;
    },
    setConsoleCollpased: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload
    }
  }
})

export const { setActiveTab, setConsoleCollpased } = tabSlice.actions
export default tabSlice.reducer