import { configureStore } from "@reduxjs/toolkit";

import FormReducer from "./FormSlice";
import authReducer from "./authSlice";
import FetchReducer from "./fetchSlice";
import appointReducer from "./appointSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    forms: FormReducer,
    fetch_app: FetchReducer,
    appointment: appointReducer,
  },
});
