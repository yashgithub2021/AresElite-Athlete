import React from "react";
import DoctorMenu from "../../layout/DoctorMenu";
import DoctorTodayAppointment from "../../layout/DoctorTodayAppointment";

const HomeLayout = ({ children }) => {
  return (
    <DoctorMenu>
      <div className="d-flex Doctor-home justify-content-around flex-wrap ">
        {children}
        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default HomeLayout;
