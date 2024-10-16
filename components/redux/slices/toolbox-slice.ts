import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToolboxItemData } from '../../toolbox/toolbox-item';

interface ToolboxState {
  activeItem: ToolboxItemData;
}

const initialState: ToolboxState = {
  activeItem: { text: 'Folders', icon: 'files' },
};

const toolboxSlice = createSlice({
  name: 'toolbox',
  initialState,
  reducers: {
    setActiveToolboxItem: (state, action: PayloadAction<ToolboxItemData>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveToolboxItem } = toolboxSlice.actions;
export default toolboxSlice.reducer;