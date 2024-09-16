import React from "react";
import { useNavigate } from "react-router-dom";
const BookingCard = ({ name, serviceType, date, time, pStatus, cancelBtn }) => {
  const navigate = useNavigate();
  return (
    <div style={{ fontSize: "small" }}>
      <div className="d-flex justify-content-between">
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Service Type</p>
        <p>{serviceType}</p>
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
        <p>Payment Status</p>
        <button className="pending">{pStatus}</button>
      </div>
      <div className="">
        <p>Action</p>
        {cancelBtn}
        <div className="d-flex gap-3">
          <button
            style={{
              padding: "12.5px 26.5px 12.5px 26.5px",
              background: "#7257FF26",
              borderRadius: "10px",
              width: "100%",
            }}
            onClick={() => {
              navigate("/a-prescription");
            }}
          >
            View Prescription
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BookingCard;
