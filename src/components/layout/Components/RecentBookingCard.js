import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDateToMMDDYYY } from "../../../utils/functions";

const RecentBookingCard = ({ data, freeServices }) => {
  const navigate = useNavigate();
  return (
    <div style={{ fontSize: "small" }}>
      <div className="d-flex justify-content-between">
        <p>Name</p>
        <p> {data?.doctor_trainer}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Service Type</p>
        <p
          style={{
            maxWidth: "7rem",
            hyphens: "auto",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {data?.service_type}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Date</p>
        <p>{formatDateToMMDDYYY(data.app_date)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Service</p>
        <p>{data?.app_time}</p>
      </div>
      <div className="">
        {/* <p>Action</p> */}
        <div className="d-flex gap-3">
          {/* <button
            style={{
              padding: "12.5px 26.5px 12.5px 26.5px",
              background: "#7257FF26",
              borderRadius: "10px",
              width: "50%",
            }}
          >
            View prescription
          </button> */}
          {data?.status === "paid" && (
            <button
              style={{
                padding: "12.5px 26.5px 12.5px 26.5px",
                background: "var(--main-dark)",
                borderRadius: "10px",
                width: "100%",
                color: "#ffffff",
              }}
            >
              {freeServices?.indexOf(data?.service_type) !== -1
                ? "Free"
                : "Paid"}
            </button>
          )}
          {data?.status !== "paid" && (
            <button
              style={{
                padding: "12.5px 26.5px 12.5px 26.5px",
                background: "#7257FF26",
                borderRadius: "10px",
                width: "100%",
              }}
              onClick={() => navigate("/a-transactions")}
            >
              Pay
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentBookingCard;
