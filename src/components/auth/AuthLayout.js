import React from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
 
  
  const location=useLocation()
  var url=""
if(location.pathname=="/signin"){
  url="https://s3-alpha-sig.figma.com/img/3e77/d5ea/c056b24d20aa0cedea4f4d91f29dd1bf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2bKbKK1pB9KXB2oF3zlG1ry15sgi5Dc85O0ZV2hsR76MdFCtMuHOHL2Clt-VmJ8U1BD5hyonXCiVodg-Fa~NMSx21777x6surIr8O2OqPEheh22PsvPdNeY-VF0TiTAL6IPu1lJTK2XnHBrVAdvBksBwt83MLZFgRaOzng43BZazLnt7ll~GsvDCuxHknjcUw68kVeqwIH9q3-XeIr3yLkPXNbpUId~-9nQ4kFTzwdMhepti-OgFcjTZcXqj964tNH3qxptRZInnlESaFvaPuP9u~H1UUKmZhTl62HuFyb15SMf8RewGT6R2hUkGvPsf7Ngk0ejIT93GgpwSPQNUw__"
}
else{
  url="https://s3-alpha-sig.figma.com/img/3e77/d5ea/c056b24d20aa0cedea4f4d91f29dd1bf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2bKbKK1pB9KXB2oF3zlG1ry15sgi5Dc85O0ZV2hsR76MdFCtMuHOHL2Clt-VmJ8U1BD5hyonXCiVodg-Fa~NMSx21777x6surIr8O2OqPEheh22PsvPdNeY-VF0TiTAL6IPu1lJTK2XnHBrVAdvBksBwt83MLZFgRaOzng43BZazLnt7ll~GsvDCuxHknjcUw68kVeqwIH9q3-XeIr3yLkPXNbpUId~-9nQ4kFTzwdMhepti-OgFcjTZcXqj964tNH3qxptRZInnlESaFvaPuP9u~H1UUKmZhTl62HuFyb15SMf8RewGT6R2hUkGvPsf7Ngk0ejIT93GgpwSPQNUw__"
}
 
  return (
    <div className="background-auth" id="background-auth" style={{background:`linear-gradient(180deg, rgba(6, 0, 66, 0) 45.95%, rgba(6, 0, 80, 0.4) 100%),url(${url})`,backgroundSize:"cover"}}>
      <div className="d-flex align-items-center justify-content-center vh-100 ">
        <main className="sign-in-container"  >{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
