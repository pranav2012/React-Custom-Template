import { createSlice } from "@reduxjs/toolkit";

export interface errorState {
  status: boolean;
  type: string;
  message: string;
}

const initialState: errorState = {
  status: false,
  type: "",
  message: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.status = payload.status;
      state.type = payload.type;
      state.message = payload.message;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
