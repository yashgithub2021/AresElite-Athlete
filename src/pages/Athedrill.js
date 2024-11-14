import React from "react";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { Accordion, Divider, Progress, TextInput } from "@mantine/core";
import { GetDrillDetails } from "../features/apiCall";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrillForm from "../components/DrillForm";

import { useParams } from "react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Athedrill = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [totalWeeks, setTotalWeeks] = useState("");
  const [completePercentage, setCompletePercentage] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [ActivityId, setActivityId] = useState("");
  const [selectedIndex, setIndex] = useState(null);
  const [totalActivities, setTotal] = useState(null);
  const [visible, { toggle }] = useDisclosure(false);
  const [imageurl, setimageurl] = useState("");
  const dispatch = useDispatch();
  const [drill_week_details, setDrillWeekDetails] = useState(null);
  const clientId = localStorage.getItem("userId");
  console.log("Selected==>", selectedActivity);
  const { appointment_id } = useParams();

  const { isFetching } = useSelector((state) => state.fetch_app);
  console.log(isFetching);
  const fetchDirlls = async () => {
    const params = { appointmentId: appointment_id, clientId, selectedWeek };
    const data = await GetDrillDetails(dispatch, params);
    if (data) {
      setDrillWeekDetails(data?.data?.weeks?.[0]);
      setCompletePercentage(data?.data?.completePercentage);
      setTotalWeeks(data?.data?.totalWeeks);
      setSelectedActivity(data?.data?.weeks?.[0]?.drills?.[0]?.activities?.[0]);
    }
    console.log(drill_week_details);
  };
  useEffect(() => {
    fetchDirlls();
  }, [selectedWeek, dispatch]);
  const handleimag = (value) => {
    open();
    setimageurl(value);
  };
  const handleLabelClick = (activity, index, total) => {
    console.log(activity);
    setSelectedActivity(activity);
    setIndex(index);
    setTotal(total);
    setActivityId(activity?._id);
    // Update(activity?._id);
  };

  // const Update = async () => {
  //   try {
  //     const success = await SubmitDrillForm(dispatch, {
  //       activityId: ActivityId,
  //     });
  //   } catch (error) {}
  // };

  const DataArray = drill_week_details?.drills?.map((item) => {
    var done_drill = 0;
    item.activities.map((item) => {
      if (item.isComplete) {
        done_drill++;
      }
    });
    const completed = (done_drill / item.activities.length) * 100;
    return {
      emoji: (
        <div
          className="d-flex gap-4"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className="d-flex gap-1"
            style={{
              alignItems: "center",
              minWidth: "5rem",
            }}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M13.2109 10L9.46094 7.5V12.5L13.2109 10Z"
                stroke="#564FFD"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              {item.activities.length}{" "}
              {item.activities.length == 1 ? `drill` : `drills`}
            </p>
          </div>
          {/* <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7109 17.5C14.8531 17.5 18.2109 14.1421 18.2109 10C18.2109 5.85786 14.8531 2.5 10.7109 2.5C6.5688 2.5 3.21094 5.85786 3.21094 10C3.21094 14.1421 6.5688 17.5 10.7109 17.5Z"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-miterlimit="10"
              />
              <path
                d="M10.7109 5.625V10H15.0859"
                stroke="#FD8E1F"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              51 min
            </p>
          </div> */}
          <div className="d-flex gap-1" style={{ alignItems: "center" }}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2734 6.5625L5.39844 13.4375L1.96094 10.0002"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.4627 6.5625L12.5877 13.4375L10.7617 11.6116"
                stroke="#23BD33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p style={{ margin: 0, color: "#4E5566", fontSize: "small" }}>
              {completed?.toFixed(1)}% finish
            </p>
          </div>
        </div>
      ),
      value: `Day ${item.day}`,
      description: (
        <div style={{ height: "150px", overflowY: "scroll" }}>
          {item.activities.map((activity, index) => {
            return (
              <div
                className="tasks"
                key={index}
                onClick={() => {
                  handleLabelClick(activity, index, item.activities.length);
                }}
              >
                <div className="task-title-cont">
                  {" "}
                  <div>
                    {!activity?.isComplete ? (
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.21021"
                          y="0.5"
                          width="17"
                          height="17"
                          rx="3.5"
                          fill="white"
                        />
                        <rect
                          x="1.21021"
                          y="0.5"
                          width="17"
                          height="17"
                          rx="3.5"
                          stroke="var(--main-dark)"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.710938"
                          width="17"
                          height="17"
                          rx="4"
                          fill="var(--main-dark)"
                        />
                        <path
                          d="M14.5234 5.93799L8.39844 12.0627L5.33594 9.00049"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="task-title">
                    {index + 1}.{activity.activityName}
                  </p>
                </div>
                <div className="d-flex gap-3" style={{ alignItems: "center" }}>
                  <div>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3028 7.57338L5.30431 2.0741C5.22852 2.02778 5.14175 2.00248 5.05294 2.00082C4.96413 1.99916 4.87648 2.02118 4.799 2.06463C4.72153 2.10808 4.65703 2.17139 4.61214 2.24803C4.56724 2.32468 4.54358 2.41191 4.54358 2.50073V13.4993C4.54358 13.5881 4.56724 13.6754 4.61214 13.752C4.65703 13.8287 4.72153 13.892 4.799 13.9354C4.87648 13.9789 4.96413 14.0009 5.05294 13.9992C5.14175 13.9976 5.22852 13.9723 5.30431 13.9259L14.3028 8.42666C14.3759 8.38199 14.4363 8.3193 14.4782 8.2446C14.5201 8.16989 14.5421 8.08567 14.5421 8.00002C14.5421 7.91437 14.5201 7.83015 14.4782 7.75545C14.4363 7.68074 14.3759 7.61805 14.3028 7.57338Z"
                        fill="#A1A5B3"
                      />
                    </svg>
                  </div>
                  {/* <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "small",
                        color: "#A1A5B3",
                        textAlign: "center",
                      }}
                    >
                      07:31
                    </p>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      ),
    };
  });

  const items = DataArray?.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} style={{ borderRadius: "12px" }}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <AtheleteMenu>
      <Modal.Root
        opened={opened}
        onClose={close}
        size={"70rem"}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body style={{ padding: "0px", borderRadius: "30px" }}>
            <img src={imageurl} style={{ height: "100%", width: "100%" }} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <LoadingOverlay
        visible={isFetching}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 4 }}
      />

      <div className="aDrill-main">
        <div className="drill-main-box weeks">
          <div className="weekbuttons">
            {[...Array(totalWeeks)]?.map((item, index) => {
              if (selectedWeek == index + 1) {
                return (
                  <button
                    className=" week-button week-button-selected"
                    onClick={() => {
                      setSelectedWeek(index + 1);
                    }}
                  >
                    Week {index + 1}
                  </button>
                );
              } else {
                return (
                  <button
                    className="week-button"
                    onClick={() => {
                      setSelectedWeek(index + 1);
                    }}
                  >
                    Week {index + 1}
                  </button>
                );
              }
            })}
          </div>
          <div>
            {completePercentage == 100 && (
              <button
                className="upgrade-plan"
                onClick={() => {
                  navigate("/a-plans");
                }}
              >
                Upgrade Plan
              </button>
            )}
          </div>
        </div>
        <div className="drill-main-box video-cont">
          <div className="video-player" style={{ height: "100%" }}>
            <h5>
              {drill_week_details && (
                <>
                  {drill_week_details?.drills?.[0]?.plan}(
                  {drill_week_details?.drills?.[0]?.phase})- Week{" "}
                  {drill_week_details?.week}
                </>
              )}
            </h5>
            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {selectedActivity &&
                selectedActivity?.fileLinks?.map((item) => {
                  if (item.type == "video") {
                    return (
                      <video
                        width="90%"
                        height={"300px"}
                        controls
                        style={{
                          borderRadius: "26.78px",
                          marginBottom: "4rem",
                          marginTop: "2rem",
                        }}
                      >
                        <source src={item.link} type="video/mp4" />
                      </video>
                    );
                  }
                })}

              <div
                style={{
                  minWidth: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Carousel
                  slideSize="33.333333%"
                  slideGap="40px"
                  loop
                  align="start"
                  slidesToScroll={3}
                  withControls={false}
                >
                  {selectedActivity &&
                    selectedActivity?.fileLinks?.map((item) => {
                      if (item.type == "image") {
                        return (
                          <Carousel.Slide>
                            <div>
                              <img
                                src={item.link}
                                style={{
                                  widht: "80px",
                                  height: "80px",
                                  borderRadius: "10px",
                                }}
                                onClick={() => {
                                  handleimag(item.link);
                                }}
                              />
                            </div>
                          </Carousel.Slide>
                        );
                      }
                    })}
                  {/* { selectedActivity &&  selectedActivity?.fileLinks?.map((item)=>{
      if(item.type="image"){
        return(
          <Carousel.Slide><div><img src={item.link} style={{widht:"80px",height:"80px",borderRadius:"10px"}} onClick={()=>{handleimag(item.link)}}/ ></div></Carousel.Slide>
        )
      }
       
      })} */}
                </Carousel>
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="drill-progress">
              <div className="d-flex justify-content-between">
                <h4>Drill Contents</h4>
                <p style={{ color: "green" }}>
                  {" "}
                  {completePercentage && completePercentage?.toFixed(1)}%
                  Completed
                </p>
              </div>
              <Progress
                color="green"
                value={completePercentage}
                style={{ background: "transparent" }}
              />
            </div>
            <Accordion chevronPosition="left" variant="filled">
              {items}
            </Accordion>
          </div>
        </div>
        {/* <div className="drill-main-box calibration-forms">
          <h4>NeuroTrainer (Calibration)</h4>
          <p style={{ color: "#8C90AA", marginTop: "-1px" }}>Drill 2 of 4</p>
          <div className="calibration-forms-cont">
            <div><TextInput label="Head Check Speed #1 *"
      variant="filled"
      placeholder="Enter Head "/></div>
           
            <div><TextInput label="Pass Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head "/></div>
            <div><TextInput label="Pass Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Swat Accuracy Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Bonus #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            <div><TextInput label="Score #1*"
      variant="filled"
      placeholder="Enter Head"/></div>
            
       
          </div>
        </div> */}

        <DrillForm
          activity={
            selectedActivity || drill_week_details?.drills?.[0]?.activities?.[0]
          }
          index={selectedIndex + 1 || 1}
          total={totalActivities || 6}
          disable={selectedActivity?.isComplete}
          fetchDirlls={fetchDirlls}
        />
      </div>
    </AtheleteMenu>
  );
};

export default Athedrill;
