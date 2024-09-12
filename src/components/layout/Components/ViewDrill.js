import React, { useState, useEffect } from "react";
import { Modal, ActionIcon, CloseIcon } from "@mantine/core";
import {
  IoIosArrowBack as BackIcon,
  IoMdClose as CrossIcon,
} from "react-icons/io";
import {
  FaArrowLeft as LeftArrow,
  FaArrowRight as RightArrow,
} from "react-icons/fa";

function ViewDrill({ openModal, handleCloseModal, clickedDrill, isMobile }) {
  const [currentDrill, setCurrentDrill] = useState(0);
  const [drillInputs, setDrillInputs] = useState([]);

  const drillData = clickedDrill?.sessionDrills[currentDrill];

  useEffect(() => {
    let dInputs = Object.entries(drillData?.inputValues || {})?.map(
      ([key, value]) => ({
        key,
        value,
      })
    );
    setDrillInputs(dInputs);
  }, [drillData?.inputValues]);

  useEffect(() => {
    setCurrentDrill(clickedDrill?.drillIndex);
  }, [clickedDrill?.drillIndex]);

  function camelToNormalString(camelStr) {
    // Insert spaces before uppercase letters and convert to lowercase
    const spacedStr = camelStr.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Capitalize the first letter of the resulting string
    const normalStr = spacedStr.charAt(0).toUpperCase() + spacedStr.slice(1);

    return normalStr;
  }

  const goBackAction = () => {
    if (currentDrill >= 1) {
      setCurrentDrill((prev) => {
        if (prev >= 1) return prev - 1;
        return prev;
      });
    }
  };

  const goNextAction = () => {
    if (currentDrill < clickedDrill?.sessionDrills.length - 1) {
      setCurrentDrill((prev) => {
        if (prev <= clickedDrill?.sessionDrills.length - 1) return prev + 1;
        return prev;
      });
    }
  };

  console.log("DrillInputs", drillInputs);
  const inputArray = (val) => {
    if (Array.isArray(val)) {
      return val.join(", ");
    }
    return val;
  };
  return (
    <Modal.Root
      opened={openModal}
      onClose={handleCloseModal}
      withCloseButton={false}
      centered
      size={isMobile ? "100%" : "50%"}
    >
      {/* <div className="d-flex justify-content-end ">
        <ActionIcon
          size={"md"}
          variant="default"
          style={{ border: "none", backgroundColor: "#1C1C1C0D" }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </ActionIcon>
      </div> */}

      <Modal.Overlay />
      <Modal.Content style={{ height: "100vh" }} radius={"1rem"}>
        <Modal.Body
          className="d-flex flex-column justify-content-between pb-4"
          style={{ height: "100%" }}
        >
          <div>
            <div
              className="d-flex justify-content-between px-2 pt-3"
              // style={{ height: "70vh" }}
            >
              <div className="d-flex align-items-top gap-3">
                <ActionIcon
                  size={"md"}
                  variant="default"
                  style={{
                    border: "none",
                    backgroundColor: "#1C1C1C0D",
                    marginTop: "0.4rem",
                    //   alignSelf: "top",
                  }}
                  onClick={handleCloseModal}
                >
                  <BackIcon />
                </ActionIcon>

                <div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      hyphens: "auto",
                      wordBreak: "break-all",
                    }}
                  >
                    {drillData?.drillName}
                  </div>

                  <div
                    style={{
                      color: "#8C90AA",
                      backgroundColor: "#0D0D0D0A",
                      width: "max-content",
                      borderRadius: "2rem",
                    }}
                    className="py-1 px-3 mt-2"
                  >
                    <button
                      className="p-0"
                      onClick={goBackAction}
                      style={{ marginRight: "0.5rem" }}
                    >
                      <LeftArrow size={13} color="#323232" />{" "}
                    </button>{" "}
                    | {currentDrill + 1} of {clickedDrill?.sessionDrills.length}{" "}
                    drills |{" "}
                    <button
                      className="p-0"
                      onClick={goNextAction}
                      style={{ marginLeft: "0.5rem" }}
                    >
                      <RightArrow size={13} color="#323232" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-1 mt-4 mx-lg-5 mx-2 align-items-center pb-2">
              <div className="drill-box mt-2">
                {drillInputs?.map((input, index) => {
                  return (
                    <div
                      className="drill-item"
                      key={index}
                      style={{ width: input.key === "notes" && "100%" }}
                    >
                      <div style={{ fontSize: "1rem", fontWeight: 500 }}>
                        {" "}
                        {camelToNormalString(input.key)}{" "}
                      </div>
                      <div
                        className="py-2 px-2"
                        style={{
                          fontSize: "0.9rem",
                          border: "1px solid #dbcdcd",
                          color: "#0E0057B2",
                          borderRadius: "0.2rem",
                          height: input.key === "notes" && "5rem",
                          overflowY: input.key === "notes" && "auto",
                        }}
                      >
                        {" "}
                        {inputArray(input.value)}{" "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2 mt-auto">
            <button
              style={{
                backgroundColor: "#EAE6FF",
                color: "var(--main-dark)",
                width: isMobile ? "7rem" : "8rem",

                padding: "0.5rem 0",
              }}
              onClick={goBackAction}
            >
              <div className="d-flex justify-content-center align-items-center gap-2 ">
                <LeftArrow />
                <div>Previous</div>
              </div>
            </button>

            <button
              style={{
                backgroundColor: "#EAE6FF",
                color: "var(--main-dark)",
                width: isMobile ? "7rem" : "8rem",
                padding: "0.5rem 0",
              }}
              onClick={goNextAction}
            >
              <div className="d-flex justify-content-center align-items-center gap-2 ">
                <div>Next</div>
                <RightArrow />
              </div>
            </button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}

export default ViewDrill;
