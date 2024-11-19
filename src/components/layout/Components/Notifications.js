import React from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  GetNotifications,
  MarkNotificationsRead,
} from "../../../features/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@mantine/core";

const Notifications = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [Notifs, setNotifs] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  const fecthNoticiations = async () => {
    setLoading(true);
    const res = await GetNotifications();
    setNotifs(res.notifications);
    setUnreadCount(res.unreadCounts);
    setLoading(false);
  };
  useEffect(() => {
    fecthNoticiations();
  }, []);

  const markReadHandler = async () => {
    setIsUpdating(true);
    await MarkNotificationsRead();
    setIsUpdating(false);
    fecthNoticiations();
  };

  let btnName = "Pay now";
  let btnRedirect = "/a-transactions";

  const updateBtn = (item) => {
    switch (item.title) {
      case "Session Completed":
        btnName = "";
        btnRedirect = "";
        break;

      case "Incomplete Drill":
        btnName = "Continue";
        btnRedirect = "/a-drill";
        break;

      case "Upcoming Drill":
        btnName = "";
        btnRedirect = "";
        break;

      case "Signup Successfully":
        btnName = "";
        btnRedirect = "";
        break;

      default:
        btnName = "Pay now";
        btnRedirect = "/a-transactions";
    }
  };

  useEffect(() => {
    // Function to update width
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Modal.Root opened={opened} onClose={close} size={"37rem"}>
        <Modal.Overlay />

        <Modal.Content
          style={{
            paddingTop: "0rem",
            // paddingBottom: "7rem",
            marginTop: "2rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.4rem",
            borderRadius: "0.8rem",
            maxHeight: "calc(100vh - 5rem)",
          }}
        >
          <Modal.Header style={{ paddingBottom: 0 }}>
            <Modal.Title
              style={{
                width: "100%",
                paddingTop: "0.5rem",
              }}
            >
              <div className=" d-flex gap-3 mb-3">
                <button
                  className="modal-close "
                  style={{ background: "#1C1C1C0D" }}
                  onClick={close}
                >
                  <i
                    class="fa-solid fa-arrow-left"
                    style={{ color: "black" }}
                  ></i>
                </button>

                <div className="d-flex justify-content-between w-100">
                  <p className="profile-header " style={{ margin: "0px" }}>
                    Notifications{unreadCount > 0 && "(" + unreadCount + ")"}
                  </p>

                  {unreadCount > 0 && (
                    <div className="d-flex align-items-center">
                      <button
                        className="view-all"
                        style={{
                          fontSize: "13px",

                          fontWeight: "700",
                          color: "var(--main-dark)",
                          cursor: isUpdating ? "not-allowed" : "pointer",
                        }}
                        onClick={markReadHandler}
                        disabled={isUpdating}
                      >
                        Mark all as read
                      </button>
                      {isUpdating && <Loader color="black" size="xs" />}
                    </div>
                  )}
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "38rem" }}>
            <div
              style={{
                overflowY: "scroll",
                height: "37rem",
                backgroundColor: "#fbfbfb",
                borderRadius: "0.5rem",
              }}
            >
              {Notifs?.length > 0 ? (
                <>
                  {Notifs.map((item) => {
                    updateBtn(item);
                    return (
                      <>
                        <div
                          className="d-flex flex-start flex-row mt-0  gap-3"
                          style={{
                            backgroundColor: !item.seen ? "#F4F4F4" : "#fbfbfb",
                            paddingTop: "2rem",
                            paddingLeft: "0.8rem",
                            paddingRight: "0.8rem",
                            borderRadius: "0.2rem",
                          }}
                        >
                          <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                          <div className="d-flex gap-3  items-center">
                            {item.doctor && (
                              <>
                                {" "}
                                <h7>Dr. {item.doctor}</h7>
                                <p
                                  className="m-0"
                                  style={{
                                    fontSize: "12px",
                                    color: " #3C3F5399",
                                  }}
                                >
                                  {" "}
                                  Ophthalmologist
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        <div
                          className="d-flex  flex-column align-items-end "
                          style={{
                            backgroundColor: !item.seen ? "#F4F4F4" : "#fbfbfb",
                            padding: "1rem",
                            paddingBottom: "1rem",

                            paddingTop: "0",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              marginLeft: "50px",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </p>
                          <p style={{ fontSize: "13px", marginLeft: "50px" }}>
                            {item.text}
                          </p>
                          {btnName && (
                            <button
                              style={{
                                backgroundColor: "var(--main-dark)",
                                padding: "6px 9px 6px",
                                borderRadius: "10px",
                                color: "white",
                                fontSize: "smaller",
                              }}
                              onClick={() => {
                                updateBtn(item);

                                navigate(btnRedirect);
                              }}
                            >
                              {btnName}
                            </button>
                          )}
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <div>
                  <p>No Notifs</p>
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div
        className="d-flex justify-content-between "
        style={{ padding: "0px 10px  0px 20px" }}
      >
        <h5>Notifications {unreadCount > 0 && Notifs && `(${unreadCount})`}</h5>
        {Notifs?.length > 0 && (
          <p
            className="view-all mt-1"
            style={{
              fontSize: "12px",
              cursor: "pointer",
              fontWeight: "700",
              color: "var(--main-dark)",
            }}
            onClick={open}
          >
            View All
          </p>
        )}
      </div>

      <div
        style={{
          backgroundColor: "#F4F4F4",
          minHeight: "60%",
          padding: "16px",
          overflow: "hidden",
        }}
        className="rounded-4  "
      >
        {loading && (
          <div
            style={{
              // width: "40rem",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <p style={{ visibility: "hidden" }}>
              An athlete is most commonly a person
            </p>
            <Loader
              color="var(--main-dark)"
              className="mx-auto "
              style={{ marginBottom: "4rem" }}
            />
          </div>
        )}
        {!Notifs ? (
          <div style={{ textAlign: "center" }}>
            <p>No new notifications</p>
          </div>
        ) : (
          <>
            {!loading &&
              Notifs?.map((item, id) => {
                if (id < 2) {
                  updateBtn(item);
                  return (
                    <>
                      <div className="d-flex flex-start flex-row mt-2 gap-3">
                        <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                        {item.doctor && (
                          <>
                            {" "}
                            <div className="d-flex gap-3 items-center">
                              <h7>Dr. {item.doctor}</h7>

                              {/* <p
                              className="m-0"
                              style={{ fontSize: "12px", color: " #3C3F5399" }}
                            >
                              {" "}
                              Ophthalmologist
                            </p> */}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="d-flex  flex-column align-items-end ">
                        {width > 1600 && (
                          <p
                            style={{
                              fontSize: "13px",
                              marginLeft: "50px",
                              fontWeight: "bold",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {item.title}
                          </p>
                        )}
                        <p
                          style={{
                            fontSize: "13px",
                            marginLeft: "50px",
                          }}
                        >
                          {item.text}
                        </p>
                        {btnName && (
                          <button
                            style={{
                              backgroundColor: "var(--main-dark)",
                              padding: "6px 9px 6px",
                              borderRadius: "10px",
                              color: "white",
                              fontSize: "smaller",
                              marginBottom: "1rem",
                            }}
                            onClick={() => {
                              updateBtn(item);
                              navigate(btnRedirect);
                            }}
                          >
                            {btnName}
                          </button>
                        )}
                      </div>
                    </>
                  );
                } else {
                  return;
                }
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default Notifications;
