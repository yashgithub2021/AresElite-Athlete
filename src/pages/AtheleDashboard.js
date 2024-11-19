import React from "react";
import CalenderComp from "../components/CalenderComp";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import RecentBooking from "../components/RecentBooking";

import { RingProgress, Text } from "@mantine/core";
import { Skeleton } from "@mantine/core";
import { div, Container, Row, Image } from "react-bootstrap";
import ServiceModal from "../components/ServiceModal";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import Notifications from "../components/layout/Components/Notifications";
import Card1 from "../components/Card1";
import Card2 from "../components/layout/Components/Card2";
import Card3 from "../components/layout/Components/Card3";
import TeleSessions from "../components/layout/Components/TeleSessions";
import TodaysSession from "../components/layout/Components/TodaysSession";
import { useSelector, useDispatch } from "react-redux";
import Card4 from "../components/layout/Components/Card4";
import { userDetails } from "../features/apiCall";
import { useEffect } from "react";
import Drillstats from "../components/layout/Components/Drillstats";
import { useState } from "react";
import Loadercard from "../components/layout/Components/Loadercard";
import Card5 from "../components/layout/Components/card5";
import Card6 from "../components/layout/Components/Card6";

import SportsVisionPerformanceEvaluation from "../assets/services/SportsVisionPerformanceEvaluation.jpeg";
import PostConcussionEvaluation from "../assets/services/PostConcussionEvaluation.jpeg";
import MedicalOfficeVisit from "../assets/services/MedicalOfficeVisit.jpeg";
import ConsultationCall from "../assets/services/ConsultationCall.jpeg";
import GlassesExam from "../assets/services/GlassesExam.jpeg";
import ContactLens from "../assets/services/ContactLens.jpeg";

const AtheleDashboard = () => {
  const name = useSelector((state) => state.auth.userName);
  const userId = useSelector((state) => state.auth.user);
  const plan = useSelector((state) => state.auth.plan);
  const is_Online = useSelector((state) => state.auth.is_Online);

  // console.log("is_online", is_Online);
  // const is_Online = online === "false" ? false : true;
  // console.log("isOnline", is_Online);

  const dispatch = useDispatch();
  const [userinfo, setuserinfo] = useState([]);
  const [shiparray, setshiparray] = useState([]);
  function separateShipment(apiResponse) {
    // Extract the shipment part
    const shipment = apiResponse.shipment;

    // Remove the shipment part from the original response
    const { shipment: _, ...responseWithoutShipment } = apiResponse;

    return {
      responseWithoutShipment,
      shipment,
    };
  }

  const getuserDetails = async () => {
    const { data } = await userDetails(dispatch);
    setuserinfo(data);
    const { responseWithoutShipment, shipment } = separateShipment(data);
    setshiparray(shipment);
  };
  // console.log("ship",shiparray[0]?.shipmentStatus.length)

  // console.log(shiparray[0]?.shipmentStatus[0].startDate)
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      getuserDetails();
    }
  }, []);

  const services = userinfo?.services;

  const getServiceConf = (isAmount, alias) => {
    const service = services?.find((service) => service.alias === alias);
    if (isAmount) {
      return service?.cost;
    }
    return service?.duration;
  };

  return (
    <AtheleteMenu>
      <section class="layout2">
        <div class="main">
          <div className="mb-md-0 mb-3">
            <p className="h4  ">
              Hello,
              <p className="font-weight-bold d-inline">{name}!</p>
              <span style={{ color: "#3C3F5399" }}>
                {" "}
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18.5L15 12.5L9 6.5"
                      stroke="#858698"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>{" "}
                Ares Academy
              </span>
            </p>
          </div>
          {/* This is row 1 contains your stat cards */}
          <div className="d-flex flex-md-row flex-column row1 grow1 upper-card-cont">
            {!userinfo?.userDetails && (
              <>
                <Loadercard color="var(--main-dark)" />
              </>
            )}

            {userinfo?.userDetails &&
              is_Online === "true" &&
              userinfo?.userDetails?.plan_payment == "paid" &&
              shiparray &&
              shiparray[0]?.shipmentStatus.length == 5 && (
                <Card1
                  data={userinfo?.drillActiveStatus}
                  datacomp={userinfo?.drillDetails}
                />
              )}
            {/* <Card2/>
          <Card3/>  */}
            {userinfo?.userDetails?.plan_payment == "paid" &&
              shiparray &&
              shiparray[0]?.shipmentStatus &&
              shiparray[0]?.shipmentStatus.length != 5 && (
                <Card3
                  len={shiparray[0]?.shipmentStatus.length}
                  trackingid={shiparray[0]?.trackingId}
                  startDate={shiparray[0]?.shipmentStatus[0].startDate}
                  endDate={shiparray[0]?.shipmentStatus[0].endDate}
                />
              )}

            {userinfo?.userDetails?.plan_payment === "paid" &&
              is_Online === "false" && <Card6 drills={userinfo?.drills} />}

            {userinfo?.userDetails?.plan_payment == "paid" &&
              is_Online === "true" &&
              (!shiparray || !shiparray[0]?.shipmentStatus) && <Card5 />}

            {userinfo?.userDetails &&
              userinfo?.userDetails?.plan_payment != "paid" && (
                <Card2 is_Online={is_Online} />
              )}
            {is_Online === "false" && (
              <TeleSessions
                trainingdata={userinfo?.sessionDetails}
                userId={userId}
                isPaid={userinfo?.userDetails?.plan_payment === "paid"}
              />
            )}

            {is_Online === "true" && (
              <Drillstats
                data={userinfo.drillDetails}
                ispaid={userinfo?.userDetails?.plan_payment}
                userId={userId}
              />
            )}
          </div>
          {/* -------------- */}
          {/* This row has service Cards */}
          <div className="mt-4">
            <h4 className=" text-shadow">Select Service</h4>
            <div className="services-cont text-shadow ">
              <div
                style={{ backgroundColor: "#3B444B", borderRadius: "10px" }}
                className=" service-box text-light mb-4 d-flex justify-content-between  align-items-center box-shadow-drop-bottom "
              >
                <ServiceModal
                  service_type={"SportsVisionPerformanceEvaluation"}
                  svg={SportsVisionPerformanceEvaluation}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1943 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                        fill="white"
                      />
                    </svg>
                  }
                  heading={"Sports Vision Performance Evaluation"}
                  amount={getServiceConf(
                    true,
                    "SportsVisionPerformanceEvaluation"
                  )}
                  meetingTime={getServiceConf(
                    false,
                    "SportsVisionPerformanceEvaluation"
                  )}
                  divors={{ heading: "white", text: "#FFFFFFCC" }}
                  // session={{ time: "8:30" }}
                />
              </div>
              {is_Online === "false" && (
                <div
                  sm={6}
                  xs={12}
                  style={{ backgroundColor: "#907F9F", borderRadius: "10px" }}
                  className=" service-box text-light  mb-4 d-flex justify-content-between  align-items-center box-shadow-drop-bottom "
                >
                  <ServiceModal
                    service_type={"GlassesExam"}
                    svg={GlassesExam}
                    icon={
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.98951 18.5303C8.67016 18.2374 8.67016 17.7626 8.98951 17.4697L14.375 12.5303C14.6943 12.2374 14.6944 11.7626 14.375 11.4697L8.98951 6.53033C8.67016 6.23744 8.67016 5.76256 8.98951 5.46967C9.30886 5.17678 9.82663 5.17678 10.146 5.46967L15.5315 10.409C16.4895 11.2877 16.4895 12.7123 15.5315 13.591L10.146 18.5303C9.82663 18.8232 9.30886 18.8232 8.98951 18.5303Z"
                          fill="#060024"
                        />
                      </svg>
                    }
                    heading={"Glasses Exam"}
                    amount={getServiceConf(true, "GlassesExam")}
                    meetingTime={getServiceConf(false, "GlassesExam")}
                    divors={{ heading: "white", text: "#FFFFFFCC" }}
                  />
                </div>
              )}

              {is_Online === "false" && (
                <div
                  sm={6}
                  style={{ backgroundColor: "#6F7D8C", borderRadius: "10px" }}
                  className="service-box text-light  mb-4 d-flex justify-content-between  align-items-center box-shadow-drop-bottom "
                >
                  <ServiceModal
                    service_type={"ContactLensExam"}
                    svg={ContactLens}
                    icon={
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.98951 18.5303C8.67016 18.2374 8.67016 17.7626 8.98951 17.4697L14.375 12.5303C14.6943 12.2374 14.6944 11.7626 14.375 11.4697L8.98951 6.53033C8.67016 6.23744 8.67016 5.76256 8.98951 5.46967C9.30886 5.17678 9.82663 5.17678 10.146 5.46967L15.5315 10.409C16.4895 11.2877 16.4895 12.7123 15.5315 13.591L10.146 18.5303C9.82663 18.8232 9.30886 18.8232 8.98951 18.5303Z"
                          fill="#060024"
                        />
                      </svg>
                    }
                    heading={"Contact Lens Exam"}
                    amount={getServiceConf(true, "ContactLensExam")}
                    meetingTime={getServiceConf(false, "ContactLensExam")}
                    divors={{ heading: "white", text: "#FFFFFFCC" }}
                  />
                </div>
              )}

              <div
                sm={6}
                style={{ backgroundColor: "#848482", borderRadius: "10px" }}
                className=" service-box text-light mb-4 d-flex justify-content-between align-items-center box-shadow-drop-bottom "
              >
                <ServiceModal
                  service_type={"Post-ConcussionEvaluation"}
                  svg={PostConcussionEvaluation}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1943 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                        fill="white"
                      />
                    </svg>
                  }
                  heading={"Post-Concussion Evaluation"}
                  amount={getServiceConf(true, "Post-ConcussionEvaluation")}
                  meetingTime={getServiceConf(
                    false,
                    "Post-ConcussionEvaluation"
                  )}
                  divors={{ heading: "white", text: "white" }}
                />
                {/* <img
                        src="/images/icon/postcon.svg"
                        className="service-cont-icon"
                        style={{ height: "60%" }}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Post-Concussion Evaluation</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock_light.svg"
                            className="service-cont-clock
                    "
                          />{" "}
                          $13.88 per 30 Minutes
                        </p>
                      </div>
                      <img
                        src="/images/icon/service.svg"
                        className="service-cont-arrow
                    "
                      /> */}
              </div>

              <div
                sm={6}
                style={{ backgroundColor: "#C1E2F4", borderRadius: "10px" }}
                className="service-box mb-4 d-flex justify-content-between  align-items-center box-shadow-drop-bottom "
              >
                <ServiceModal
                  service_type={"Medical/OfficeVisit"}
                  svg={MedicalOfficeVisit}
                  icon={
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.98951 18.5303C8.67016 18.2374 8.67016 17.7626 8.98951 17.4697L14.375 12.5303C14.6943 12.2374 14.6944 11.7626 14.375 11.4697L8.98951 6.53033C8.67016 6.23744 8.67016 5.76256 8.98951 5.46967C9.30886 5.17678 9.82663 5.17678 10.146 5.46967L15.5315 10.409C16.4895 11.2877 16.4895 12.7123 15.5315 13.591L10.146 18.5303C9.82663 18.8232 9.30886 18.8232 8.98951 18.5303Z"
                        fill="#060024"
                      />
                    </svg>
                  }
                  heading={"Medical/Office Visit"}
                  amount={getServiceConf(true, "Medical/OfficeVisit")}
                  meetingTime={getServiceConf(false, "Medical/OfficeVisit")}
                  divors={{ heading: "black", text: "black" }}
                />
              </div>
              <div
                sm={6}
                xs={12}
                style={{ backgroundColor: "#D9CFFB", borderRadius: "10px" }}
                className=" service-box mb-4 d-flex justify-content-between  align-items-center box-shadow-drop-bottom "
              >
                <ServiceModal
                  service_type={"ConsultationCall"}
                  svg={ConsultationCall}
                  icon={
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.98951 18.5303C8.67016 18.2374 8.67016 17.7626 8.98951 17.4697L14.375 12.5303C14.6943 12.2374 14.6944 11.7626 14.375 11.4697L8.98951 6.53033C8.67016 6.23744 8.67016 5.76256 8.98951 5.46967C9.30886 5.17678 9.82663 5.17678 10.146 5.46967L15.5315 10.409C16.4895 11.2877 16.4895 12.7123 15.5315 13.591L10.146 18.5303C9.82663 18.8232 9.30886 18.8232 8.98951 18.5303Z"
                        fill="#060024"
                      />
                    </svg>
                  }
                  heading={"Consultation Call"}
                  amount={getServiceConf(true, "ConsultationCall")}
                  meetingTime={getServiceConf(false, "ConsultationCall")}
                  divors={{ heading: "black", text: "black" }}
                />
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="mt-4 text-shadow">
            <Row>
              <div>
                <RecentBooking />
              </div>
            </Row>
          </div>
        </div>
        <div class="rightcont text-shadow  ">
          {/* <Row className=" bg-white  box-shadow row1 " style={{borderRadius:"18px",padding:"2rem 0.5rem 2rem"}}>
                <div className="calender-comp">
                  <div style={{width:"100%"}}>
                    <p>Calender</p>
                    <hr/>
                    <CalenderComp hiddenFrom="sm" />
                    <hr/>
                  </div>
                </div>
                <TodaysSession/>
              </Row> */}
          <Row
            className="mt-4 bg-white pt-4 pb-4 box-shadow  "
            style={{ borderRadius: "10px" }}
          >
            <Notifications />
          </Row>
        </div>
      </section>
    </AtheleteMenu>
  );
};

export default AtheleDashboard;
