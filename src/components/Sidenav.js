import React from "react";
import { FaBeer, FaHome } from "react-icons/fa";
import { NavLink ,useNavigate } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from "@mantine/core";


const Sidenav = () => {
  const [opened, { open, close }] = useDisclosure(false);
const navigate=useNavigate ()
  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontSize: "19px" }}>Do you want to Logout?</h4>
                <p style={{ color: "#8C90AA" }}>
                  Are you sure that you want to Logout
                </p>
                <div
                  style={{
                    display: "flex",
                    minWidth: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="purple-button"
                    onClick={() => {
                      navigate("/signin")
                    }}
                  >
                    {" "}
                    Confirm
                  </button>
                  <button className="grey-button" onClick={close}>
                    Cancel
                  </button>
                </div>
              </div>
            </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    
      <main className="w-100 h-100 athel-menu text-center text-secondary">
        <div className="sidenav-main">
          <img src="/images/DoctorMenuLogo.png" onClick={()=>{
            navigate("/")
          }} />
          <p>
            <NavLink to="/">
              <div className="toggle-btn">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 19.0865V10.5865C20 10.4313 19.9639 10.2782 19.8944 10.1393C19.825 10.0005 19.7242 9.87969 19.6 9.78655L12.6 4.53655C12.4269 4.40673 12.2164 4.33655 12 4.33655C11.7836 4.33655 11.5731 4.40673 11.4 4.53655L4.4 9.78655C4.2758 9.87969 4.175 10.0005 4.10557 10.1393C4.03614 10.2782 4 10.4313 4 10.5865V19.0865C4 19.3518 4.10536 19.6061 4.29289 19.7937C4.48043 19.9812 4.73478 20.0865 5 20.0865H9C9.26522 20.0865 9.51957 19.9812 9.70711 19.7937C9.89464 19.6061 10 19.3518 10 19.0865V16.0865C10 15.8213 10.1054 15.567 10.2929 15.3794C10.4804 15.1919 10.7348 15.0865 11 15.0865H13C13.2652 15.0865 13.5196 15.1919 13.7071 15.3794C13.8946 15.567 14 15.8213 14 16.0865V19.0865C14 19.3518 14.1054 19.6061 14.2929 19.7937C14.4804 19.9812 14.7348 20.0865 15 20.0865H19C19.2652 20.0865 19.5196 19.9812 19.7071 19.7937C19.8946 19.6061 20 19.3518 20 19.0865Z"
                    stroke="var(--main-dark)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p style={{ color: "inherit", fontWeight: "600" }}>Home</p>
              </div>
            </NavLink>
          </p>
          <p>
            <NavLink to="/a-transactions">
              <div className="toggle-btn">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_642_7271)">
                    <path
                      d="M19.7782 7.13682H4.22183M4.22183 7.13682L7.05025 4.30839M4.22183 7.13682L7.05025 9.96524M16.9497 14.2079L19.7782 17.0363M19.7782 17.0363L16.9497 19.8647M19.7782 17.0363H4.22183"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_642_7271">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.0865479)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p style={{ color: "inherit", fontWeight: "600" }}>
                  Transactions
                </p>
              </div>
            </NavLink>
          </p>{" "}
          <p>
            <NavLink to="/a-booking">
              <div className="toggle-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.999 0.836548C6.19791 0.836548 6.38868 0.915566 6.52933 1.05622C6.66998 1.19687 6.749 1.38764 6.749 1.58655V2.34955C7.411 2.33655 8.14 2.33655 8.942 2.33655H13.055C13.858 2.33655 14.587 2.33655 15.249 2.34955V1.58655C15.249 1.38764 15.328 1.19687 15.4687 1.05622C15.6093 0.915566 15.8001 0.836548 15.999 0.836548C16.1979 0.836548 16.3887 0.915566 16.5293 1.05622C16.67 1.19687 16.749 1.38764 16.749 1.58655V2.41355C17.009 2.43355 17.255 2.45855 17.488 2.48955C18.66 2.64755 19.609 2.97955 20.358 3.72755C21.106 4.47655 21.438 5.42555 21.596 6.59755C21.749 7.73755 21.749 9.19255 21.749 11.0305V13.1425C21.749 14.9805 21.749 16.4365 21.596 17.5755C21.438 18.7475 21.106 19.6965 20.358 20.4455C19.609 21.1935 18.66 21.5255 17.488 21.6835C16.348 21.8365 14.893 21.8365 13.055 21.8365H8.944C7.106 21.8365 5.65 21.8365 4.511 21.6835C3.339 21.5255 2.39 21.1935 1.641 20.4455C0.893 19.6965 0.561 18.7475 0.403 17.5755C0.25 16.4355 0.25 14.9805 0.25 13.1425V11.0305C0.25 9.19255 0.25 7.73655 0.403 6.59755C0.561 5.42555 0.893 4.47655 1.641 3.72755C2.39 2.97955 3.339 2.64755 4.511 2.48955C4.744 2.45855 4.991 2.43355 5.25 2.41355V1.58655C5.25 1.38781 5.32888 1.19719 5.46932 1.05657C5.60975 0.915947 5.80026 0.836813 5.999 0.836548ZM4.709 3.97655C3.704 4.11155 3.124 4.36555 2.701 4.78855C2.278 5.21155 2.024 5.79155 1.889 6.79755C1.866 6.96755 1.847 7.14755 1.831 7.33655H20.167C20.151 7.14655 20.132 6.96755 20.109 6.79655C19.974 5.79155 19.72 5.21155 19.297 4.78855C18.874 4.36555 18.294 4.11155 17.288 3.97655C16.261 3.83855 14.906 3.83655 12.999 3.83655H8.999C7.092 3.83655 5.738 3.83855 4.709 3.97655ZM1.749 11.0865C1.749 10.2325 1.749 9.48955 1.762 8.83655H20.236C20.249 9.48955 20.249 10.2325 20.249 11.0865V13.0865C20.249 14.9935 20.247 16.3485 20.109 17.3765C19.974 18.3815 19.72 18.9615 19.297 19.3845C18.874 19.8075 18.294 20.0615 17.288 20.1965C16.261 20.3345 14.906 20.3365 12.999 20.3365H8.999C7.092 20.3365 5.738 20.3345 4.709 20.1965C3.704 20.0615 3.124 19.8075 2.701 19.3845C2.278 18.9615 2.024 18.3815 1.889 17.3755C1.751 16.3485 1.749 14.9935 1.749 13.0865V11.0865Z"
                    fill="white"
                  />
                </svg>

                <p style={{ color: "inherit", fontWeight: "600" }}>
                  Recent Bookings
                </p>
              </div>
            </NavLink>
          </p>{" "}
          <p>
            <NavLink to="/a-manager">
              <div className="toggle-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 20.9754C19 21.5888 18.5211 22.0865 17.9286 22.0865C17.3361 22.0865 16.8571 21.5888 16.8571 20.9754C16.8571 17.9121 14.4539 15.4199 11.5 15.4199C8.54607 15.4199 6.14286 17.9121 6.14286 20.9754C6.14286 21.5888 5.66393 22.0865 5.07143 22.0865C4.47893 22.0865 4 21.5888 4 20.9754C4 16.6865 7.36536 13.1977 11.5 13.1977C15.6346 13.1977 19 16.6865 19 20.9754ZM11.5 4.30877C12.6818 4.30877 13.6429 5.30544 13.6429 6.53099C13.6429 7.75655 12.6818 8.75321 11.5 8.75321C10.3182 8.75321 9.35714 7.75655 9.35714 6.53099C9.35714 5.30544 10.3182 4.30877 11.5 4.30877ZM11.5 10.9754C13.8636 10.9754 15.7857 8.9821 15.7857 6.53099C15.7857 4.07988 13.8636 2.08655 11.5 2.08655C9.13643 2.08655 7.21429 4.07988 7.21429 6.53099C7.21429 8.9821 9.13643 10.9754 11.5 10.9754Z"
                    fill="white"
                  />
                </svg>

                <p style={{ color: "inherit", fontWeight: "600" }}>Profile</p>
              </div>
            </NavLink>
          </p>
          <div onClick={open}>
      <p style={{color:"white",position:"absolute",bottom:"10px",left:"5vw"}}><span style={{marginRight:"4px"}}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5L12.6 6.4L14.2 8H6V10H14.2L12.6 11.6L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="white"/>
</svg>
</span>Logout</p>
</div>
        </div>
      </main>
      
    
    </>
  );
};

export default Sidenav;
