import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPassword } from "../../../features/apiCall";
import AuthLayout from "../AuthLayout";
const ErrorToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const UpdatePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = location.state;
  useEffect(() => {
    if (!email) {
      // Navigate to forgot-password page if email is not available
      navigate("/forgot-password");
    }
  }, [email]);

  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handlePwdChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { newPassword, confirmPassword } = values;

    if (newPassword.length < 8) {
      toast.error("Password must contain 8 characters.", ErrorToastOptions);
      return false;
    } else if (confirmPassword !== confirmPassword) {
      toast.error("Passwords do not match.", ErrorToastOptions);
      return false;
    }

    return true;
  };

  const handlePwdSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = values;

    if (handleValidation()) {
      if (
        await ResetPassword(dispatch, { email, newPassword, confirmPassword })
      ) {
        navigate("/");
        setValues({
          newPassword: "",
          confirmPassword: "",
        });
      }
    }
  };
  return (
    <AuthLayout>
      <section className="forgot-password">
        <h3 className="mb-4 font-weight-bold">Change Password</h3>
        <p className="mb-1 mt-4 email ml-1">
          Type your new password to continue
        </p>
        <Form onSubmit={handlePwdSubmit}>
          <Form.Control
            type="password"
            onChange={handlePwdChange}
            name="newPassword"
            required
            value={values?.newPassword}
            className="mb-3"
          />
          <Form.Control
            className="mb-3"
            type="password"
            onChange={handlePwdChange}
            name="confirmPassword"
            required
            value={values?.confirmPassword}
          />

          <button type="submit" className="purple-button w-100">
            Change Password{" "}
          </button>
        </Form>
      </section>
      <section className="illustration-container">
        <img
          src="images/UpdatePassword.png"
          className="illustration"
          style={{ width: "auto", height: "200px" }}
        />
      </section>
   
    </AuthLayout>
  );
};

export default UpdatePassword;
