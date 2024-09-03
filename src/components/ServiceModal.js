import { React, useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Stepper, Button, Group } from "@mantine/core";
import { Table } from "@mantine/core";

import { Col } from "react-bootstrap";
import ServiceBookingform from "./layout/Components/ServiceBookingform";
import { current } from "@reduxjs/toolkit";
import { getSlots } from "../features/apiCall";
import { Bookappointment } from "../features/apiCall";
import { useDispatch } from "react-redux";
const ServiceModal = ({ heading, amount, colors, session, svg, icon, service_type }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch()
  const [active, setActive] = useState(1);
  const [datedata, setDateData] = useState([])
  const [formData, setFormData] = useState([])
  const [disabled, setDisabled] = useState(true)

  const handledisable = () => {

    if (formData.app_time) {

      setDisabled(false)
    }
  }
  const handleBooking = async (e) => {
    e.preventDefault()

    setFormData((prevData) => ({
      ...prevData,
      ["service_type"]: service_type,
    }));
    console.log("formData", formData)

    const res = await Bookappointment(dispatch, formData)
    if (res) {
      nextStep()
    }

  }
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ["service_type"]: service_type,
    }));
    console.log(formData)

    handledisable()

  }, [formData.app_time])

  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const handleClose = () => {
    close();
    setActive(1);
  };

  function extractDates(json) {
    const dates = json.map(item => {
      let dateObj = new Date(item.date);
      dateObj.setHours(0, 0, 0, 0); // Set hours to 0, minutes to 0, seconds to 0, milliseconds to 0
      return dateObj;
    });

    return dates;
  }

  const handleOpen = async () => {
    open()
    const data = await getSlots(service_type)

    const res = await extractDates(data.dates);
    setDateData(res)
    console.log(datedata)
  }
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
  return (
    <>
      <Modal.Root opened={opened} onClose={close} size="lg">
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
                  <div onClick={close}>
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
                  <div onClick={close}>
                    <button className="modal-close">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10px" }}>
                    <h2>Appointment booking </h2>

                    <p>{service_type}</p>
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
                      <ServiceBookingform date_data={datedata} service_type={service_type} setFormData={setFormData} />
                    </div>
                    {!disabled && <button className="continue-btn" disabled={disabled} onClick={handleBooking} >
                      Continue
                    </button>}


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
                      <p style={{ fontSize: "26px", color: "#7257FF" }}>${amount}</p>
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
      <div className="svg-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{svg}</div>


      <div
        style={{
          minWidth: "60%",
          fontFamily: '"Poppins", sans-serif',
          height: "100%",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          cursor: "pointer"
        }}
        className="serviceCard"

      >
        <h7 style={{ fontSize: "12px", color: `${colors?.heading}` }}>
          {heading}
        </h7>
        <div className="d-flex gap-3 mt-1 mb-2">
          <div
            className="d-flex"
            style={{ color: `${colors?.text}`, fontSize: "12px" }}
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              stroke={colors?.text}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_645_40639)">
                <path
                  d="M8.59952 14.2247C11.4289 14.2247 13.7225 11.9311 13.7225 9.10172C13.7225 6.27239 11.4289 3.97876 8.59952 3.97876C5.77019 3.97876 3.47656 6.27239 3.47656 9.10172C3.47656 11.9311 5.77019 14.2247 8.59952 14.2247Z"
                  stroke={colors?.text}
                  stroke-opacity="0.8"
                  stroke-width="1.02459"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.60547 6.02417V9.09794L10.6547 10.1225"
                  stroke={colors?.text}
                  stroke-opacity="0.8"
                  stroke-width="1.02459"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_645_40639">
                  <rect
                    width="12.2951"
                    height="12.2951"
                    stroke={colors?.text}
                    fill={colors?.text}
                    transform="translate(2.45312 2.95459)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>90 mins Meeting</p>
          </div>
          <div
            style={{
              borderLeft: "solid",
              borderWidth: "1px",
              color: `${colors?.text}`,
              paddingLeft: "4px",
            }}
          >
            {amount && amount != 0 ? (
              <p style={{ color: `${colors?.text}` }}>
                ${amount} <span style={{ fontSize: "8px" }}>per session</span>{" "}
              </p>
            ) : (
              <p>free</p>
            )}
          </div>
        </div>
        {session && (
          <>
            <hr style={{ marginTop: "-1px" }} />{" "}
            <p
              className="pulsate"
              style={{
                marginTop: "-9px",
                fontSize: "10px",
                color: `${colors?.text}`,
              }}
            >
              Acivte session 8:30PM
            </p>
          </>
        )}
      </div>
      <div onClick={handleOpen} style={{ cursor: "pointer" }}>
        {icon}
      </div>
    </>
  );
};

export default ServiceModal;
