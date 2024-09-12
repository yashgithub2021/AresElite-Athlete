import React from "react";

import { Stepper, rem } from "@mantine/core";

const Card5 = ({ len, trackingid }) => {
  const [active, setActive] = React.useState(len);
  return (
    <div
      xs={6}
      sm={6}
      className="upper-card text-shadow "
      style={{
        background: "var(--main-dark)",
        width: "420px",
      }}
    >
      <div style={{ marginTop: "45px", width: "90%" }}>
        <h2 style={{ fontWeight: "500" }}>
          <span style={{ color: "#FFFFFF" }}>Order placed </span>
          <span style={{ color: "#FFFFFFCC" }}></span>
        </h2>
        <p style={{ color: "#FFFFFF99", fontWeight: "500" }}>
          Wait for the admin to start your shipping process{" "}
          <span style={{ color: "#FFFFFF" }}>.Thank you for your patience</span>
        </p>
      </div>
    </div>
  );
};

export default Card5;
