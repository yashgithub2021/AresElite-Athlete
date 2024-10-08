import React, { useEffect, useState } from "react";
import { Button, Form, FormCheck, InputGroup, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../features/apiCall";
import AuthLayout from "./AuthLayout";

const SignIn = () => {
  const { isFetching, error, errMsg, token } = useSelector(
    (state) => state.auth
  );
  const [termsAgree, setTermsAgree] = useState(false);
  const [isLoogedIn, setIsLoogedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (termsAgree) {
      await login(dispatch, { email, password });
      setIsLoogedIn(true);
    } else {
      toast.error("Please Agree to Terms", {
        position: "bottom-center",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error && !isFetching && isLoogedIn) {
      // toast.error(errMsg || "Unknown error occurred", {
      //   position: "bottom-center",
      //   autoClose: 3000,
      //   pauseOnHover: true,
      //   draggable: true,
      //   theme: "dark",
      // });
      setIsLoogedIn(false);
    }
  }, [error, isFetching, isLoogedIn, errMsg]);

  const isFormValid = values.email && values.password && termsAgree;

  return (
    <AuthLayout>
      <section className="illustration-container d-none">
        <img
          src="images/UpdatePassword.png"
          className="illustration"
          style={{ width: "auto", height: "200px" }}
        />
      </section>

      <Form onSubmit={handleSubmit} className="login-container">
        <div style={{ marginBottom: "-25px" }}>
          <h6 className="text-secondary">Welcome !</h6>
          <h3 className="mb-5 font-weight-bold">Log in for Ares Elite</h3>
        </div>

        <Form.Group controlId="formBasicEmail" className=" f-label ">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
            className="mb-3 mt-2 w-100"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="w-100 f-label">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={values.showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
              className="mb-3 mt-2"
            />

            <NavLink className="password-eye" onClick={handleTogglePassword}>
              {values.showPassword ? (
                <i className="fa fa-eye-slash " />
              ) : (
                <i className="fa-solid fa-eye" />
              )}
            </NavLink>
          </InputGroup>
        </Form.Group>

        <div className="d-flex justify-content-between ">
          <NavLink
            className="d-block w-md-100 ms-md-1 ms-0 text-nowrap mb-2 text-decoration-none purple-text"
            to="/signup"
          >
            New User?
          </NavLink>
          <NavLink
            className="d-block w-100 text-right mb-2 text-decoration-none purple-text"
            to="/forgot-password"
          >
            Forgot Password?
          </NavLink>
        </div>

        <FormCheck
          type="checkbox"
          id="default-checkbox"
          value={termsAgree}
          onChange={(e) => setTermsAgree(e.target.checked)}
          label={
            <span style={{ fontSize: "12px" }}>
              By signing up, you agree to our{" "}
              <span className="purple-text">Terms</span> and have read and
              acknowledge the{" "}
              <span className="purple-text"> Privacy Policies.</span>
            </span>
          }
          className="mb-4 mt-4  "
        />

        <Button
          type="submit"
          className="purple-button w-100"
          disabled={!isFormValid || isFetching}
        >
          {isFetching ? (
            <Spinner animation="border" variant="light" />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default SignIn;
