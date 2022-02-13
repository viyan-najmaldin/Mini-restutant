import { createSlice } from "@reduxjs/toolkit";
const iThemeState = {
  isDark: JSON.parse(localStorage.getItem("darktheme")) || false,
};
const ThemeSlice = createSlice({
  name: "theme",
  initialState: iThemeState,
  reducers: {
    toggle(state, action) {
      state.isDark = !state.isDark;
      localStorage.setItem("darktheme", state.isDark);
    },
  },
});
export const ThemeActions = ThemeSlice.actions;
export default ThemeSlice.reducer;
