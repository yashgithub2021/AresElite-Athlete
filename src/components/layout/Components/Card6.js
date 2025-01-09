import React, { useState, useEffect } from "react";
import {
  IoIosArrowBack as BackIcon,
  IoMdClose as CrossIcon,
} from "react-icons/io";
import { Modal, ActionIcon, CloseIcon } from "@mantine/core";
import ViewDrill from "./ViewDrill";

const Card6 = ({ drills }) => {
  const [selectedSession, setSelectedSession] = useState("Session 1");
  const [selectedDrills, setSelectedDrills] = useState([]);

  const [openViewAll, setOpenViewAll] = useState(false);
  const [openViewDrill, setOpenViewDrill] = useState(false);

  const [clickedDrill, setClickedDrill] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const drillsData = drills?.drillsData?.sessions?.find((session) => {
      return session.session === selectedSession;
    });
    setSelectedDrills(drillsData?.drills || []);
  }, [drills?.drillsData, selectedSession, setSelectedDrills]);

  function formatString(str) {
    if (str.length > 15 && !isMobile) {
      return str.slice(0, 17) + "...";
    }
    if (str.length > 6 && isMobile) {
      return str.slice(0, 3) + "...";
    }

    return str;
  }

  return (
    <div
      xs={6}
      sm={6}
      className="upper-card text-shadow "
      style={{
        background: "var(--main-dark)",
        width: "420px",
        overflow: "auto",
        scrollbarWidth: "none",
      }}
    >
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div
            style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff" }}
          >
            Drills
          </div>

          <button
            style={{ fontSize: "0.9rem", color: "#ffffff" }}
            onClick={() => setOpenViewAll(true)}
          >
            View all
          </button>
        </div>

        {drills.sessionNames?.length === 0 && (
          <div className="d-flex flex-column justify-content-center align-items-center mt-5 gap-2">
            {/* <div style={{ width: "5rem", height: "5rem" }}>
              <img src="/images/Logo.png" />
            </div> */}
            <img src={"/Logo.png"} width="70" height="70" fill="none" />

            <h3>No drills found </h3>
          </div>
        )}

        <div
          className="d-flex gap-2 mt-3 mb-3"
          style={{
            overflow: "auto",
            scrollbarWidth: "none",
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          {drills.sessionNames?.map((name) => (
            <button
              style={{
                color: "#ffffff",
                borderRadius: "1rem",
                backgroundColor: selectedSession === name && "#7257ff26",

                padding: "0.3rem 0.4rem",
              }}
              onClick={() => setSelectedSession(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className=" d-flex flex-column gap-3">
          {selectedDrills?.map((drill, index) => (
            <>
              <hr className="m-0" />

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2">
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#ffffff",
                    }}
                  >
                    {formatString(drill.drillName)}
                  </div>
                  <div>Drill {index + 1}</div>
                </div>

                <div>
                  <button
                    style={{
                      backgroundColor: "#ffffff",
                      color: "var(--main-dark)",
                      padding: "0.59rem 0.7rem",
                      borderRadius: "0.3rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      setOpenViewDrill(true);
                      setClickedDrill({
                        drillIndex: index,
                        sessionDrills: selectedDrills,
                      });
                    }}
                  >
                    View Drill
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <Modal
        opened={openViewAll}
        onClose={() => setOpenViewAll(false)}
        withCloseButton={false}
        centered
        size={isMobile ? "100%" : "95%"}
        radius={"1rem"}
      >
        <div className="d-flex justify-content-between mx-2 mt-3">
          <div className="d-flex align-items-center gap-3">
            <ActionIcon
              size={"md"}
              variant="default"
              style={{ border: "none", backgroundColor: "#1C1C1C0D" }}
              onClick={() => setOpenViewAll(false)}
            >
              <BackIcon />
            </ActionIcon>

            <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>Drills</div>
          </div>

          <div>
            <ActionIcon
              size={"md"}
              variant="default"
              style={{ border: "none", backgroundColor: "#1C1C1C0D" }}
              onClick={() => setOpenViewAll(false)}
            >
              <CloseIcon />
            </ActionIcon>
          </div>
        </div>
        <div className="px-md-5 px-2 pb-3" style={{ height: "70vh" }}>
          <div className="d-flex flex-column">
            <div
              className="d-flex gap-4 mt-3 mb-4 custom-scrollbar "
              style={{
                overflow: "auto",
                // scrollbarWidth: "none",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              {drills.sessionNames?.map((name) => (
                <button
                  style={{
                    borderRadius: "1rem",
                    color: selectedSession === name && "var(--main-dark)",
                    backgroundColor: selectedSession === name && "#7257ff26",

                    padding: "0.3rem 0.7rem",
                  }}
                  onClick={() => setSelectedSession(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className=" d-flex flex-column gap-4">
              {selectedDrills?.map((drill, index) => (
                <>
                  {" "}
                  <div className="d-flex justify-content-between">
                    <div
                      className="d-flex flex-column gap-1"
                      style={{ maxWidth: isMobile ? "70%" : "90%" }}
                    >
                      <div
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 500,
                        }}
                      >
                        {drill.drillName}
                      </div>
                      <div style={{ color: "#06002480", fontSize: "0.9rem" }}>
                        Drill {index + 1}
                      </div>
                    </div>

                    <div>
                      <button
                        style={{
                          backgroundColor: "var(--main-dark)",
                          color: "#ffffff",
                          padding: "0.59rem 0.7rem",
                          borderRadius: "0.3rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                        }}
                        onClick={() => {
                          setOpenViewAll(false);
                          setOpenViewDrill(true);
                          setClickedDrill({
                            drillIndex: index,
                            sessionDrills: selectedDrills,
                          });
                        }}
                      >
                        View Drill
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <ViewDrill
        openModal={openViewDrill}
        handleCloseModal={() => {
          setOpenViewDrill(false);
          setClickedDrill(null);
        }}
        clickedDrill={clickedDrill}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Card6;
