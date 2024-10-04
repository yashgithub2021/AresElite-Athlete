import React, { useState } from "react";
import { Avatar, RingProgress, LoadingOverlay } from "@mantine/core";
import { Text } from "@mantine/core";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import ServiceType from "../ServiceType";
import ServiceBooking from "./ServiceBooking";
import { hasAlreadyBookAppointment } from "../../../features/apiCall";

const ErrorToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Drillstats = ({ data, ispaid, userId }) => {
  const [showServiceType, setShowServiceType] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const [showBookModal, setShowBookModal] = useState(false);

  const dispatch = useDispatch();

  const perc = ((data?.completedDrills / data?.totalDrills) * 100).toFixed(1);
  return (
    <>
      {data?.totalDrills != 0 && ispaid == "paid" ? (
        <div
          xs={6}
          sm={6}
          className="training-card text-shadow"
          id="drillstate-cont"
        >
          <div className="d-flex  flex-wrap justify-content-between upper-train  ">
            <div>
              <h2 style={{ fontSize: "700" }}>Drills</h2>
            </div>
            <div></div>
          </div>
          <div className="train-stat-cont flex-shift gap-3">
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <table style={{ width: "100%", height: "70%" }}>
                {data?.totalDrills && (
                  <tr>
                    <th style={{ color: "#3C3F53" }}>Total</th>
                    <td style={{ color: "#8C90AA" }}>-{data.totalDrills}</td>
                  </tr>
                )}
                <tr>
                  <th style={{ color: "#3C3F53" }}>Completed</th>
                  <td style={{ color: "#8C90AA" }}>-{data?.completedDrills}</td>
                </tr>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Remaining</th>
                  <td style={{ color: "#8C90AA" }}>
                    -{data?.totalDrills - data?.completedDrills}
                  </td>
                </tr>
                <tr>
                  <th style={{ color: "#3C3F53" }}>Tele Session</th>
                  <td style={{ color: "#8C90AA" }}>
                    -
                    {Number(data?.teleSessions?.offlineDrills) +
                      Number(data?.teleSessions?.teleBookings)}
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
                    {perc}%
                  </Text>
                }
                sections={[{ value: perc, color: "var(--main-dark)" }]}
              />
              <RingProgress
                visibleFrom="sm"
                size={150}
                thickness={12}
                roundCaps
                label={
                  <Text c="black" fw={700} ta="center" size="xl">
                    {perc} %
                  </Text>
                }
                sections={[{ value: perc, color: "var(--main-dark)" }]}
              />
            </div>
          </div>

          <button
            className="px-4 py-2 fw-semibold rounded-3 mb-md-0 mt-0 mb-md-1 "
            style={{
              backgroundColor: "#7257FF26",
              color: "var(--main-dark)",
              fontSize: "1.1rem",
            }}
            onClick={() => {
              setShowServiceType(!showServiceType);
            }}
          >
            Book
          </button>
        </div>
      ) : (
        <>
          {data && ispaid != "paid" && (
            <>
              {" "}
              <div
                xs={6}
                sm={6}
                className="training-card text-shadow "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <img
                  src="/images/DoctorMenuLogo.png"
                  style={{ height: "90%", marginBottom: "-50px" }}
                />
                <h3>Select a plan to start drill</h3>
              </div>
            </>
          )}
          {!data && (
            <div xs={6} sm={6} className="training-card text-shadow pulsate">
              {
                <LoadingOverlay
                  visible={true}
                  zIndex={1000}
                  overlayProps={{ blur: 0, radius: "xl" }}
                />
              }
            </div>
          )}
        </>
      )}

      <ServiceType
        opened={showServiceType}
        handleClose={() => setShowServiceType(!showServiceType)}
        serviceType={serviceType}
        handleServiceSelect={async (value) => {
          let erroMsg = "";

          if (data?.teleSessions?.teleBookings < 1 && value === "TeleSession") {
            erroMsg = `Tele Session's maximum booking exceeded`;
            toast.error(erroMsg, ErrorToastOptions);
            return;
          }
          if (
            data?.teleSessions?.offlineDrills < 1 &&
            value === "OfflineVisit"
          ) {
            erroMsg = `Offline Visit's maximum booking exceeded `;
            toast.error(erroMsg, ErrorToastOptions);
            return;
          }

          const res = await hasAlreadyBookAppointment(dispatch, userId);
          if (!res) {
            return;
          }

          setServiceType(value);
          setShowBookModal(true);
        }}
      />

      <ServiceBooking
        showBookModal={showBookModal}
        handleModalOpen={() => setShowBookModal(true)}
        handleModalClose={() => setShowBookModal(false)}
        service_type={serviceType}
      />
    </>
  );
};

export default Drillstats;
