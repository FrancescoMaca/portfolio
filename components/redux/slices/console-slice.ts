import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Log {
  type: string;
  content: string;
  timestamp: string;
}

interface ConsoleState {
  logs: Log[];
}

const initialState: ConsoleState = {
  logs: []
};

const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<Log>) => {
      state.logs.push(action.payload);

      if (state.logs.length > 20) {
        state.logs.unshift();
      }
    },
    clearLogs: (state) => {
      state.logs = [];
    }
  }
});

export const { addLog, clearLogs } = consoleSlice.actions;
export default consoleSlice.reducer;