import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
  tabs: string[];
  activeTabIndex: number;
}

const initialState: TabState = {
  tabs: [
    'Problems',
    'Output',
    'Console'
  ],
  activeTabIndex: 2,
};

const tabSlice = createSlice({
  name: 'console-tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTabIndex = action.payload;
    }
  }
})

export const { setActiveTab } = tabSlice.actions
export default tabSlice.reducer