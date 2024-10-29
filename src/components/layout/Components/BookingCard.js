import React from "react";
import { useNavigate } from "react-router-dom";
const BookingCard = ({
  name,
  serviceType,
  date,
  time,
  pStatus,
  serviceStatus,
  cancelBtn,
  freeServices,
}) => {
  const navigate = useNavigate();
  return (
    <div style={{ fontSize: "small" }}>
      <div className="d-flex justify-content-between">
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Service Type</p>
        <p
          style={{ maxWidth: "6rem", hyphens: "auto", wordBreak: "break-all" }}
        >
          {serviceType}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Date</p>
        <p>{date}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Service</p>
        <p>{time}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Payment</p>
        <p>{freeServices.indexOf(serviceType) !== -1 ? "free" : pStatus}</p>
      </div>
      {/* <div className="d-flex justify-content-between align-items-center">
        <p>Service Status</p>
        <button className="pending">{serviceStatus}</button>
      </div> */}
      <div className="d-flex flex-column gap-2 mt-3">
        {/* <p>Action</p> */}
        <div>{serviceStatus}</div>
        <div> {cancelBtn}</div>
      </div>
      <hr />
    </div>
  );
};

export default BookingCard;
