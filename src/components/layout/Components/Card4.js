import React from "react";
import { GetDrillDetails } from "../../../features/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";
import DrillSkeleton from "./DrillSkeleton";

const Card4 = () => {
  const clientId = localStorage.getItem("userId");
  const [totalWeeks, setTotalWeeks] = useState(0);
  const dispatch = useDispatch();
  const [selectedWeek, setSelectedWeek] = useState(2);
  const [drill_week_details, setDrillWeekDetails] = useState(null);
  const fetchDirlls = async () => {
    const params = { clientId, selectedWeek };
    const data = await GetDrillDetails(dispatch, params);
    if (data) {
      setDrillWeekDetails(data?.data?.weeks?.[0]);
      setTotalWeeks(data?.data?.totalWeeks);
    }
  };
  const { isFetching } = useSelector((state) => state.fetch_app);
  useEffect(() => {
    fetchDirlls();
  }, [selectedWeek, dispatch]);

  const [active, setActive] = React.useState(1);
  const [opened, { open, close }] = useDisclosure(false);
  const [modal2, modaloptions] = useDisclosure(false);
  const secondModalHandler = (e) => {
    close();
    modaloptions.open();
  };
  const [selectedActivity, setSelectedActivity] = useState([]);
  function filterformodal(selectedIndex) {
    const temp = drill_week_details?.drills?.map((item) => {
      return item.activities.map((activity, index) => {
        if (index == selectedIndex) {
          return activity;
        }
      });
    });
    setSelectedActivity(temp);
  }

  return (
    <>
      <Modal.Root
        opened={modal2}
        onClose={() => {
          modaloptions.close();
        }}
        size="50vw"
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <h4>
                {selectedActivity.length > 0 &&
                  selectedActivity[0][0]?.activityName}
              </h4>
            </Modal.Title>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                modaloptions.close();
              }}
            >
              <path
                d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z"
                fill="#F4F4F4"
              />
              <path
                d="M16.4654 15.5805C16.2213 15.3364 15.8256 15.3364 15.5815 15.5805C15.3374 15.8246 15.3374 16.2203 15.5815 16.4644L19.1171 20L15.5815 23.5355C15.3375 23.7795 15.3375 24.1753 15.5815 24.4194C15.8256 24.6634 16.2213 24.6634 16.4654 24.4194L20.0009 20.8838L23.5364 24.4194C23.7805 24.6634 24.1763 24.6634 24.4203 24.4194C24.6644 24.1753 24.6644 23.7795 24.4203 23.5355L20.8848 20L24.4204 16.4644C24.6645 16.2203 24.6645 15.8246 24.4204 15.5805C24.1763 15.3364 23.7806 15.3364 23.5365 15.5805L20.0009 19.1161L16.4654 15.5805Z"
                fill="#1C1C1C"
              />
            </svg>
          </Modal.Header>
          <Modal.Body>
            <div className="form-grid" style={{ padding: "30px" }}>
              {selectedActivity.length > 0 &&
                selectedActivity[0][0]?.form.map((item) => {
                  return (
                    <>
                      <TextInput
                        label={item.label}
                        variant="filled"
                        value={item.value}
                        disabled={true}
                      />
                    </>
                  );
                })}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Modal.Root opened={opened} onClose={close} size="50vw">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <div className="d-flex gap-4" style={{ alignItems: "center" }}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z"
                    fill="#1C1C1C"
                    fill-opacity="0.05"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9254 14.5581C23.1915 14.8021 23.1915 15.1979 22.9254 15.4419L18.4375 19.5581C18.1714 19.8021 18.1714 20.1979 18.4375 20.4419L22.9254 24.5581C23.1915 24.8021 23.1915 25.1979 22.9254 25.4419C22.6593 25.686 22.2278 25.686 21.9617 25.4419L17.4738 21.3258C16.6754 20.5936 16.6754 19.4064 17.4738 18.6742L21.9617 14.5581C22.2278 14.314 22.6593 14.314 22.9254 14.5581Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <h4>Drills</h4>
              </div>
            </Modal.Title>
            <div onClick={close}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H20.8C27.5206 0 30.8809 0 33.4479 1.30792C35.7058 2.4584 37.5416 4.29417 38.6921 6.55211C40 9.11905 40 12.4794 40 19.2V20.8C40 27.5206 40 30.8809 38.6921 33.4479C37.5416 35.7058 35.7058 37.5416 33.4479 38.6921C30.8809 40 27.5206 40 20.8 40H19.2C12.4794 40 9.11905 40 6.55211 38.6921C4.29417 37.5416 2.4584 35.7058 1.30792 33.4479C0 30.8809 0 27.5206 0 20.8V19.2Z"
                  fill="#F4F4F4"
                />
                <path
                  d="M16.4654 15.5805C16.2213 15.3364 15.8256 15.3364 15.5815 15.5805C15.3374 15.8246 15.3374 16.2203 15.5815 16.4644L19.1171 20L15.5815 23.5355C15.3375 23.7795 15.3375 24.1753 15.5815 24.4194C15.8256 24.6634 16.2213 24.6634 16.4654 24.4194L20.0009 20.8838L23.5364 24.4194C23.7805 24.6634 24.1763 24.6634 24.4203 24.4194C24.6644 24.1753 24.6644 23.7795 24.4203 23.5355L20.8848 20L24.4204 16.4644C24.6645 16.2203 24.6645 15.8246 24.4204 15.5805C24.1763 15.3364 23.7806 15.3364 23.5365 15.5805L20.0009 19.1161L16.4654 15.5805Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ minHeight: "60vh" }}>
            <div
              className="weekbuttons"
              style={{ width: "100%", overFlowX: "scroll" }}
            >
              {[...Array(totalWeeks)]?.map((item, index) => {
                if (selectedWeek == index + 1) {
                  return (
                    <button
                      className=" week-buttontwo week-button-selectedtwo"
                      onClick={() => {
                        setSelectedWeek(index + 1);
                      }}
                      style={{ fontSize: "small" }}
                    >
                      Week<span>{index + 1}</span>
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="week-buttontwo "
                      onClick={() => {
                        setSelectedWeek(index + 1);
                      }}
                      style={{ fontSize: "small" }}
                    >
                      Week<span>{index + 1}</span>
                    </button>
                  );
                }
              })}
            </div>
            <div style={{ padding: "30px" }}>
              <h5 style={{ marginBottom: "10px" }}>
                Day index <hr />
              </h5>
              {drill_week_details?.drills.map((item) => {
                return item.activities.map((activity, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h7 style={{ color: "#3C3F53CC" }}>
                          {activity.activityName}
                        </h7>
                        <p style={{ color: "#3C3F53CC" }}>
                          {activity.description}
                        </p>
                      </div>
                      <div>
                        <button
                          className="week-button week-button-selected"
                          style={{ fontSize: "small" }}
                          onClick={() => {
                            secondModalHandler();
                            filterformodal(index);
                          }}
                        >
                          View Drill
                        </button>
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      {isFetching ? <></> : <></>}
      <div
        xs={6}
        sm={6}
        className={
          isFetching
            ? `upper-card text-shadow pulsate`
            : `upper-card text-shadow`
        }
        style={{
          background: "var(--main-dark)",
          width: "420px",
        }}
      >
        {isFetching ? (
          <></>
        ) : (
          <>
            {" "}
            <div>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "700" }}>Drills</p>
                <div
                  style={{ display: "flex", overflow: "hidden", gap: "20px" }}
                >
                  {[...Array(totalWeeks)]?.map((item, index) => {
                    return (
                      <button
                        style={{
                          minWidth: "64px",
                          padding: " 4px 8px 4px 8px",
                        }}
                      >
                        <p style={{ color: "white", fontWeight: "500" }}>
                          Week {index + 1}
                        </p>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "500",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    <h5 style={{ color: "inherit" }}>Day 1</h5>
                    <button style={{ color: "inherit" }} onClick={open}>
                      View All
                    </button>
                  </div>
                  <hr />
                </div>
                <div>
                  {drill_week_details?.drills?.map((item) => {
                    return item.activities.map((activ, index) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "15px",
                          }}
                        >
                          <div style={{ color: "inherit" }}>
                            <div style={{ textAlign: "left" }}>
                              <p style={{ fontSize: "18px", margin: "0px" }}>
                                {activ.activityName}
                              </p>
                              <p
                                style={{
                                  fontSize: "12px",
                                  margin: "0px",
                                  marginTop: "2px",
                                  opacity: "0.5",
                                }}
                              >
                                {activ.description}
                              </p>
                            </div>
                          </div>
                          <button
                            style={{
                              color: "var(--main-dark)",
                              background: "white",
                              padding: "7.5px 10px 7.5px 10px",
                              borderRadius: "8px",
                            }}
                            onClick={() => {
                              secondModalHandler();
                              filterformodal(index);
                            }}
                          >
                            View Drill
                          </button>
                        </div>
                      );
                    });
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card4;
