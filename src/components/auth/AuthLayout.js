import React from "react";
import { useLocation } from "react-router-dom";
import SignInImage from "../../assets/Signin.png";
import SignUpImage from "../../assets/Signup.png";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  var url = "";
  if (
    location.pathname == "/signin" ||
    location.pathname == "/forgot-password"
  ) {
    url = SignInImage;
  } else {
    url = SignUpImage;
  }

  return (
    <div
      className="background-auth"
      id="background-auth"
      style={{
        background: `linear-gradient(180deg, rgba(6, 0, 66, 0) 45.95%, rgba(6, 0, 80, 0.4) 100%),url(${url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex align-items-center justify-content-center vh-100 ">
        <main className="sign-in-container">{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
