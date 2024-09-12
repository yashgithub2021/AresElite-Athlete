import React from "react";
import { Avatar, RingProgress } from "@mantine/core";
import { Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PieChart } from "@mantine/charts";
import { Modal, Button } from "@mantine/core";
import { Radio } from "@mantine/core";
import { useState } from "react";
import ServiceBookingform from "./ServiceBookingform";
import { Table } from "@mantine/core";
import { Stepper } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  Bookappointment,
  hasAlreadyBookAppointment,
} from "../../../features/apiCall";

const TeleSessions = ({
  trainingdata,
  service_type = "AddTrainingSessions",
  userId,
}) => {
  const dispatch = useDispatch();
  const perc =
    (trainingdata?.completedSessions / trainingdata?.totalSessions) * 100;
  const [clickedButton, setClickedButton] = useState(null);
  const [clickedButton2, setClickedButton2] = useState(null);
  const [formData, setFormData] = useState([]);
  const [datedata, setDateData] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const changeColor = (buttonId, service) => {
    // Generate a random color

    setClickedButton(buttonId);
    setaddstepChoice(service);
  };
  const changeColor2 = (buttonId, service) => {
    // Generate a random color

    setClickedButton2(buttonId);
  };
  const elements = [
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Ref Number
        </b>
      ),
      mass: 12.011,
    },
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Payment Time
        </b>
      ),
      mass: 12.011,
    },
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Payment Method
        </b>
      ),
      mass: 12.011,
    },
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Sender Name
        </b>
      ),
      mass: 12.011,
    },
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Amount
        </b>
      ),
      mass: 12.011,
    },
    {
      position: (
        <b style={{ fontWeight: "500", color: "#3C3F53", fontSize: "16px" }}>
          Admin Fee
        </b>
      ),
      mass: 12.011,
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  const [active, setActive] = useState(1);
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const [Acheivementsopen, acheivementHandler] = useDisclosure(false);
  const [bookstep1, bookstep1Handler] = useDisclosure(false);
  const [bookstep2, bookstep2Handler] = useDisclosure(false);
  const [addstep1, addstep1Handler] = useDisclosure(false);
  const [addstep2, addstep2Handler] = useDisclosure(false);
  const [addstepPayment, addstepPaymentHandler] = useDisclosure(false);
  const [addstepChoice, setaddstepChoice] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

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

    const res = await Bookappointment(dispatch, formData, 0);
    if (res) {
      nextStep();
    }
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ["service_type"]: "AddTrainingSessions",
    }));

    handledisable();
  }, [setFormData]);
  const data = [
    { name: "USA", value: 400, color: "var(--main-dark)" },
    { name: "India", value: 300, color: "#FD8E1F" },
  ];
  const secondModalHandler = () => {
    close();
    acheivementHandler.open();
  };
  const [bookstep1Choice, setbookstep1Choice] = useState("");

  const handelFormData = (data) => {
    setFormData(data);
    // handledisable();
  };

  useEffect(() => {
    if (formData.app_time) {
      setDisabled(false);
    }
  }, [formData.app_time]);
  return (
    <>
      {/* Payment Confirmed Modal */}

      {/* -------------------------------- */}
      {/* Add step 1 MODAL */}

      {/* ------------- */}
      {/* Add step 2 MODAL */}

      {/* ------------- */}
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
            <Modal.Header
              style={{ background: "var(--main-dark)", color: "white" }}
            >
              <Modal.Title>
                <div className="modal-header gap-3">
                  <div onClick={close}>
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
                    <h2>Appointment booking </h2>

                    <p>Training Sessions</p>
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
                color="var(--main-dark)"
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
                        service_type={service_type}
                        setFormData={handelFormData}
                        isTele={true}
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
                              stroke="white"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "26px", color: "var(--main-dark)" }}
                      >
                        $0
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

      {!trainingdata && (
        <div xs={6} sm={6} className="training-card text-shadow">
          <div className="d-flex  flex-wrap justify-content-between upper-train  ">
            <div>
              <h2 style={{ fontSize: "700" }}>Training Session</h2>
            </div>
          </div>
          <div className="train-stat-cont flex-shift gap-3">
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <table style={{ width: "100%", height: "70%" }}>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Total</th>
                  <td style={{ color: "#8C90AA" }}>-0</td>
                </tr>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Remaining</th>
                  <td style={{ color: "#8C90AA" }}>-0</td>
                </tr>
              </table>
            </div>
            <div className="d-flex justify-content-center items-start text-shadow">
              <RingProgress
                hiddenFrom="sm"
                size={100}
                thickness={8}
                roundCaps
                label={
                  <Text c="black" fw={700} ta="center" size="xl">
                    0 %
                  </Text>
                }
                sections={[{ value: `0`, color: "var(--main-dark)" }]}
              />
              <RingProgress
                visibleFrom="sm"
                size={150}
                thickness={12}
                roundCaps
                label={
                  <Text c="black" fw={700} ta="center" size="xl">
                    0 %
                  </Text>
                }
                sections={[{ value: `0`, color: "var(--main-dark)" }]}
              />
            </div>
          </div>
        </div>
      )}
      {trainingdata && (
        <div xs={6} sm={6} className="training-card text-shadow">
          <div className="d-flex  flex-wrap justify-content-between upper-train  ">
            <div>
              <h2 style={{ fontSize: "700" }}>Training Session</h2>
            </div>
            <div>
              <div className="view-all" onClick={open}>
                View All
              </div>
            </div>
          </div>
          <div className="train-stat-cont flex-shift gap-3">
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <table style={{ width: "100%", height: "70%" }}>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Total</th>
                  <td style={{ color: "#8C90AA" }}>
                    -{trainingdata?.totalSessions}
                  </td>
                </tr>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Remaining</th>
                  <td style={{ color: "#8C90AA" }}>
                    -
                    {trainingdata?.totalSessions -
                      trainingdata?.completedSessions}
                  </td>
                </tr>
              </table>
            </div>
            <div className="d-flex justify-content-center items-start text-shadow">
              <RingProgress
                hiddenFrom="sm"
                size={100}
                thickness={8}
                roundCaps
                label={
                  <Text c="black" fw={700} ta="center" size="xl">
                    {perc?.toFixed(1)} %
                  </Text>
                }
                sections={[{ value: `${perc}`, color: "var(--main-dark)" }]}
              />
              <RingProgress
                visibleFrom="sm"
                size={150}
                thickness={12}
                roundCaps
                label={
                  <Text c="black" fw={700} ta="center" size="xl">
                    {perc?.toFixed(1)} %
                  </Text>
                }
                sections={[{ value: `${perc}`, color: "var(--main-dark)" }]}
              />
            </div>
          </div>
          <div className="d-flex gap-4 tele-buttons">
            <button
              className="bookbtn"
              onClick={async () => {
                const r = await hasAlreadyBookAppointment(dispatch, userId);
                console.log("r:", r);
                if (r) {
                  open();
                }
              }}
            >
              Book
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TeleSessions;
