import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToolboxItemData } from '../../toolbox/toolbox-item';

interface ToolboxState {
  activeItem: ToolboxItemData;
  collapsed: boolean;
}

const initialState: ToolboxState = {
  activeItem: { text: 'Folders', icon: 'files' },
  collapsed: true,
};

const toolboxSlice = createSlice({
  name: 'toolbox',
  initialState,
  reducers: {
    setActiveToolboxItem: (state, action: PayloadAction<ToolboxItemData>) => {
      state.activeItem = action.payload;
    },
    setItemCollapse: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload
    }
  },
});

export const { setActiveToolboxItem, setItemCollapse } = toolboxSlice.actions;
export default toolboxSlice.reducer;