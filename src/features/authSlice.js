import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const token = localStorage.getItem("userToken");
const user = localStorage.getItem("userId");
const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");

const city = localStorage.getItem("city");
const state = localStorage.getItem("state");
const gender = localStorage.getItem("gender");
const zip = localStorage.getItem("zip");
const address = localStorage.getItem("address");
const lastname = localStorage.getItem("lastname");
const phone = localStorage.getItem("phone");
const dob = localStorage.getItem("dob");
const phase = localStorage.getItem("phase");
const is_Online = localStorage.getItem("is_Online");

const plan = localStorage.getItem("plan");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user,
    userName,
    userEmail,
    token: token,
    isFetching: false,
    error: false,
    errMsg: "",

    city: city,
    state: state,
    address,
    zip,
    gender,
    lastname,
    phone,
    dob,
    phase,
    plan,
    is_Online,
  },
  reducers: {
    setProfile: (state, action) => {
      state.userName = action.payload?.name;
      state.userEmail = action.payload?.email;
      state.userPhoneNumber = action.payload?.phoneNumber;
    },

    loginStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },

    loginSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      state.user = action?.payload?.user?._id;
      state.userName = action?.payload?.user?.firstName;
      state.userEmail = action?.payload.user?.email;
      state.gender = action?.payload.user?.gneder;
      state.address = action?.payload.user?.address;
      state.city = action?.payload.user?.city;

      state.token = action?.payload?.token;
      state.dob = action?.payload?.user?.dob;

      state.city = action?.payload?.user?.city;
      state.state = action?.payload?.user?.state;
      state.gender = action?.payload?.user?.gender;
      state.zip = action?.payload?.user?.zip;
      state.address = action?.payload?.user?.address;
      state.lastname = action?.payload?.user?.lastName;
      state.phone = action?.payload?.user?.phone;
      state.phase = action?.payload.user?.phase;
      state.plan = action?.payload?.user?.plan;
      state.is_Online = `${action?.payload?.user?.is_online}`;
      localStorage.setItem("plan", state.plan);
      localStorage.setItem("userToken", state.token);
      localStorage.setItem("userId", state.user);
      localStorage.setItem("userName", state.userName);
      localStorage.setItem("userEmail", state.userEmail);
      localStorage.setItem("phase", state.phase);
      localStorage.setItem("city", state.city);
      localStorage.setItem("state", state.state);
      localStorage.setItem("gender", state.gender);
      localStorage.setItem("zip", state.zip);
      localStorage.setItem("address", state.address);
      localStorage.setItem("lastname", state.lastname);
      localStorage.setItem("phone", state.phone);
      localStorage.setItem("dob", state.dob);
      localStorage.setItem("is_Online", state.is_Online);
    },

    loginFailure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetching = false;
      state.error = true;
    },

    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
    Start: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    EditSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      state.user = action?.payload?.athlete?._id;
      state.userName = action?.payload?.athlete?.firstName;
      state.userEmail = action?.payload.athlete?.email;
      state.gender = action?.payload.athlete?.gneder;
      state.address = action?.payload.athlete?.address;
      state.city = action?.payload.athlete?.city;

      state.dob = action?.payload?.athlete?.dob;

      state.city = action?.payload?.athlete?.city;
      state.state = action?.payload?.athlete?.state;
      state.gender = action?.payload?.athlete?.gender;
      state.zip = action?.payload?.athlete?.zip;
      state.address = action?.payload?.athlete?.address;
      state.lastname = action?.payload?.athlete?.lastName;
      state.phone = action?.payload?.athlete?.phone;

      localStorage.setItem("userId", state.user);
      localStorage.setItem("userName", state.userName);
      localStorage.setItem("userEmail", state.userEmail);

      localStorage.setItem("city", state.city);
      localStorage.setItem("state", state.state);
      localStorage.setItem("gender", state.gender);
      localStorage.setItem("zip", state.zip);
      localStorage.setItem("address", state.address);
      localStorage.setItem("lastname", state.lastname);
      localStorage.setItem("phone", state.phone);
      localStorage.setItem("dob", state.dob);
    },
    PlanSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      state.user = action?.payload?.user?._id;
      state.userName = action?.payload?.user?.firstName;
      state.userEmail = action?.payload.user?.email;
      state.gender = action?.payload.user?.gneder;
      state.address = action?.payload.user?.address;
      state.city = action?.payload.user?.city;

      state.dob = action?.payload?.user?.dob;

      state.city = action?.payload?.user?.city;
      state.state = action?.payload?.user?.state;
      state.gender = action?.payload?.user?.gender;
      state.zip = action?.payload?.user?.zip;
      state.address = action?.payload?.user?.address;
      state.lastname = action?.payload?.user?.lastName;
      state.phone = action?.payload?.user?.phone;
      state.phase = action?.payload.user?.phase;
      state.plan = action?.payload?.user?.plan;
      localStorage.setItem("plan", state.plan);
      localStorage.setItem("userId", state.user);
      localStorage.setItem("userName", state.userName);

      localStorage.setItem("userEmail", state.userEmail);
      localStorage.setItem("phase", state.phase);
      localStorage.setItem("city", state.city);
      localStorage.setItem("state", state.state);
      localStorage.setItem("gender", state.gender);
      localStorage.setItem("zip", state.zip);
      localStorage.setItem("address", state.address);
      localStorage.setItem("lastname", state.lastname);
      localStorage.setItem("phone", state.phone);
      localStorage.setItem("dob", state.dob);
    },
    Success: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
    },
    Failure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  setProfile,
  logOut,
  loginStart,
  loginSuccess,
  loginFailure,
  Start,
  Success,
  Failure,
  EditSuccess,
  PlanSuccess,
} = authSlice.actions;
export default authSlice.reducer;
