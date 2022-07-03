import { createSlice } from "@reduxjs/toolkit";

export const EventSlice = createSlice({
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

export const {login} = EventSlice.actions;
export default EventSlice.reducer;