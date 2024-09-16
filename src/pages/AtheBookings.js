import React, { useEffect } from "react";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { Input, CloseButton, Avatar } from "@mantine/core";
import { Table } from "@mantine/core";
import { NavLink } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import BookingCard from "../components/layout/Components/BookingCard";
import { CancelBooking, GetRecentBookingsSearch } from "../features/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import dayjs from "dayjs";
import { Skeleton } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import PaymentForm from "../components/PaymentForm";
import { stripestep1 } from "../features/apiCall";
import { AiOutlineClose as CancelIcon } from "react-icons/ai";
import { ActionIcon } from "@mantine/core";
import { formatDateToMMDDYYY } from "../utils/functions";

const AtheBookings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [paymentmodal, paymentmodalhandler] = useDisclosure(false);
  const [clientSecret, setclientsecret] = useState(null);
  const [mainheading, setmainheading] = useState("");
  const [subheading, setsubheading] = useState("");
  const { isFetching } = useSelector((state) => state.fetch_app);
  const [showData, setShowData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);
  const [alertDialog, setAlertDialog] = useState(false);
  const [bId, setBId] = useState("");

  const [bodyData, setBodyData] = useState({});

  const handleSelect = (date) => {
    alert(date);
    const temp = new Date(date);
    const res = `${temp.getFullYear()}-${
      temp.getMonth() + 1
    }-${temp.getDate()}`;
    setDate(res);
    // const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    // if (isSelected) {
    //   setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));

    // } else if (selected.length < 3) {
    //   setSelected((current) => [...current, date]);
    //   alert(selected)
    // }
    close();
  };

  const userEmail = localStorage.getItem("userEmail");

  const [bookingData, setBookingData] = useState([]);
  const dispatch = useDispatch();

  const bookingDataHandler = async () => {
    if (date) {
      var appointments = await GetRecentBookingsSearch(dispatch, {
        currentPage: 1,
        searchQuery: userEmail,
        selectedDate: date,
        selectedServiceTypes: value,
      });
    } else {
      var appointments = await GetRecentBookingsSearch(dispatch, {
        currentPage: 1,
        searchQuery: userEmail,
        selectedServiceTypes: value,
      });
    }

    setBookingData(appointments?.appointments);

    handleappointmentData(appointments);
  };
  useEffect(() => {
    bookingDataHandler();
  }, [selected, date, value]);
  const url =
    "https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4SY5J0CmBpurLNdyssoFuDVIjUivt~TjdQaMbuLy9MqbOJzReqwYFykcxiFAm4wjnxQHbY0fBds-c8jJOuSEhxnIZytiS~EuxX~PytgwY6cobBUszo0gi-oqOTVUlJ89JtgK4fyyXVBeeavR9sisvIFpS740Bty68TTfxndSOlMBM4eOox~yT9ifL2JckNSFBj5WNjS7Cf0YAqIPr9DL4KVoE5gdsTtDmzobV4sVvo9mX9vwMMkr6hAh-NI07QoQlzioEP6B~vuit0ps5EsYwDDZpBmCN5CeU5SqRL-pbW2vNZNXPIm4IUe-bGgJZgdXVmpCnw3mPqykaekuBZ7kw__";

  const makePayment = async (service_type, bookingid) => {
    var body;
    if (service_type == "planPurchase") {
      body = {
        product: {
          type: service_type,
          userId: localStorage.getItem("userId"),
        },
      };
    } else {
      body = {
        product: {
          type: "booking",
          bookingId: bookingid,
        },
      };
    }

    const headers = {
      "Content-type": "application/json",
    };

    setBodyData({ ...body.product, isPaid: true });

    const data = await stripestep1(dispatch, { body });
    setclientsecret(data.clientSecret);
    paymentmodalhandler.open();
  };

  const handleappointmentData = (arr) => {
    const apointmentData = arr?.appointments?.map((item, index) => {
      // const date = new Date(item.app_date);
      // const date_dis = `${date.getDate()}/${
      //   date.getMonth() + 1
      // }/${date.getFullYear()}`;
      const date_dis = formatDateToMMDDYYY(item.app_date);
      var buttoncomp = (
        <button
          className="fill"
          onClick={() => {
            makePayment(item.service_type, item._id);
            setmainheading("Appointment");
            setsubheading(`${date_dis}`);
          }}
        >
          Pay {item.amount}$
        </button>
      );

      const manualTypes = [
        "TeleSession",
        "OfflineVisit",
        "AddTrainingSessions",
      ];
      const isManual = manualTypes.includes(item.service_type);

      if (!isManual && item.presId && item.status == "paid") {
        buttoncomp = (
          <NavLink to={`/a-prescription/${item.presId}/${item._id}`}>
            <button className="fill">View Prescription</button>
          </NavLink>
        );
      } else if (!isManual && !item.presId && item.status == "paid") {
        buttoncomp = (
          <NavLink>
            <button className="fill">Prescription Upcoming</button>
          </NavLink>
        );
      }

      if (isManual) {
        buttoncomp = (
          <NavLink>
            <button className="fill">
              {item.service_status?.charAt(0).toUpperCase() +
                item.service_status?.slice(1)}
            </button>
          </NavLink>
        );
      }

      return {
        Name: (
          <div className="name-cont">
            <Avatar src={url} />
            <div>
              <h6>{item.doctor_trainer}</h6>
              <p>curtis.weaver@example.com</p>
            </div>
          </div>
        ),
        _id: `${item._id}`,
        mass: `${item.service_type}`,
        symbol: `${date_dis}`,
        name: "Carbon",
        time: <p className="time">{item.app_time}</p>,
        button: <button className={`${item.status}`}>{item.status}</button>,
        status: buttoncomp,
      };
    });

    setShowData(apointmentData);
  };

  const elements = [
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Carbon",
      time: <p className="time">9:23 AM</p>,
      button: <button className="pending">Pending</button>,
      status: (
        <NavLink to="/a-prescription">
          <button className="fill">View Presription</button>
        </NavLink>
      ),
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Nitrogen",
      time: <p className="time">9:23 AM</p>,
      button: <button className="fail">Failed</button>,
      status: <button className="empty">NA</button>,
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Yttrium",
      time: <p className="time">9:23 AM</p>,
      button: <button className="success">Success</button>,
      status: (
        <NavLink to="/a-prescription">
          <button className="fill">View Presription</button>
        </NavLink>
      ),
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Barium",
      time: <p className="time">9:23 AM</p>,
      button: <button className="pending">Pending</button>,
      status: <button className="empty">NA</button>,
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Cerium",
      time: <p className="time">9:23 AM</p>,
      button: <button className="success">Success</button>,
      status: <button className="empty">NA</button>,
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Cerium",
      time: <p className="time">9:23 AM</p>,
      button: <button className="fail">Failed</button>,
      status: (
        <NavLink to="/a-prescription">
          <button className="fill">View Presription</button>
        </NavLink>
      ),
    },
    {
      Name: (
        <div className="name-cont">
          <Avatar src={url} />
          <div>
            <h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p>
          </div>
        </div>
      ),
      mass: "Sports Vision Performance",
      symbol: "Oct 17, 2023",
      name: "Cerium",
      time: <p className="time">9:23 AM</p>,
      button: <button className="success">Success</button>,
      status: <button className="empty">NA</button>,
    },
  ];
  const rows = showData?.map((element) => {
    return (
      <Table.Tr key={element.name}>
        <Table.Td>{element.Name}</Table.Td>
        <Table.Td>
          {element.mass === "AddTrainingSessions"
            ? "TrainingSessions"
            : element.mass}
        </Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.time}</Table.Td>
        <Table.Td>{element.button}</Table.Td>
        <Table.Td>{element.status}</Table.Td>
        <Table.Td className="text-center">
          <ActionIcon
            onClick={() => {
              setAlertDialog(true);
              setBId(element._id);
            }}
            variant="filled"
            color="red"
            aria-label="Settings"
          >
            <CancelIcon style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });
  return (
    <AtheleteMenu className="datepicker">
      <Modal.Root
        opened={paymentmodal}
        onClose={() => {
          paymentmodalhandler.close();
          setclientsecret(null);
        }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 6,
        }}
        style={{ background: "transparent" }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <PaymentForm
            clientSecret={clientSecret}
            mainheading={mainheading}
            subheading={subheading}
            body={bodyData}
          />
        </Modal.Content>
      </Modal.Root>
      <Modal.Root
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 6,
        }}
        style={{ background: "transparent" }}
      >
        <Modal.Overlay />
        <Modal.Content>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "white",
              borderRadius: "30px",
              width: "300px",
              padding: "20px",
              margin: "0 auto",
            }}
          >
            <Calendar
              style={{ margin: "0px" }}
              getDayProps={(date) => ({
                selected: selected.some((s) => dayjs(date).isSame(s, "date")),
                onClick: () => handleSelect(date),
              })}
            />
          </div>
        </Modal.Content>
      </Modal.Root>

      <div className="transaction-table-cont">
        <div className="transaction-table">
          <div className="transaction-table-console">
            <h3>Recent Bookings</h3>
            <div className="d-flex console-inputs">
              <Select
                placeholder="Select Service Type"
                data={[
                  "Medical/OfficeVisit",
                  "ConsultationCall",
                  "AddTrainingSessions",
                  "Post-ConcussionEvaluation",
                  "SportsVisionPerformanceEvaluation",
                ]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
                onChange={setValue}
              />

              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={open}
              >
                <rect width="50" height="50" rx="10" fill="#F4F4F4" />
                <path
                  d="M34.6667 14.6667H32V13.3333C32 12.9797 31.8595 12.6406 31.6095 12.3905C31.3594 12.1405 31.0203 12 30.6667 12C30.313 12 29.9739 12.1405 29.7239 12.3905C29.4738 12.6406 29.3333 12.9797 29.3333 13.3333V14.6667H21.3333V13.3333C21.3333 12.9797 21.1929 12.6406 20.9428 12.3905C20.6928 12.1405 20.3536 12 20 12C19.6464 12 19.3072 12.1405 19.0572 12.3905C18.8071 12.6406 18.6667 12.9797 18.6667 13.3333V14.6667H16C14.9391 14.6667 13.9217 15.0881 13.1716 15.8382C12.4214 16.5884 12 17.6058 12 18.6667V34.6667C12 35.7275 12.4214 36.7449 13.1716 37.4951C13.9217 38.2452 14.9391 38.6667 16 38.6667H34.6667C35.7275 38.6667 36.7449 38.2452 37.4951 37.4951C38.2452 36.7449 38.6667 35.7275 38.6667 34.6667V18.6667C38.6667 17.6058 38.2452 16.5884 37.4951 15.8382C36.7449 15.0881 35.7275 14.6667 34.6667 14.6667ZM36 34.6667C36 35.0203 35.8595 35.3594 35.6095 35.6095C35.3594 35.8595 35.0203 36 34.6667 36H16C15.6464 36 15.3072 35.8595 15.0572 35.6095C14.8071 35.3594 14.6667 35.0203 14.6667 34.6667V25.3333H36V34.6667ZM36 22.6667H14.6667V18.6667C14.6667 18.313 14.8071 17.9739 15.0572 17.7239C15.3072 17.4738 15.6464 17.3333 16 17.3333H18.6667V18.6667C18.6667 19.0203 18.8071 19.3594 19.0572 19.6095C19.3072 19.8595 19.6464 20 20 20C20.3536 20 20.6928 19.8595 20.9428 19.6095C21.1929 19.3594 21.3333 19.0203 21.3333 18.6667V17.3333H29.3333V18.6667C29.3333 19.0203 29.4738 19.3594 29.7239 19.6095C29.9739 19.8595 30.313 20 30.6667 20C31.0203 20 31.3594 19.8595 31.6095 19.6095C31.8595 19.3594 32 19.0203 32 18.6667V17.3333H34.6667C35.0203 17.3333 35.3594 17.4738 35.6095 17.7239C35.8595 17.9739 36 18.313 36 18.6667V22.6667Z"
                  fill="#8C90AA"
                />
              </svg>
            </div>
          </div>
          {isFetching ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "30px",
              }}
            >
              <Skeleton height={80} /> <Skeleton height={80} />{" "}
              <Skeleton height={80} />
            </div>
          ) : (
            <>
              {showData.length == 0 ? (
                <div
                  style={{
                    width: "100%",
                    padding: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ color: "#3C3F53CC" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        justfiyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src="/images/DoctorMenuLogo.png"
                        style={{ height: "250px", marginBottom: "-40px" }}
                      />
                      <h3>No Recent Booking Found</h3>
                    </div>
                  </h1>
                </div>
              ) : (
                <div className="mt-3 table-cont">
                  <Table>
                    <Table.Thead>
                      <Table.Tr style={{ fontWeight: "600", fontSize: "18px" }}>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Service Type</Table.Th>
                        <Table.Th>Date</Table.Th>
                        <Table.Th>Time</Table.Th>
                        <Table.Th>Payment Status</Table.Th>
                        <Table.Th>Service Status</Table.Th>
                        <Table.Th>Action</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                  </Table>
                </div>
              )}
            </>
          )}

          <div className="mobile-cont">
            {bookingData?.map((data) => (
              <BookingCard
                name={data.client?.firstName + " " + data.client?.lastName}
                serviceType={data.service_type}
                date={formatDateToMMDDYYY(data.app_date)}
                time={data.app_time}
                pStatus={data.service_status}
                cancelBtn={
                  <ActionIcon
                    onClick={() => {
                      setAlertDialog(true);
                      setBId(data._id);
                    }}
                    variant="filled"
                    color="red"
                    aria-label="Settings"
                  >
                    <CancelIcon
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                }
              />
            ))}
          </div>
          {/* <div className="mobile-cont">
            <BookingCard name={showData?.name} />
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </div> */}
        </div>
      </div>

      <Modal
        opened={alertDialog}
        onClose={() => setAlertDialog(false)}
        title=<span
          className="ps-3 fw-semibold"
          style={{ color: "var(--main-dark)", fontSize: "1.3rem" }}
        >
          {" "}
          Cancel Booking
        </span>
      >
        <div className="d-flex flex-column gap-4 px-3 pb-2">
          <div
            className="fw-semiBold "
            style={{ color: "gray", fontSize: "1.1rem" }}
          >
            {" "}
            Are you sure , you want to cancel this booking?
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <Button
              style={{ backgroundColor: "var(--main-dark)" }}
              onClick={async () => {
                await CancelBooking(dispatch, bId);
                setBId("");
                setAlertDialog(false);
                bookingDataHandler();
              }}
            >
              Confirm
            </Button>
            <Button
              style={{
                backgroundColor: "#7257FF26",
                color: "var(--main-dark)",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </AtheleteMenu>
  );
};

export default AtheBookings;
