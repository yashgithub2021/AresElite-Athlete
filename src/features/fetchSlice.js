import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch_app",
  initialState: {
    isFormFetching: false,
    error: false,
    errMsg: "",
    appointments: [],
    prescriptions: [],
    totalPages: [],
    bookings: [],
  },
  reducers: {
    FetchStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    FetchSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      state.appointments = action?.payload?.appointments;
      state.prescriptions = action?.payload?.data;
      state.bookings = action?.payload?.data;
      state.totalPages = action?.payload?.totalPages;
    },
    FetchFailure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { FetchFailure, FetchStart, FetchSuccess } = fetchSlice.actions;
export default fetchSlice.reducer;
