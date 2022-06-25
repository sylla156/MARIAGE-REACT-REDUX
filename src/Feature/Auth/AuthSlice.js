import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    value: 0
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

  },
});

export const {login} = AuthSlice.actions;
export default AuthSlice.reducer;