import React from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GetNotifications } from "../../../features/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [Notifs, setNotifs] = useState([]);
  console.log(Notifs);
  const fecthNoticiations = async () => {
    const res = await GetNotifications();
    setNotifs(res.notifications);
  };
  useEffect(() => {
    fecthNoticiations();
  }, []);
  return (
    <div>
      <Modal.Root opened={opened} onClose={close} size={"33rem"}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
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
                <p className="profile-header " style={{ margin: "0px" }}>
                  Notifications({Notifs?.length})
                </p>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {Notifs?.length > 0 ? (
              <>
                {Notifs.map((item) => {
                  return (
                    <>
                      <div className="d-flex flex-start flex-row mt-2 gap-3">
                        <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                        <div className="d-flex gap-3 items-center">
                          <h7>Dr.Joe</h7>

                          <p
                            className="m-0"
                            style={{ fontSize: "12px", color: " #3C3F5399" }}
                          >
                            {" "}
                            Ophthalmologist
                          </p>
                        </div>
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
                        <button
                          style={{
                            backgroundColor: "var(--main-dark)",
                            padding: "6px 9px 6px",
                            borderRadius: "10px",
                            color: "white",
                            fontSize: "smaller",
                          }}
                          onClick={() => {
                            navigate("/a-transactions");
                          }}
                        >
                          Pay Now
                        </button>
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
        <h5>Notifications ({Notifs && `${Notifs?.length}`})</h5>
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
                return (
                  <>
                    <div className="d-flex flex-start flex-row mt-2 gap-3">
                      <Avatar src="https://s3-alpha-sig.figma.com/img/93eb/70e4/1b58b9ca0fc1d95ef7ee8f1a97100431?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8X6GzryNyHsiHrAOg-Xp5jH-Y6xzKk2M0ELy8v3CR4Y4zwEp2Cv9yZ0VEhxBL1GNG559NPdUfe44X9aatKkuWKYrjogjkpN782W6kkLvpUMF1DazVpctez~lVmxPMh5lJpokXOebsmpcsjvJSYEcHG756GfllCL4IqPQLG20T10dR5DzA6fYttW~t2vvRLAsVMtxhrr1dnuPI9KxkPvvcb9gfyAokxTCevcHIoTOZ97IdLvW9QkvV8ehYWlhQDvSFCKa9Ssfp~xX668CYkkY8tfZWasMhxXipBPz5vpGhDUwPjC7ZG3tPLlB~z1l6Enwt378BasSQN32GSEDJ95Vw__"></Avatar>

                      <div className="d-flex gap-3 items-center">
                        <h7>Dr.Joe</h7>

                        <p
                          className="m-0"
                          style={{ fontSize: "12px", color: " #3C3F5399" }}
                        >
                          {" "}
                          Ophthalmologist
                        </p>
                      </div>
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
                      <button
                        style={{
                          backgroundColor: "var(--main-dark)",
                          padding: "6px 9px 6px",
                          borderRadius: "10px",
                          color: "white",
                          fontSize: "smaller",
                        }}
                        onClick={() => {
                          navigate("/a-transactions");
                        }}
                      >
                        Pay Now
                      </button>
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
