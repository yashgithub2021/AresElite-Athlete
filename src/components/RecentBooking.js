import React from "react";
import { Modal } from "@mantine/core";
import { useDisclosure, useSetState } from "@mantine/hooks";
import TableComp from "./TableComp";
import RecentBookingCard from "./layout/Components/RecentBookingCard";
import { getAllBooking } from "../features/apiCall";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const RecentBooking = () => {
  const { isFetching } = useSelector((state) => state.auth);
  const [opened, { open, close }] = useDisclosure(false);
  const [notifs, setNotifs] = useState([]);
  const fetchnotifs = async () => {
    const res = await getAllBooking();
    setNotifs(res);
  };
  useEffect(() => {
    fetchnotifs();
  }, [isFetching]);

  const filteredNotifs = notifs?.filter((item) => {
    if (
      item.service_type === "TeleSession" ||
      item.service_type === "OfflineVisit"
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Modal.Root opened={opened} onClose={close} centered={true} size="65rem">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title style={{ width: "100%" }}>
              <div className=" gap-3 mb-4 " style={{ width: "100%" }}>
                <div className="d-flex justify-content-between w-100">
                  <button
                    className="modal-close "
                    style={{ background: "#1C1C1C0D" }}
                    onClick={close}
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.92541 0.558058C7.19153 0.802136 7.19153 1.19786 6.92541 1.44194L2.4375 5.55806C2.17138 5.80214 2.17138 6.19786 2.4375 6.44194L6.92541 10.5581C7.19153 10.8021 7.19153 11.1979 6.92541 11.4419C6.65928 11.686 6.22781 11.686 5.96169 11.4419L1.47378 7.32583C0.675408 6.59359 0.675406 5.40641 1.47378 4.67418L5.96169 0.558058C6.22781 0.313981 6.65928 0.313981 6.92541 0.558058Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </button>
                  <button
                    className="modal-close "
                    style={{ background: "#1C1C1C0D" }}
                    onClick={close}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.46538 5.58052C6.2213 5.33644 5.82557 5.33644 5.5815 5.58052C5.33742 5.8246 5.33742 6.22033 5.5815 6.4644L9.11705 9.99996L5.58154 13.5355C5.33747 13.7795 5.33747 14.1753 5.58154 14.4194C5.82562 14.6634 6.22135 14.6634 6.46543 14.4194L10.0009 10.8838L13.5364 14.4194C13.7805 14.6634 14.1763 14.6634 14.4203 14.4194C14.6644 14.1753 14.6644 13.7795 14.4203 13.5355L10.8848 9.99996L14.4204 6.4644C14.6645 6.22033 14.6645 5.8246 14.4204 5.58052C14.1763 5.33644 13.7806 5.33644 13.5365 5.58052L10.0009 9.11608L6.46538 5.58052Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <h5>Recent Bookings</h5>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="table-cont"
              style={{ overflow: "scroll", padding: "0px 4px 0px" }}
            >
              <TableComp data={filteredNotifs} />
            </div>
            <div className="booking-card-cont">
              <RecentBookingCard />
              <hr />
              <RecentBookingCard />
              <hr />
              <RecentBookingCard />
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "30px",
          maxWidth: "90vw",
          marginBottom: "10px",
        }}
      >
        <div className="d-flex justify-content-between">
          <h5>Recent Bookings</h5>
          {notifs?.length != 0 && (
            <p
              onClick={open}
              style={{
                cursor: "pointer",
                color: "var(--main-dark)",
                fontWeight: "700",
              }}
            >
              View All
            </p>
          )}
        </div>
        {notifs?.length != 0 ? (
          <>
            <div
              className="table-cont"
              style={{ overflow: "scroll", padding: "0px 4px 0px" }}
            >
              <TableComp data={filteredNotifs} />
            </div>
            <div className="booking-card-cont">
              <RecentBookingCard />
              <hr />
              <RecentBookingCard />
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>No Notfications</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentBooking;
