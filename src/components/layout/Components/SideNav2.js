import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { logOut } from "../../../features/authSlice";
import { useDispatch } from "react-redux";
const SideNav2 = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const match = location.pathname;
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="tablet-sidenav">
        <Drawer.Root
          opened={opened}
          onClose={close}
          style={{ width: "20vw" }}
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          size="xs"
        >
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Body style={{ padding: 0 }}>
              <div className="tablet-sidenav-wrapper">
                <div className="sidenav-logo">
                  <img src="/images/DoctorMenuLogo.png" />
                </div>
                <div className="sidenav-buttons-wrapper">
                  <NavLink to="/">
                    <div
                      className={
                        match == "/"
                          ? "sidenav-button bg-white-btn"
                          : "sidenav-button"
                      }
                    >
                      <p>
                        <span style={{ marginRight: "24px" }}>
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="sidenav-icon"
                              d="M17 16.0867V7.58667C17 7.43142 16.9639 7.27831 16.8944 7.13946C16.825 7.0006 16.7242 6.87982 16.6 6.78667L9.6 1.53667C9.4269 1.40685 9.21637 1.33667 9 1.33667C8.78363 1.33667 8.5731 1.40685 8.4 1.53667L1.4 6.78667C1.2758 6.87982 1.175 7.0006 1.10557 7.13946C1.03614 7.27831 1 7.43142 1 7.58667V16.0867C1 16.3519 1.10536 16.6062 1.29289 16.7938C1.48043 16.9813 1.73478 17.0867 2 17.0867H6C6.26522 17.0867 6.51957 16.9813 6.70711 16.7938C6.89464 16.6062 7 16.3519 7 16.0867V13.0867C7 12.8215 7.10536 12.5671 7.29289 12.3796C7.48043 12.192 7.73478 12.0867 8 12.0867H10C10.2652 12.0867 10.5196 12.192 10.7071 12.3796C10.8946 12.5671 11 12.8215 11 13.0867V16.0867C11 16.3519 11.1054 16.6062 11.2929 16.7938C11.4804 16.9813 11.7348 17.0867 12 17.0867H16C16.2652 17.0867 16.5196 16.9813 16.7071 16.7938C16.8946 16.6062 17 16.3519 17 16.0867Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="sidenav-text">Home</span>
                      </p>
                    </div>
                  </NavLink>
                  <NavLink to="/a-transactions">
                    <div
                      className={
                        match == "/a-transactions"
                          ? "sidenav-button bg-white-btn "
                          : "sidenav-button"
                      }
                    >
                      <p>
                        <span style={{ marginRight: "20px" }}>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_582_7958)">
                              <path
                                className="sidenav-icon"
                                d="M19.7782 7.13679H4.22183M4.22183 7.13679L7.05025 4.30836M4.22183 7.13679L7.05025 9.96521M16.9497 14.2079L19.7782 17.0363M19.7782 17.0363L16.9497 19.8647M19.7782 17.0363H4.22183"
                                fill="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_582_7958">
                                <rect
                                  className="sidenav-icon"
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.0865479)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="sidenav-text">Transactions</span>
                      </p>
                    </div>
                  </NavLink>
                  <NavLink to="/a-booking">
                    <div
                      className={
                        match == "/a-booking"
                          ? "sidenav-button bg-white-btn"
                          : "sidenav-button"
                      }
                    >
                      <p>
                        <span style={{ marginRight: "20px" }}>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="sidenav-icon"
                              d="M17 14.0865C17.2652 14.0865 17.5196 13.9812 17.7071 13.7937C17.8946 13.6061 18 13.3518 18 13.0865C18 12.8213 17.8946 12.567 17.7071 12.3794C17.5196 12.1919 17.2652 12.0865 17 12.0865C16.7348 12.0865 16.4804 12.1919 16.2929 12.3794C16.1054 12.567 16 12.8213 16 13.0865C16 13.3518 16.1054 13.6061 16.2929 13.7937C16.4804 13.9812 16.7348 14.0865 17 14.0865ZM17 18.0865C17.2652 18.0865 17.5196 17.9812 17.7071 17.7937C17.8946 17.6061 18 17.3518 18 17.0865C18 16.8213 17.8946 16.567 17.7071 16.3794C17.5196 16.1919 17.2652 16.0865 17 16.0865C16.7348 16.0865 16.4804 16.1919 16.2929 16.3794C16.1054 16.567 16 16.8213 16 17.0865C16 17.3518 16.1054 17.6061 16.2929 17.7937C16.4804 17.9812 16.7348 18.0865 17 18.0865ZM13 13.0865C13 13.3518 12.8946 13.6061 12.7071 13.7937C12.5196 13.9812 12.2652 14.0865 12 14.0865C11.7348 14.0865 11.4804 13.9812 11.2929 13.7937C11.1054 13.6061 11 13.3518 11 13.0865C11 12.8213 11.1054 12.567 11.2929 12.3794C11.4804 12.1919 11.7348 12.0865 12 12.0865C12.2652 12.0865 12.5196 12.1919 12.7071 12.3794C12.8946 12.567 13 12.8213 13 13.0865ZM13 17.0865C13 17.3518 12.8946 17.6061 12.7071 17.7937C12.5196 17.9812 12.2652 18.0865 12 18.0865C11.7348 18.0865 11.4804 17.9812 11.2929 17.7937C11.1054 17.6061 11 17.3518 11 17.0865C11 16.8213 11.1054 16.567 11.2929 16.3794C11.4804 16.1919 11.7348 16.0865 12 16.0865C12.2652 16.0865 12.5196 16.1919 12.7071 16.3794C12.8946 16.567 13 16.8213 13 17.0865ZM7 14.0865C7.26522 14.0865 7.51957 13.9812 7.70711 13.7937C7.89464 13.6061 8 13.3518 8 13.0865C8 12.8213 7.89464 12.567 7.70711 12.3794C7.51957 12.1919 7.26522 12.0865 7 12.0865C6.73478 12.0865 6.48043 12.1919 6.29289 12.3794C6.10536 12.567 6 12.8213 6 13.0865C6 13.3518 6.10536 13.6061 6.29289 13.7937C6.48043 13.9812 6.73478 14.0865 7 14.0865ZM7 18.0865C7.26522 18.0865 7.51957 17.9812 7.70711 17.7937C7.89464 17.6061 8 17.3518 8 17.0865C8 16.8213 7.89464 16.567 7.70711 16.3794C7.51957 16.1919 7.26522 16.0865 7 16.0865C6.73478 16.0865 6.48043 16.1919 6.29289 16.3794C6.10536 16.567 6 16.8213 6 17.0865C6 17.3518 6.10536 17.6061 6.29289 17.7937C6.48043 17.9812 6.73478 18.0865 7 18.0865Z"
                              fill="white"
                            />
                            <path
                              className="sidenav-icon"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.00001 1.83655C7.19892 1.83655 7.38969 1.91557 7.53034 2.05622C7.67099 2.19687 7.75001 2.38764 7.75001 2.58655V3.34955C8.41201 3.33655 9.14101 3.33655 9.94301 3.33655H14.056C14.859 3.33655 15.588 3.33655 16.25 3.34955V2.58655C16.25 2.38764 16.329 2.19687 16.4697 2.05622C16.6103 1.91557 16.8011 1.83655 17 1.83655C17.1989 1.83655 17.3897 1.91557 17.5303 2.05622C17.671 2.19687 17.75 2.38764 17.75 2.58655V3.41355C18.01 3.43355 18.256 3.45855 18.489 3.48955C19.661 3.64755 20.61 3.97955 21.359 4.72755C22.107 5.47655 22.439 6.42555 22.597 7.59755C22.75 8.73755 22.75 10.1925 22.75 12.0305V14.1425C22.75 15.9805 22.75 17.4365 22.597 18.5755C22.439 19.7475 22.107 20.6965 21.359 21.4455C20.61 22.1935 19.661 22.5255 18.489 22.6835C17.349 22.8365 15.894 22.8365 14.056 22.8365H9.94501C8.10701 22.8365 6.65101 22.8365 5.51201 22.6835C4.34001 22.5255 3.39101 22.1935 2.64201 21.4455C1.89401 20.6965 1.56201 19.7475 1.40401 18.5755C1.25101 17.4355 1.25101 15.9805 1.25101 14.1425V12.0305C1.25101 10.1925 1.25101 8.73655 1.40401 7.59755C1.56201 6.42555 1.89401 5.47655 2.64201 4.72755C3.39101 3.97955 4.34001 3.64755 5.51201 3.48955C5.74501 3.45855 5.99201 3.43355 6.25101 3.41355V2.58655C6.25101 2.38781 6.32989 2.19719 6.47032 2.05657C6.61076 1.91595 6.80127 1.83681 7.00001 1.83655ZM5.71001 4.97655C4.70501 5.11155 4.12501 5.36555 3.70201 5.78855C3.27901 6.21155 3.02501 6.79155 2.89001 7.79755C2.86701 7.96755 2.84801 8.14755 2.83201 8.33655H21.168C21.152 8.14655 21.133 7.96755 21.11 7.79655C20.975 6.79155 20.721 6.21155 20.298 5.78855C19.875 5.36555 19.295 5.11155 18.289 4.97655C17.262 4.83855 15.907 4.83655 14 4.83655H10C8.09301 4.83655 6.73901 4.83855 5.71001 4.97655ZM2.75001 12.0865C2.75001 11.2325 2.75001 10.4895 2.76301 9.83655H21.237C21.25 10.4895 21.25 11.2325 21.25 12.0865V14.0865C21.25 15.9935 21.248 17.3485 21.11 18.3765C20.975 19.3815 20.721 19.9615 20.298 20.3845C19.875 20.8075 19.295 21.0615 18.289 21.1965C17.262 21.3345 15.907 21.3365 14 21.3365H10C8.09301 21.3365 6.73901 21.3345 5.71001 21.1965C4.70501 21.0615 4.12501 20.8075 3.70201 20.3845C3.27901 19.9615 3.02501 19.3815 2.89001 18.3755C2.75201 17.3485 2.75001 15.9935 2.75001 14.0865V12.0865Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <span className="sidenav-text">Recent Bookings</span>
                      </p>
                    </div>
                  </NavLink>
                  <NavLink to="/a-manager">
                    <div
                      className={
                        match == "/a-manager"
                          ? "sidenav-button bg-white-btn"
                          : "sidenav-button"
                      }
                    >
                      <p>
                        <span style={{ marginRight: "20px" }}>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="sidenav-icon"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19 20.9754C19 21.5888 18.5211 22.0865 17.9286 22.0865C17.3361 22.0865 16.8571 21.5888 16.8571 20.9754C16.8571 17.9121 14.4539 15.4199 11.5 15.4199C8.54607 15.4199 6.14286 17.9121 6.14286 20.9754C6.14286 21.5888 5.66393 22.0865 5.07143 22.0865C4.47893 22.0865 4 21.5888 4 20.9754C4 16.6865 7.36536 13.1977 11.5 13.1977C15.6346 13.1977 19 16.6865 19 20.9754ZM11.5 4.30877C12.6818 4.30877 13.6429 5.30544 13.6429 6.53099C13.6429 7.75655 12.6818 8.75321 11.5 8.75321C10.3182 8.75321 9.35714 7.75655 9.35714 6.53099C9.35714 5.30544 10.3182 4.30877 11.5 4.30877ZM11.5 10.9754C13.8636 10.9754 15.7857 8.9821 15.7857 6.53099C15.7857 4.07988 13.8636 2.08655 11.5 2.08655C9.13643 2.08655 7.21429 4.07988 7.21429 6.53099C7.21429 8.9821 9.13643 10.9754 11.5 10.9754Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <span className="sidenav-text">Profile</span>
                      </p>
                    </div>
                  </NavLink>
                </div>
                <div className="logout-button-wrapper">
                  <button>
                    <p>
                      <span style={{ marginRight: "6px" }}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                            fill="white"
                          />
                        </svg>
                      </span>{" "}
                      <span className="sidenav-text">Logout</span>
                    </p>
                  </button>
                </div>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        <i
          class="fa-solid fa-bars"
          style={{ fontSize: "20px" }}
          onClick={open}
        ></i>
      </div>
      <div className="sidenav-wrapper ">
        <div className="sidenav-logo">
          <img
            src="/images/DoctorMenuLogo.png"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="sidenav-buttons-wrapper">
          <NavLink to="/">
            <div
              className={
                match == "/" ? "sidenav-button bg-white-btn" : "sidenav-button"
              }
            >
              <p>
                <span style={{ marginRight: "24px" }}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="sidenav-icon"
                      d="M17 16.0867V7.58667C17 7.43142 16.9639 7.27831 16.8944 7.13946C16.825 7.0006 16.7242 6.87982 16.6 6.78667L9.6 1.53667C9.4269 1.40685 9.21637 1.33667 9 1.33667C8.78363 1.33667 8.5731 1.40685 8.4 1.53667L1.4 6.78667C1.2758 6.87982 1.175 7.0006 1.10557 7.13946C1.03614 7.27831 1 7.43142 1 7.58667V16.0867C1 16.3519 1.10536 16.6062 1.29289 16.7938C1.48043 16.9813 1.73478 17.0867 2 17.0867H6C6.26522 17.0867 6.51957 16.9813 6.70711 16.7938C6.89464 16.6062 7 16.3519 7 16.0867V13.0867C7 12.8215 7.10536 12.5671 7.29289 12.3796C7.48043 12.192 7.73478 12.0867 8 12.0867H10C10.2652 12.0867 10.5196 12.192 10.7071 12.3796C10.8946 12.5671 11 12.8215 11 13.0867V16.0867C11 16.3519 11.1054 16.6062 11.2929 16.7938C11.4804 16.9813 11.7348 17.0867 12 17.0867H16C16.2652 17.0867 16.5196 16.9813 16.7071 16.7938C16.8946 16.6062 17 16.3519 17 16.0867Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="sidenav-text">Home</span>
              </p>
            </div>
          </NavLink>
          <NavLink to="/a-transactions">
            <div
              className={
                match == "/a-transactions"
                  ? "sidenav-button bg-white-btn "
                  : "sidenav-button"
              }
            >
              <p>
                <span style={{ marginRight: "20px" }}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_582_7958)">
                      <path
                        className="sidenav-icon"
                        d="M19.7782 7.13679H4.22183M4.22183 7.13679L7.05025 4.30836M4.22183 7.13679L7.05025 9.96521M16.9497 14.2079L19.7782 17.0363M19.7782 17.0363L16.9497 19.8647M19.7782 17.0363H4.22183"
                        fill="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_582_7958">
                        <rect
                          className="sidenav-icon"
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.0865479)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="sidenav-text">Transactions</span>
              </p>
            </div>
          </NavLink>
          <NavLink to="/a-booking">
            <div
              className={
                match == "/a-booking"
                  ? "sidenav-button bg-white-btn"
                  : "sidenav-button"
              }
            >
              <p>
                <span style={{ marginRight: "20px" }}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="sidenav-icon"
                      d="M17 14.0865C17.2652 14.0865 17.5196 13.9812 17.7071 13.7937C17.8946 13.6061 18 13.3518 18 13.0865C18 12.8213 17.8946 12.567 17.7071 12.3794C17.5196 12.1919 17.2652 12.0865 17 12.0865C16.7348 12.0865 16.4804 12.1919 16.2929 12.3794C16.1054 12.567 16 12.8213 16 13.0865C16 13.3518 16.1054 13.6061 16.2929 13.7937C16.4804 13.9812 16.7348 14.0865 17 14.0865ZM17 18.0865C17.2652 18.0865 17.5196 17.9812 17.7071 17.7937C17.8946 17.6061 18 17.3518 18 17.0865C18 16.8213 17.8946 16.567 17.7071 16.3794C17.5196 16.1919 17.2652 16.0865 17 16.0865C16.7348 16.0865 16.4804 16.1919 16.2929 16.3794C16.1054 16.567 16 16.8213 16 17.0865C16 17.3518 16.1054 17.6061 16.2929 17.7937C16.4804 17.9812 16.7348 18.0865 17 18.0865ZM13 13.0865C13 13.3518 12.8946 13.6061 12.7071 13.7937C12.5196 13.9812 12.2652 14.0865 12 14.0865C11.7348 14.0865 11.4804 13.9812 11.2929 13.7937C11.1054 13.6061 11 13.3518 11 13.0865C11 12.8213 11.1054 12.567 11.2929 12.3794C11.4804 12.1919 11.7348 12.0865 12 12.0865C12.2652 12.0865 12.5196 12.1919 12.7071 12.3794C12.8946 12.567 13 12.8213 13 13.0865ZM13 17.0865C13 17.3518 12.8946 17.6061 12.7071 17.7937C12.5196 17.9812 12.2652 18.0865 12 18.0865C11.7348 18.0865 11.4804 17.9812 11.2929 17.7937C11.1054 17.6061 11 17.3518 11 17.0865C11 16.8213 11.1054 16.567 11.2929 16.3794C11.4804 16.1919 11.7348 16.0865 12 16.0865C12.2652 16.0865 12.5196 16.1919 12.7071 16.3794C12.8946 16.567 13 16.8213 13 17.0865ZM7 14.0865C7.26522 14.0865 7.51957 13.9812 7.70711 13.7937C7.89464 13.6061 8 13.3518 8 13.0865C8 12.8213 7.89464 12.567 7.70711 12.3794C7.51957 12.1919 7.26522 12.0865 7 12.0865C6.73478 12.0865 6.48043 12.1919 6.29289 12.3794C6.10536 12.567 6 12.8213 6 13.0865C6 13.3518 6.10536 13.6061 6.29289 13.7937C6.48043 13.9812 6.73478 14.0865 7 14.0865ZM7 18.0865C7.26522 18.0865 7.51957 17.9812 7.70711 17.7937C7.89464 17.6061 8 17.3518 8 17.0865C8 16.8213 7.89464 16.567 7.70711 16.3794C7.51957 16.1919 7.26522 16.0865 7 16.0865C6.73478 16.0865 6.48043 16.1919 6.29289 16.3794C6.10536 16.567 6 16.8213 6 17.0865C6 17.3518 6.10536 17.6061 6.29289 17.7937C6.48043 17.9812 6.73478 18.0865 7 18.0865Z"
                      fill="white"
                    />
                    <path
                      className="sidenav-icon"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00001 1.83655C7.19892 1.83655 7.38969 1.91557 7.53034 2.05622C7.67099 2.19687 7.75001 2.38764 7.75001 2.58655V3.34955C8.41201 3.33655 9.14101 3.33655 9.94301 3.33655H14.056C14.859 3.33655 15.588 3.33655 16.25 3.34955V2.58655C16.25 2.38764 16.329 2.19687 16.4697 2.05622C16.6103 1.91557 16.8011 1.83655 17 1.83655C17.1989 1.83655 17.3897 1.91557 17.5303 2.05622C17.671 2.19687 17.75 2.38764 17.75 2.58655V3.41355C18.01 3.43355 18.256 3.45855 18.489 3.48955C19.661 3.64755 20.61 3.97955 21.359 4.72755C22.107 5.47655 22.439 6.42555 22.597 7.59755C22.75 8.73755 22.75 10.1925 22.75 12.0305V14.1425C22.75 15.9805 22.75 17.4365 22.597 18.5755C22.439 19.7475 22.107 20.6965 21.359 21.4455C20.61 22.1935 19.661 22.5255 18.489 22.6835C17.349 22.8365 15.894 22.8365 14.056 22.8365H9.94501C8.10701 22.8365 6.65101 22.8365 5.51201 22.6835C4.34001 22.5255 3.39101 22.1935 2.64201 21.4455C1.89401 20.6965 1.56201 19.7475 1.40401 18.5755C1.25101 17.4355 1.25101 15.9805 1.25101 14.1425V12.0305C1.25101 10.1925 1.25101 8.73655 1.40401 7.59755C1.56201 6.42555 1.89401 5.47655 2.64201 4.72755C3.39101 3.97955 4.34001 3.64755 5.51201 3.48955C5.74501 3.45855 5.99201 3.43355 6.25101 3.41355V2.58655C6.25101 2.38781 6.32989 2.19719 6.47032 2.05657C6.61076 1.91595 6.80127 1.83681 7.00001 1.83655ZM5.71001 4.97655C4.70501 5.11155 4.12501 5.36555 3.70201 5.78855C3.27901 6.21155 3.02501 6.79155 2.89001 7.79755C2.86701 7.96755 2.84801 8.14755 2.83201 8.33655H21.168C21.152 8.14655 21.133 7.96755 21.11 7.79655C20.975 6.79155 20.721 6.21155 20.298 5.78855C19.875 5.36555 19.295 5.11155 18.289 4.97655C17.262 4.83855 15.907 4.83655 14 4.83655H10C8.09301 4.83655 6.73901 4.83855 5.71001 4.97655ZM2.75001 12.0865C2.75001 11.2325 2.75001 10.4895 2.76301 9.83655H21.237C21.25 10.4895 21.25 11.2325 21.25 12.0865V14.0865C21.25 15.9935 21.248 17.3485 21.11 18.3765C20.975 19.3815 20.721 19.9615 20.298 20.3845C19.875 20.8075 19.295 21.0615 18.289 21.1965C17.262 21.3345 15.907 21.3365 14 21.3365H10C8.09301 21.3365 6.73901 21.3345 5.71001 21.1965C4.70501 21.0615 4.12501 20.8075 3.70201 20.3845C3.27901 19.9615 3.02501 19.3815 2.89001 18.3755C2.75201 17.3485 2.75001 15.9935 2.75001 14.0865V12.0865Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="sidenav-text">Recent Bookings</span>
              </p>
            </div>
          </NavLink>
          <NavLink to="/a-manager">
            <div
              className={
                match == "/a-manager"
                  ? "sidenav-button bg-white-btn"
                  : "sidenav-button"
              }
            >
              <p>
                <span style={{ marginRight: "20px" }}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="sidenav-icon"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 20.9754C19 21.5888 18.5211 22.0865 17.9286 22.0865C17.3361 22.0865 16.8571 21.5888 16.8571 20.9754C16.8571 17.9121 14.4539 15.4199 11.5 15.4199C8.54607 15.4199 6.14286 17.9121 6.14286 20.9754C6.14286 21.5888 5.66393 22.0865 5.07143 22.0865C4.47893 22.0865 4 21.5888 4 20.9754C4 16.6865 7.36536 13.1977 11.5 13.1977C15.6346 13.1977 19 16.6865 19 20.9754ZM11.5 4.30877C12.6818 4.30877 13.6429 5.30544 13.6429 6.53099C13.6429 7.75655 12.6818 8.75321 11.5 8.75321C10.3182 8.75321 9.35714 7.75655 9.35714 6.53099C9.35714 5.30544 10.3182 4.30877 11.5 4.30877ZM11.5 10.9754C13.8636 10.9754 15.7857 8.9821 15.7857 6.53099C15.7857 4.07988 13.8636 2.08655 11.5 2.08655C9.13643 2.08655 7.21429 4.07988 7.21429 6.53099C7.21429 8.9821 9.13643 10.9754 11.5 10.9754Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="sidenav-text">Profile</span>
              </p>
            </div>
          </NavLink>
        </div>

        <div className="logout-button-wrapper">
          <button onClick={handleLogout}>
            <p>
              <span style={{ marginRight: "6px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              <span className="sidenav-text">Logout</span>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav2;
