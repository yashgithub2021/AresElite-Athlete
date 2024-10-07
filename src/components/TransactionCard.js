import React from "react";
import { useNavigate } from "react-router-dom";

import { formatDateToMMDDYYY } from "../utils/functions";

const TransactionCard = ({ data, action }) => {
  const navigate = useNavigate();
  return (
    <div style={{ fontSize: "small" }}>
      <div className="d-flex justify-content-between">
        <p>Name</p>
        <p>{data.doctor}</p>
      </div>
      <div className="d-flex justify-content-between ">
        <p>Service Type</p>
        <p
          style={{ maxWidth: "6rem", hyphens: "auto", wordBreak: "break-all" }}
        >
          {data.service_type}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Date</p>
        <p>{formatDateToMMDDYYY(data.date)}</p>
      </div>
      {/* <div className="d-flex justify-content-between">
        <p>Service</p>
        <p>9:23 AM</p>
      </div> */}
      <div className="d-flex justify-content-between align-items-center">
        <p>Payment Status</p>
        <button className={data.payment_status} style={{ maxWidth: "5rem" }}>
          {data.payment_status}
        </button>
      </div>
      <div className="mt-2">
        <div className="d-flex gap-3">{action}</div>
      </div>
      <hr />
    </div>
  );
};

export default TransactionCard;
