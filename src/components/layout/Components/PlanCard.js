import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { Modal, Button, Table } from "@mantine/core";
import { Plans } from "../../../features/apiCall";
import { toast } from "react-toastify";

const PlanCard = ({ price, features, Name, phases }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [success, successHandler] = useDisclosure(false);
  const [selectedPlan, setSelectedPlan] = useState();
  const [clickedButton, setClickedButton] = useState(null);
  const [selectedPhaseCost, setSelectedPhaseCost] = useState(null);
  const [selectedPhaseIndex, setselectedPhaseIndex] = useState("");
  const changeColor = (buttonId, service) => {
    setClickedButton(buttonId);
  };
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const ClientId = localStorage.getItem("userId");

    if (selectedPhaseIndex !== null) {
      const selectedPhase = phases[selectedPhaseIndex];

      const params = {
        Name,
        phase: selectedPhase.name,
        ClientId,
      };
      console.log(params);

      try {
        const data = await Plans(dispatch, params);
        console.log("data", data)
        if (data && data.data.success) {
          // Show success modal only if the plan booking was successful
          setSelectedPhaseCost(selectedPhase.cost); // Set the cost for display in the modal
          successHandler.open(); // Open the success modal when the booking is successful
        } else {
          // Handle specific error where the user needs to select the Novice plan
          toast.error("Failed to book the plan. Please try again.");
        }
      } catch (error) {
        // Handle any errors from the API call
        toast.error("An error occurred. Please try again.");
      }
    } else {
      // Show error if no phase is selected
      toast.error("No phase selected. Please select a phase.");
    }
  };


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
      <Modal.Root
        opened={success} // This should be true when the plan is successfully booked
        onClose={() => {
          successHandler.close(); // Close the success modal properly
        }}
        centered
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body style={{ padding: "30px" }}>
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
              <p style={{ fontSize: "26px", color: "var(--main-dark)" }}>
                ${selectedPhaseCost}
              </p>
              <p>Booking Confirmed for {Name} Plan </p>
            </div>
            <div className="data-table ">
              <Table>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </div>
            <div className="mt-3">
              <NavLink to="/">
                {" "}
                <button
                  style={{
                    width: "100%",
                    padding: "12px 24px 12px 24px",
                    background: "var(--main-dark)",
                    color: "white",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    successHandler.close();
                  }}
                >
                  Continue
                </button>
              </NavLink>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Modal.Root opened={opened} onClose={close} size="37rem">
        <Modal.Overlay />
        <Modal.Content style={{ background: "transparent" }}>
          <Modal.Header
            style={{
              background: "var(--main-dark)",
              color: "white",
            }}
          >
            <Modal.Title
              style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}
            >
              <div onClick={close}>
                <button className="modal-close">
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
              </div>
              <div>
                <p style={{ fontWeight: "600", fontSize: "21px" }}>
                  {Name}
                </p>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              background: "white",
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "100%" }}>
              {/*  */}
              <p style={{ fontWeight: '700' }}>Select Phase from {Name} Plan</p>
              <div className="mt-1">
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      width: "100%",
                    }}
                  >
                    {phases.map((item, idx) => {
                      return (
                        <button
                          id={`button${idx + 1}`}
                          style={{
                            display: "flex",
                            gap: "10px",
                            height: "112px",
                            backgroundColor:
                              clickedButton === `button${idx + 1}`
                                ? "#7257FF26"
                                : "#F4F4F4",
                            color:
                              clickedButton === `button${idx + 1}`
                                ? "var(--main-dark)"
                                : "black",
                            padding: "27px 27px 30px 27px",
                            border:
                              clickedButton === `button${idx + 1}`
                                ? "solid 1px"
                                : "none",
                            cursor: "pointer",
                            borderRadius: "12px",
                          }}
                          onClick={() => {
                            changeColor(`button${idx + 1}`, "In office");
                            setselectedPhaseIndex(idx);
                            setSelectedPhaseCost(item.cost);
                          }}
                        >
                          <div>
                            {clickedButton === `button${idx + 1}` ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="23"
                                  height="23"
                                  rx="3.5"
                                  fill="var(--main-dark)"
                                />
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="23"
                                  height="23"
                                  rx="3.5"
                                  stroke="var(--main-dark)"
                                />
                                <path
                                  d="M17 8.84375L11.0089 14.8349C10.5207 15.323 9.72927 15.323 9.24112 14.8349L7 12.5938"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="23"
                                  height="23"
                                  rx="3.5"
                                  stroke="var(--main-dark)"
                                />
                              </svg>
                            )}
                          </div>
                          <div style={{ textAlign: "left" }}>
                            <div className="d-flex gap-4">
                              <p style={{ margin: "0px" }}>{item.name}</p>
                              <p style={{ margin: "0px" }}>${item.cost}</p>
                            </div>
                            <div>
                              <p style={{ fontSize: "12px" }}>
                                Lorem ipsum dolor sit amet consectetur.
                                Scelerisque nisl lectus sed odio adipiscing et.
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "15px 24px 15px 24px",
                      background: "var(--main-dark)",
                      color: "white",
                      borderRadius: "8px",
                      marginTop: "10px",
                    }}
                    onClick={() => {
                      close();
                      // successHandler.open();
                      handleSubmit();
                    }}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div
        style={{
          minWidth: "270px",
          minHeight: "520px",
          height: "max-content",
          background: "white",
          borderRadius: "16px",
          padding: "30px 16px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div>
          <p style={{ fontWeight: "600", fontSize: "x-large" }}>{Name}</p>
          <div className="d-flex"></div>
          <div>
            {features.map((item, index) => {
              return (
                <div
                  className="d-flex gap-3 "
                  key={index}
                  style={{ margin: "4px 0px" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="var(--main-dark)"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M17.3334 8.26672L10 15.6001L6.66669 12.2667"
                      stroke="var(--main-dark)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p style={{ color: "#8C90AA" }}>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={open}
          style={{
            width: "90%",
            background: "var(--main-dark)",
            color: "white",
            borderRadius: "16px",
            padding: "10px 53px 10px 53px",
          }}
        >
          Start Plan
        </button>
      </div>
    </>
  );
};

export default PlanCard;
