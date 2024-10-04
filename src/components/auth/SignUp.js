import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  Row,
  Spinner,
} from "react-bootstrap";
import { PasswordInput } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../../features/apiCall";
import AuthLayout from "./AuthLayout";
import { Input } from "@mantine/core";
import { Select } from "@mantine/core";
import { format } from "date-fns";
import { IoPersonOutline as InofficeIcon } from "react-icons/io5";
import { CiGlobe as OnlineIcon } from "react-icons/ci";

import { DateInput } from "@mantine/dates";
import { Register } from "../../features/apiCall";

const SignUp = () => {
  const [value, setValue] = useState(null);

  const { isFetching, error, errMsg, token } = useSelector(
    (state) => state.auth
  );
  const [isLoogedIn, setIsLoogedIn] = useState(false);
  const [isOnline, setisOnline] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ErrorToastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    prefix: "",
    email: "",
    city: "",
    phone: "",
    state: "",
    dob: "02/10/1999",
    gender: "",
    address: "",
    zip: "",
    password: "",
    confirmpass: "",
    is_online: true,
    dob: "06/10/11",
  });

  const handleTogglePassword = () => {
    setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (token) {
      navigate("/");
    }
  }, [navigate, token, error, isFetching, isLoogedIn]);

  const handleChange = (e) => {
    var { name, value } = e.target;

    if (name === "dob") {
      const formattedDate = format(new Date(value), "dd/MM/yyyy");
      setValues({ ...values, [name]: formattedDate });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (values.password != values.confirmpass) {
      alert("Passwords do not match");
      return;
    }
    await Register(dispatch, values);
  };
  useEffect(() => {
    if (error && !isFetching && isLoogedIn) {
      // toast.error(errMsg || "Unknown error occurred", ErrorToastOptions);
      setIsLoogedIn(false);
    }
  }, [error, isFetching, isLoogedIn, errMsg]);

  const pageContent = (
    <div className="signUp-container">
      <div
        className="auth-haeder mb-md-2 mb-4"
        style={{ display: "flex", gap: "9px", alignItems: "center" }}
      >
        <svg
          onClick={() => {
            setisOnline(false);
          }}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z"
            fill="#1C1C1C"
            fill-opacity="0.05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.9254 14.5581C23.1915 14.8021 23.1915 15.1979 22.9254 15.4419L18.4375 19.5581C18.1714 19.8021 18.1714 20.1979 18.4375 20.4419L22.9254 24.5581C23.1915 24.8021 23.1915 25.1979 22.9254 25.4419C22.6593 25.686 22.2278 25.686 21.9617 25.4419L17.4738 21.3258C16.6754 20.5936 16.6754 19.4064 17.4738 18.6742L21.9617 14.5581C22.2278 14.314 22.6593 14.314 22.9254 14.5581Z"
            fill="#1C1C1C"
          />
        </svg>
        <h2 style={{ margin: "0px" }}>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <Input
              variant="filled"
              placeholder="Input "
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <Input
              variant="filled"
              placeholder="Input"
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Prefix</label>
            <Input
              variant="filled"
              placeholder="Input"
              name="prefix"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Email</label>
            <Input
              variant="filled"
              placeholder="Input"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Date of birth</label>
            <DateInput
              value={value}
              variant="filled"
              name="dob"
              onChange={(e) => {
                setValue(e);
                setValues({ ...values, ["dob"]: e });
              }}
              rightSection={<i class="fa-solid fa-calendar"></i>}
              placeholder="Choose your date of birth"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Gender</label>
            <div className="d-flex " style={{ width: "100%" }}>
              <Select
                variant="filled"
                data={["Male", "Female"]}
                onChange={(value) => {
                  setValues({ ...values, ["gender"]: value });
                }}
                width={"100%"}
                // comboboxProps={{ width: "100%" }}
              />
              {/* <select name="gender" onChange={handleChange} >
   <option>Male</option>
   <option>Female</option>
   </select> */}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Adress </label>
            <Input
              variant="filled"
              placeholder="Input "
              name="address"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Phone Number</label>
            <div className="d-flex " style={{ width: "100%" }}>
              <Input
                variant="filled"
                placeholder="Phone Number"
                style={{ width: "100%" }}
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputEmail4">City</label>
            <Input
              variant="filled"
              placeholder="Input"
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">State</label>
            <Input
              variant="filled"
              placeholder="Input "
              name="state"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Zip Code</label>
            <Input
              variant="filled"
              placeholder="Input "
              name="zip"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Password</label>
            <PasswordInput
              variant="filled"
              placeholder="Create Password"
              name="password"
              onChange={handleChange}
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <i class="fa-solid fa-eye"></i>
                ) : (
                  <i class="fa-solid fa-eye-slash"></i>
                )
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Confirm Password</label>
            <PasswordInput
              variant="filled"
              placeholder="Confirm"
              name="confirmpass"
              onChange={handleChange}
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <i class="fa-solid fa-eye"></i>
                ) : (
                  <i class="fa-solid fa-eye-slash"></i>
                )
              }
            />
          </div>
        </div>

        <div className="mt-md-2 auth-footer d-flex justify-content-between items-center">
          {isFetching ? (
            <Button type="submit" className="signup-button mt-md-0 mt-5 ">
              <Spinner animation="border" variant="light" />
            </Button>
          ) : (
            <Button type="submit" className="signup-button  mt-md-0 mt-5 ">
              Sign Up
            </Button>
          )}
          <div>
            <NavLink
              className="d-block w-100  mb-2 text-decoration-none purple-text"
              to="/signin"
            >
              Already an user?
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
  return (
    <>
      {isOnline ? (
        screenWidth > 600 ? (
          <AuthLayout>{pageContent}</AuthLayout>
        ) : (
          pageContent
        )
      ) : (
        <>
          <AuthLayout>
            <div style={{ padding: "20px" }}>
              <div style={{ width: "100%", textAlign: "left" }}>
                <h3 style={{ fontWeight: "500" }}>
                  <span style={{ marginRight: "15px" }}>
                    <svg
                      onClick={() => {
                        navigate(-1);
                      }}
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z"
                        fill="#1C1C1C"
                        fill-opacity="0.05"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.9254 14.5581C23.1915 14.8021 23.1915 15.1979 22.9254 15.4419L18.4375 19.5581C18.1714 19.8021 18.1714 20.1979 18.4375 20.4419L22.9254 24.5581C23.1915 24.8021 23.1915 25.1979 22.9254 25.4419C22.6593 25.686 22.2278 25.686 21.9617 25.4419L17.4738 21.3258C16.6754 20.5936 16.6754 19.4064 17.4738 18.6742L21.9617 14.5581C22.2278 14.314 22.6593 14.314 22.9254 14.5581Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </span>
                  Select Modes
                </h3>
              </div>

              <div className="mode-box-container ">
                <div
                  onClick={() => {
                    setisOnline(true);
                    setValues({ ...values, is_online: true });
                  }}
                  className=" mode-box typecard"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      margin: "auto 0",
                      alignItems: "center",
                    }}
                  >
                    <div className="select-mode-options">
                      <OnlineIcon size={screenWidth < 600 ? 50 : 100} />
                    </div>
                    <div className="mode-title"> Online </div>
                  </div>
                </div>

                <div
                  className="mode-box typecard"
                  onClick={() => {
                    setisOnline(true);
                    setValues({ ...values, is_online: false });
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="select-mode-options">
                      <InofficeIcon size={screenWidth < 600 ? 50 : 100} />
                    </div>
                    <div className="mode-title"> In-Office </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </AuthLayout>
        </>
      )}
    </>
  );
};

export default SignUp;
