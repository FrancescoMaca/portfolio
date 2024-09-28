import { createSlice } from "@reduxjs/toolkit";

interface EEProps {
  duckKilled: boolean;
}

const initialState: EEProps = {
  duckKilled: false
}

const EEslice = createSlice({
  name: 'ee',
  initialState,
  reducers: {
    duckKilled: (state) => {
      state.duckKilled = true
    }
  }
})

export const { duckKilled } = EEslice.actions
export default EEslice.reducer