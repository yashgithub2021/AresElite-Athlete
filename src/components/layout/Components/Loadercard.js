import React from "react";
import { LoadingOverlay, Button, Group, Box } from "@mantine/core";
const Loadercard = ({ color = "white" }) => {
  return (
    <div
      xs={6}
      sm={6}
      className="upper-card text-shadow pulsate"
      style={{
        background: `${color}`,
      }}
    >
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ blur: 0, color: "var(--main-dark)" }}
      />
    </div>
  );
};

export default Loadercard;
