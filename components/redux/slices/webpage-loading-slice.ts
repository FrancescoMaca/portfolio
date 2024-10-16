import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    finishLoading: (_) => {
      return false
    }
  }
})

export const { finishLoading } = loadingSlice.actions
export default loadingSlice.reducer