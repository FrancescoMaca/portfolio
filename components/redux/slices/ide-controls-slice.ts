import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdeControlsProps {
  needsDarken: boolean;
}

const initialState: IdeControlsProps = {
  needsDarken: false
}

const ideControls = createSlice({
  name: 'ee',
  initialState,
  reducers: {
    darkenScreen: (state, action: PayloadAction<boolean>) => {
      state.needsDarken = action.payload
    }
  }
})

export const { darkenScreen } = ideControls.actions
export default ideControls.reducer