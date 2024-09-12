import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import "../styles/athele.css";
import "../styles/athelehome.css";
import "../styles/doctor.css";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Progress } from "@mantine/core";
import { RingProgress, Text } from "@mantine/core";
import CalenderComp from "../components/CalenderComp";
import { Table } from "@mantine/core";
import TableComp from "../components/TableComp";

import ServiceModal from "../components/ServiceModal";
import RecentBooking from "../components/RecentBooking";
import Notifications from "../components/layout/Components/Notifications";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

Chart.register(ArcElement);

const AtheleHome = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const data = [
    { name: "USA", value: 400, color: "var(--main-dark)" },
    { name: "India", value: 300, color: "#7257FF26" },
  ];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AtheleteMenu>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <section style={{ overflowY: "hidden" }} className="athel-home">
        <Container style={{ height: "85%", width: "99%" }}>
          <Row style={{ height: "100%" }} className="justify-content-around ">
            <Col sm={8} xs={12} className="d-grid  all-cont-width">
              <p className="h4 ">
                Hello,
                <p className="font-weight-bold d-inline">
                  Colter! <img src="/images/icon/hi.svg" />
                </p>
              </p>
              <Row className=" gap-2 flex-row" style={{ minHeight: "300px" }}>
                <div
                  xs={6}
                  sm={6}
                  className="upper-card"
                  style={{
                    background: "var(--main-dark)",
                  }}
                >
                  <div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <img
                      className="circle-img"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/win-sports-competition-4981299-4145076.png?f=webp"
                    />
                    <div className="flex-shift justify-content-between  ">
                      <div>
                        <p>Sports Vision Performance Evaluation</p>
                        <h2>Week 1</h2>
                      </div>
                      <div>
                        <div className="comp">15% complete</div>
                      </div>
                    </div>
                    <div className="progress-stat mt-2">
                      <div className="d-flex gap-3">
                        <i class="fa-solid fa-play"></i>
                        <p>Day 1 - Web Development (webflow)</p>
                      </div>

                      <Progress value={50} striped color="#FFFFFF" />
                    </div>
                    <div>
                      <div className="start-drill">
                        <p>Start Drill</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Col xs={6} sm={6} className="training-card">
                  <div className="d-flex justify-content-between upper-train  ">
                    <div>
                      <h2>Training Session</h2>
                    </div>
                    <div>
                      <div className="view-all" onClick={open}>
                        View All
                      </div>
                    </div>
                  </div>
                  <div className="train-stat-cont flex-shift justify-content-between">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <table style={{ width: "100%" }}>
                        <tr>
                          <th style={{ color: "#3C3F53" }}>Total</th>
                          <td>-0</td>
                        </tr>
                        <tr>
                          <th style={{ color: "#3C3F53" }}>Remaining</th>
                          <td>-0</td>
                        </tr>
                      </table>
                    </div>
                    <div className="d-flex justify-content-center items-start">
                      <RingProgress
                        hiddenFrom="sm"
                        size={100}
                        thickness={7}
                        roundCaps
                        label={
                          <Text c="black" fw={700} ta="center" size="xl">
                            40%
                          </Text>
                        }
                        sections={[{ value: 40, color: "var(--main-dark)" }]}
                      />
                      <RingProgress
                        visibleFrom="sm"
                        size={150}
                        thickness={8}
                        roundCaps
                        label={
                          <Text c="black" fw={700} ta="center" size="xl">
                            40%
                          </Text>
                        }
                        sections={[{ value: 40, color: "var(--main-dark)" }]}
                      />
                    </div>
                  </div>
                  <div className="start-drill bg-alt">
                    <p>Add</p>
                  </div>
                </Col>
              </Row>
              <Row
                className="mobile"
                style={{
                  background: "white",
                  padding: "10px",
                  marginBottom: "10px",
                  maxWidth: "90vw",
                  borderRadius: "10px",
                }}
              >
                <div className="calender-comp">
                  <div>
                    <p>Calender</p>
                    <CalenderComp hiddenFrom="sm" />
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <h5>Todays Session</h5>
                  <Link className="view-all" style={{ fontSize: "13px" }}>
                    View All
                  </Link>
                </div>
                <div className="appointments-aligned mt-3">
                  <div className="appointments-aligned-div">
                    <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="appointments-aligned-div">
                    <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <h5>Select Service</h5>
                <Container className="services-cont ">
                  <Row
                    className="justify-content-between "
                    style={{ maxWidth: "85vw" }}
                  >
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#57315A" }}
                      className="text-light mb-4 d-flex justify-content-between  align-items-center"
                    >
                      <ServiceModal
                        heading={"Sports Vision Performance Evaluation"}
                        amount={"349"}
                        colors={{ heading: "white", text: "#FFFFFFCC" }}
                        session={{ time: "8:30" }}
                      />
                    </Col>
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#FF8989" }}
                      className="text-light mb-4 d-flex justify-content-between align-items-center"
                    >
                      <ServiceModal
                        heading={"Post-Concussion Evaluation"}
                        amount={"199"}
                        colors={{ heading: "white", text: "white" }}
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
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-between"
                    style={{ maxWidth: "80vw" }}
                  >
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#C1E2F4" }}
                      className=" mb-4 d-flex justify-content-between  align-items-center"
                    >
                      {/* <img
                        src="/images/icon/medical.svg"
                        className="service-cont-icon"
                        style={{ height: "60%" }}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Medical/Office visit</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock.svg"
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
                      <ServiceModal
                        heading={"Medical/Office Visit"}
                        amount={"50"}
                        colors={{ heading: "black", text: "black" }}
                      />
                    </Col>
                    <Col
                      sm={6}
                      xs={12}
                      style={{ backgroundColor: "#D9CFFB" }}
                      className=" mb-4 d-flex justify-content-between  align-items-center"
                    >
                      {/* <img
                        src="/images/icon/consul.svg"
                        className="service-cont-icon"
                        style={{ height: "60%" ,background:"white"}}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Consultation Call</h7>
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
                      <ServiceModal
                        heading={"Consultation Call"}
                        colors={{ heading: "black", text: "black" }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row>
                <Col>
                  <RecentBooking />
                </Col>
              </Row>
            </Col>

            <Col
              class="col-md-auto dekstop "
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                paddingTop: "20px",
                marginLeft: "25px",
                marginRight: "25px",
                padding: "20px 10px",
              }}
            >
              {/* <Calendar
                defaultValue={defaultValues}
                style={{ height: "200px" }}
              /> */}
              <Row className="m-1 ">
                <div className="calender-comp">
                  <div>
                    <p>Calender</p>
                    <CalenderComp hiddenFrom="sm" />
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <h5>Todays Session</h5>
                  <Link className="view-all" style={{ fontSize: "13px" }}>
                    View All
                  </Link>
                </div>
                <div className="appointments-aligned mt-3">
                  <div className="appointments-aligned-div">
                    <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alwdex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="appointments-aligned-div">
                    <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="m-1">
                <Notifications />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </AtheleteMenu>
  );
};

export default AtheleHome;
