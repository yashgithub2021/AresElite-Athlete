import React, { useState } from "react";
import { Modal } from "@mantine/core";
import { Radio, Group } from "@mantine/core";

import "../../styles/fourtele.css";

const OnlineTele = ({
  opened,
  handleClose,
  serviceType,
  handleServiceSelect,
}) => {
  const [selectedService, setSelectedService] = useState("");
  const handleSelectedService = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <Modal.Root opened={opened} onClose={handleClose} size="xs">
      <Modal.Overlay />
      <Modal.Content
        style={{
          maxHeight: "28rem",
          background: "transparent",
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <Modal.Body
          style={{
            // height: "23rem",
            background: "white",
            display: "flex",
            // padding: "0.5rem 9px 1rem 0",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            borderRadius: "0.5rem",
          }}
        >
          <div className="align-self-start">
            <h1 className="fw-bold" style={{ fontSize: "1.5rem" }}>
              {" "}
              Select type of Service{" "}
            </h1>
          </div>
          <p
            style={{
              color: "#8C90AA",
              margin: "0 2.5rem 0 0.5rem",
              textAlign: "center",
            }}
          >
            Please select type of service that you want to book.{" "}
          </p>

          <div
            className="d-flex flex-column gap-2  mt-3"
            style={{
              color: "#8C90AA",
            }}
          >
            <label className="custom-radio-button fw-semibold  d-flex align-items-center">
              <input
                type="radio"
                name="service-type"
                value="OfflineVisit"
                className="custom-radio-input"
                checked={selectedService === "OfflineVisit"}
                onChange={handleSelectedService}
              />
              <span className="custom-checkmark   "></span>
              Offline
            </label>

            <label className="custom-radio-button d-flex fw-semibold align-items-center">
              <input
                type="radio"
                name="service-type"
                value="TeleSession"
                className="custom-radio-input"
                checked={selectedService === "TeleSession"}
                onChange={handleSelectedService}
              />
              <span className="custom-checkmark"></span>
              Tele Session
            </label>
          </div>

          <div className="flex flex-column gap-3 w-100 mt-4">
            <button
              className="fill mb-2 w-100  fw-semibold "
              onClick={() => {
                handleServiceSelect(selectedService);
                handleClose();
              }}
            >
              Continue
            </button>
            <button
              className="fill w-100  fw-semibold "
              style={{
                backgroundColor: "#7257FF26",
                color: "var(--main-dark)",
                fontSize: "1.1rem",
              }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default OnlineTele;
