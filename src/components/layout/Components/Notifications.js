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

  console.log(Notifs);
  const fecthNoticiations = async () => {
    const res = await GetNotifications();
    setNotifs(res.notifications);
    setUnreadCount(res.unreadCounts);
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

  return (
    <div>
      <Modal.Root opened={opened} onClose={close} size={"33rem"}>
        <Modal.Overlay />

        <Modal.Content style={{ paddingLeft: "0.5rem" }}>
          <Modal.Header>
            <Modal.Title style={{ width: "100%" }}>
              <div className=" d-flex gap-3 mb-4">
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
          <Modal.Body>
            {Notifs?.length > 0 ? (
              <>
                {Notifs.map((item) => {
                  updateBtn(item);
                  return (
                    <>
                      <div
                        className="d-flex flex-start flex-row mt-2 gap-3"
                        style={{
                          backgroundColor: !item.seen ? "#F4F4F4" : "",
                          paddingTop: "0.5rem",
                          paddingLeft: "0.5rem",
                        }}
                      >
                        <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                        <div className="d-flex gap-3 items-center">
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
                          backgroundColor: !item.seen ? "#F4F4F4" : "",
                          paddingRight: "0.5rem",
                          paddingBottom: "0.5rem",
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
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div
        className="d-flex justify-content-between"
        style={{ padding: "0px 20px 0px" }}
      >
        <h5>Notifications {unreadCount > 0 && Notifs && `(${unreadCount})`}</h5>
        {Notifs?.length > 0 && (
          <p
            className="view-all"
            style={{
              fontSize: "13px",
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
        {!Notifs ? (
          <div style={{ textAlign: "center" }}>
            <p>No new notifications</p>
          </div>
        ) : (
          <>
            {Notifs?.map((item, id) => {
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

                            <p
                              className="m-0"
                              style={{ fontSize: "12px", color: " #3C3F5399" }}
                            >
                              {" "}
                              Ophthalmologist
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex  flex-column align-items-end ">
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
