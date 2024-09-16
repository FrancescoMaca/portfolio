import { ToolboxItemData } from '@/components/toolbox/toolbox-item';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolboxState {
  activeTab: ToolboxItemData;
}

const initialState: ToolboxState = {
  activeTab: { text: 'Folders', icon: 'files' }
};

const toolboxSlice = createSlice({
  name: 'toolbox',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<ToolboxItemData>) => {
      state.activeTab = action.payload;
    }
  }
});

export const { setActiveTab } = toolboxSlice.actions;
export default toolboxSlice.reducer;