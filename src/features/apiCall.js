import { toast } from "react-toastify";
import axios from "../utils/axios.js";
import { parseError } from "../utils/parseError.js";
import {
  EditSuccess,
  Failure,
  loginFailure,
  loginStart,
  loginSuccess,
  Start,
  Success,
  PlanSuccess,
} from "./authSlice.js";
import { AppFailure, AppStart, AppSuccess } from "./appointSlice.js";
import { FetchFailure, FetchStart, FetchSuccess } from "./fetchSlice.js";
import { FormFailure, FormStart, FormSuccess } from "./FormSlice.js";
import { useNavigate } from "react-router";
import { ServicesFetch } from "./AllServiceSlice.js";

const ErrorToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const successToastOptions = {
  position: "top-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};
export const login = async (dispatch, user) => {
  dispatch(loginStart());

  const { email, password } = user;

  try {
    const { data } = await axios.post("/api/athlete/login", {
      email,
      password,
    });
    // console.log(data);

    toast.success("Logged in Sucessfully!", successToastOptions);
    await dispatch(loginSuccess(data));
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage);
    dispatch(loginFailure(errorMessage));
  }
};
export const SendOtp = async (dispatch, email) => {
  dispatch(Start());
  // const { email } = email;

  try {
    const { data } = await axios.post(
      "/api/athlete/send-forgot-password-code",
      { email: email }
    );
    // console.log(data);
    toast.success("OTP Sent!", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};

export const GetNotifications = async () => {
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/notification/get-all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("-->", data);
    return data;
  } catch (err) {
    toast.error(err);
  }
};

export const MarkNotificationsRead = async () => {
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.put(
      "/api/notification/mark-all-read",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return data;
  } catch (err) {
    toast.error(err);
  }
};

export const SubmitDrillForm = async (dispatch, { activityId, formData }) => {
  const token = localStorage.getItem("userToken");
  dispatch(FormStart());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    let url = `/api/doctor/update-drill?id=${activityId}`;
    if (activityId) {
      if (formData) {
        // If formData is present, include it in the request body
        const { data } = await axios.put(url, { form: formData }, config);
        dispatch(FormSuccess(data));
      } else {
        // If formData is not present, make a GET request with only query parameters
        const { data } = await axios.put(url, "", config);
        dispatch(FormSuccess(data));
      }
    }
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FormFailure(errorMessage));
  }
};

export const stripestep1 = async (dispatch, { body }) => {
  console.log(body);
  const token = localStorage.getItem("userToken");
  const { data } = await axios.post("/api/payments/createPaymentIntent", body, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
export const stripestep2 = async (dispatch, { body }) => {
  const token = localStorage.getItem("userToken");
  console.log(body);
  const { data } = await axios.put("/api/payments/updatePayment", body, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export const GetRecentBookingsSearch = async (
  dispatch,
  {
    currentPage,
    pageSize,
    searchQuery,
    selectedStatus,
    selectedServiceTypes,
    selectedDate,
  }
) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/athlete/recent-bookings", {
      params: {
        page_no: currentPage,
        per_page_count: pageSize,
        status: selectedStatus,
        service_type: selectedServiceTypes,
        date: selectedDate,
        searchQuery: searchQuery,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(data);
    dispatch(FetchSuccess({ type: "FETCH_BOOKINGS_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const userDetails = async (dispatch) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const data = await axios.get(`/api/athlete/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(FetchSuccess({ type: "FETCH_DRILL_WEEKS", payload: data.data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false;
  }
};

export const GetDrillDetails = async (
  dispatch,
  { selectedWeek, appointmentId, clientId }
) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const data = await axios.get(
      `/api/doctor/get-Drills?clientId=${clientId}&week=${selectedWeek}&appointmentId=${appointmentId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(FetchSuccess({ type: "FETCH_DRILL_WEEKS", payload: data.data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false;
  }
};

export const VerifyOTP = async (dispatch, email, otp) => {
  try {
    const { data } = await axios.post("/api/athlete/validate-code", {
      email: email,
      otp: otp,
    });
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};

export const Register = async (dispatch, values) => {
  dispatch(loginStart());

  try {
    const { data } = await axios.post("/api/athlete/register", values);
    // console.log(data);
    toast.success("Account Created Successfully!", successToastOptions);
    dispatch(loginSuccess(data));
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(loginFailure(errorMessage));
  }
};
export const VerifyOtp = async (dispatch, { email, code }) => {
  dispatch(Start());

  try {
    const { data } = await axios.post("/api/doctor/validate-code", {
      email,
      code,
    });
    // console.log(data);
    toast.success("Verified!", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    // console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};
export const ResetPassword = async (
  dispatch,
  { email, newPassword, confirmPassword }
) => {
  dispatch(Start());
  try {
    const { data } = await axios.put("/api/doctor/reset-password", {
      email,
      newPassword,
      confirmPassword,
    });
    toast.success("Password changed successfully", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    // console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};
export const GetProfileDetails = async (dispatch) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");

  dispatch(Start());
  try {
    const { data } = await axios.get("/api/athlete/get-profile", {
      params: { email }, // Corrected: pass email as an object
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(Success(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetTodayAppointmentDetails = async (dispatch) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get("/api/doctor/recent-bookings", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetTransaction = async (dispatch, { date, service_type }) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get("/api/athlete/transaction", {
      headers: { Authorization: `Bearer ${token}` },
      params: { date: date, service_type: service_type },
    });
    console.log(data);
    dispatch(FetchSuccess(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetRecentPrescriptions = async (
  dispatch,
  { presId, appointmentid }
) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get(`/api/athlete/prescription`, {
      params: { prescriptionId: presId, appointmentId: appointmentid },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetRecentBookings = async (
  dispatch,
  { currentPage, pageSize }
) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get("/api/doctor/recent-bookings", {
      params: { page_no: currentPage, per_page_count: pageSize },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const getAllBooking = async () => {
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/athlete/get-bookings", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    return data.sortedAppointments;
  } catch (err) {}
};

export const getSlots = async (service_type, date, doctor) => {
  const token = localStorage.getItem("userToken");
  try {
    const params = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (date) {
      params.params = { ...params.params, date: date };
    }

    if (doctor) {
      params.params = { ...params.params, doctor };
    }

    if (service_type) {
      params.params = { ...params.params, service_type: service_type };
    }

    const { data } = await axios.get("/api/doctor/get-slots", params);

    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);

    return false;
  }
};

export const GetPlans = async (dispatch) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get("/api/doctor/get-plans", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(FetchSuccess({ type: "FETCH_PLANS_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const Plans = async (dispatch, { Name, phase, ClientId }) => {
  dispatch(Start());
  const token = localStorage.getItem("userToken");
  try {
    console.log(ClientId);

    const data = await axios.put(
      `/api/doctor/select-plan?userId=${ClientId}&plan=${Name}&planPhase=${phase.name}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    dispatch(PlanSuccess(data.data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));

    return false;
  }
};

export const Bookappointment = async (dispatch, formData, cost) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");
  const client_id = localStorage.getItem("userId");
  const selectedService = localStorage.getItem("selectedService");

  console.log(formData);
  dispatch(Start());
  try {
    const { data } = await axios.post(
      `/api/doctor/book-appointment/${client_id}`,
      {
        ...formData,
        cost,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(Success(data));
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};
export const SubmitClientForm = async (dispatch, { formData }) => {
  console.log(formData);

  const token = localStorage.getItem("userToken");
  dispatch(FormStart());
  try {
    const { data } = await axios.post(
      "/api/doctor/new-client-registration",
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        prefix: formData.prefix,
        birthday: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone_number: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    dispatch(FormSuccess(data));

    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FormFailure(errorMessage));
  }
};
export const VerifyAthelete = async (dispatch, { email }) => {
  const token = localStorage.getItem("userToken");
  dispatch(Start());
  try {
    const { data } = await axios.post(
      "/api/doctor/existing-client-verification",
      { email },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    localStorage.setItem("client_id", data.client_id);
    dispatch(Success(data));
    toast.success("Your Athelete with this email exits!");
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};

export const UpdateProfile = async (dispatch, formdata) => {
  const token = localStorage.getItem("userToken");
  dispatch(Start());
  try {
    const { data } = await axios.put(
      "/api/athlete/edit-profile",
      {
        ...formdata,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);

    dispatch(EditSuccess(data));
    toast.success("Profile Updated");
    return true;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};

export const CancelBooking = async (dispatch, id) => {
  dispatch(Start());
  const token = localStorage.getItem("userToken");

  try {
    const { data } = await axios.get(`/api/athlete/cancel-booking/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    toast.success("Booking cancelled successfully", successToastOptions);

    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};

export const hasAlreadyBookAppointment = async (dispatch, id) => {
  dispatch(Start());
  const token = localStorage.getItem("userToken");

  try {
    const { data } = await axios.get(`/api/athlete/already-booked/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};
export const UpdateProfilePic = async (dispatch, { formData, userId }) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");

  dispatch(Start());
  try {
    const { data } = await axios.put(
      `/api/athlete/update-profile-pic`,
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    toast.success("Profile Image Updated Successfully!", successToastOptions);

    dispatch(Success(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const getAllServices = async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/doctor/getAllServices`);
    console.log("data", data);
    dispatch(ServicesFetch(data.services));
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);

    return false; // Return false to indicate that the request failed
  }
};
