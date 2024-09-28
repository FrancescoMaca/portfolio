import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Tab {
  name: string;
  isLink: boolean;
}

interface TabState {
  tabs: Tab[];
  activeTabIndex: number;
}

const initialState: TabState = {
  tabs: [
    { name: 'page.tsx', isLink: true },
    { name: 'project-page.tsx', isLink: true },
    { name: 'company-page.tsx', isLink: true },
    { name: 'contact-page.tsx', isLink: true }
  ],
  activeTabIndex: 0,
};

const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<{ name: string; isLink: boolean }>) => {
      const newTabIndex = state.tabs.findIndex((tab) => tab.name === action.payload.name)

      // IF you are adding a tab that is not already open
      if (newTabIndex === -1) {
        state.tabs.push(action.payload)
        state.activeTabIndex = state.tabs.length - 1
      }
      else {
        // Otherwise just focus that tab
        state.activeTabIndex = newTabIndex
      }
    },
    closeTab: (state, action: PayloadAction<string>) => {
      const index = state.tabs.findIndex(tab => tab.name === action.payload)
      if (index !== -1) {
        state.tabs.splice(index, 1)
        if (state.activeTabIndex >= state.tabs.length) {
          state.activeTabIndex = state.tabs.length - 1
        }
      }
    },
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTabIndex = action.payload;
    },
    closeOtherTabs: (state, action: PayloadAction<string>) => {
      const tabToKeep = state.tabs.find(tab => tab.name === action.payload);
      if (tabToKeep) {
        state.tabs = [tabToKeep];
        state.activeTabIndex = 0;
      }
    },
    closeAllTabs: (state) => {
      state.tabs = [];
      state.activeTabIndex = -1;
    }
  },
});

export const { addTab, closeTab, setActiveTab, closeOtherTabs, closeAllTabs } = tabSlice.actions;
export default tabSlice.reducer;