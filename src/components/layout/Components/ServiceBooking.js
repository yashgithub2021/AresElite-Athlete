import { React, useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Stepper, Button, Group } from "@mantine/core";
import { Table } from "@mantine/core";

import { Col } from "react-bootstrap";
import ServiceBookingform from "./ServiceBookingform";
import { current } from "@reduxjs/toolkit";
import { getSlots } from "../../../features/apiCall";
import { Bookappointment } from "../../../features/apiCall";
import { useDispatch } from "react-redux";

const ServiceBooking = ({
  showBookModal,
  handleModalOpen,
  handleModalClose,
  heading,
  amount,
  colors,
  session,
  svg,
  icon,
  service_type,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [datedata, setDateData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handledisable = () => {
    if (formData.app_time) {
      setDisabled(false);
    }
  };
  const handleBooking = async (e) => {
    e.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      ["service_type"]: service_type,
    }));
    console.log("formData", formData);

    const res = await Bookappointment(dispatch, formData);
    if (res) {
      nextStep();
    }
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ["service_type"]: service_type,
    }));
    console.log(formData);

    handledisable();
  }, [formData.app_time]);

  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const handleClose = () => {
    // close();
    handleClose();
    setActive(1);
  };

  function extractDates(json) {
    const dates = json.map((item) => {
      let dateObj = new Date(item.date);
      dateObj.setHours(0, 0, 0, 0); // Set hours to 0, minutes to 0, seconds to 0, milliseconds to 0
      return dateObj;
    });

    return dates;
  }

  const handleOpen = async () => {
    // handleModalOpen();
    // const data = await getSlots(service_type);
    const data = await getSlots("Post-ConcussionEvaluation");

    const res = await extractDates(data.dates);
    console.log("res", res);
    setDateData(res);
    console.log(datedata);
  };
  console.log("dates", datedata);
  const elements = [
    { position: <b>Ref Number</b>, mass: 12.011 },
    { position: <b>Payment Time</b>, mass: 12.011 },
    { position: <b>Payment Method</b>, mass: 12.011 },
    { position: <b>Sender Name</b>, mass: 12.011 },
    { position: <b>Amount</b>, mass: 12.011 },
    { position: <b>Admin Fee</b>, mass: 12.011 },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  useEffect(() => {
    if (showBookModal) {
      handleOpen();
    }
  }, [showBookModal]);

  return (
    <>
      <Modal.Root opened={showBookModal} onClose={handleModalClose} size="lg">
        <Modal.Overlay />
        <Modal.Content
          style={{ background: "transparent", overflow: "hidden" }}
        >
          {active === 2 && (
            <>
              <Modal.Header
                style={{
                  background: "white",
                  color: "white",
                  marginBottom: "-30px",
                  zIndex: "-1",
                }}
              >
                <Modal.Title>
                  <div onClick={handleModalClose}>
                    <button className="modal-close">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                  </div>
                </Modal.Title>
              </Modal.Header>
            </>
          )}
          {active != 2 && (
            <Modal.Header style={{ background: "#7257FF", color: "white" }}>
              <Modal.Title>
                <div className="modal-header gap-3">
                  <div onClick={handleModalClose}>
                    <button className="modal-close">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginTop: "10px",
                    }}
                  >
                    <h2>Training Session Booking </h2>

                    <p>Tele Session</p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
          )}

          <Modal.Body
            style={{
              minHeight: "600px",
              background: "white",
              display: "flex",
              padding: "5px 9px 0px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "20px", width: "95%" }}>
              <Stepper
                active={active}
                onStepClick={setActive}
                size="xs"
                color="#7257FF"
                iconPosition="right"
              >
                <Stepper.Step label="Select Service" />

                <Stepper.Step label="Appoointment Information">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "400px",
                        overflowY: "scroll",
                      }}
                    >
                      <ServiceBookingform
                        date_data={datedata}
                        // service_type={service_type}
                        service_type="Post-ConcussionEvaluation"
                        setFormData={setFormData}
                      />
                    </div>
                    {!disabled && (
                      <button
                        className="continue-btn"
                        disabled={disabled}
                        onClick={handleBooking}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </Stepper.Step>

                <Stepper.Step label="Payment Process">
                  <div className="center-col">
                    <div className="check-main">
                      <div class="check-container">
                        <div class="check-background">
                          <svg
                            viewBox="0 0 65 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 25L27.3077 44L58.5 7"
                              // stroke="white"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke="#7257FF"
                            />
                          </svg>
                        </div>
                      </div>
                      <p style={{ fontSize: "26px", color: "#7257FF" }}>
                        ${amount}
                      </p>
                      <p>Booking Confirmed for {service_type} </p>
                    </div>
                    <div className="data-table ">
                      <Table>
                        <Table.Tbody>{rows}</Table.Tbody>
                      </Table>
                    </div>

                    {/* <button className="continue-btn" onClick={handleClose} disabled="true">
                      Continue
                    </button> */}
                  </div>
                </Stepper.Step>
              </Stepper>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default ServiceBooking;
