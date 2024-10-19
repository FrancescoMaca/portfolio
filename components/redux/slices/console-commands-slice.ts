import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CliState {
  pendingCommand: string | null;
}

const initialState: CliState = {
  pendingCommand: null
}

const cliSlice = createSlice({
  name: 'console-commands',
  initialState,
  reducers: {
    setPendingCommand: (state, action: PayloadAction<string>) => {
      state.pendingCommand = action.payload;
    },
    clearPendingCommand: (state) => {
      state.pendingCommand = null;
    }

  }
})

export const { setPendingCommand, clearPendingCommand } = cliSlice.actions
export default cliSlice.reducer