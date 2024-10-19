import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSProperties } from "react";
import { atomOneDark, atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IdeControlsProps {
  needsDarken: boolean;
  theme: {[key: string]: CSSProperties};
  themeName: string;
  prevTheme: {[key: string]: CSSProperties} | null;
  prevThemeName: string;
}

const themeMap = {
  'atomOneDark': atomOneDark,
  'atelierCaveDark': atelierCaveDark
}

const initialState: IdeControlsProps = {
  needsDarken: false,
  theme: themeMap['atomOneDark'],
  themeName: 'atomOneDark',
  prevTheme: null,
  prevThemeName: 'atomOneDark',
}


const ideControls = createSlice({
  name: 'ide-controls',
  initialState,
  reducers: {
    darkenScreen: (state, action: PayloadAction<boolean>) => {
      state.needsDarken = action.payload
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.prevTheme = state.theme
      state.prevThemeName = state.themeName
      state.theme = themeMap[action.payload]
      state.themeName = action.payload
    },
    undoLastThemeChange: (state) => {
      if (state.prevTheme) {
        const prevThemeName = state.prevThemeName
        const prevTheme = state.prevTheme

        state.prevThemeName = state.themeName
        state.prevTheme = state.theme

        state.themeName = prevThemeName
        state.theme = prevTheme
      }
    }
  }
})

export const { darkenScreen, changeTheme, undoLastThemeChange } = ideControls.actions
export default ideControls.reducer