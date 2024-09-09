import React, { useEffect, useState } from "react";
import { Avatar } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { GetProfileDetails, ResetPassword, UpdateProfilePic } from "../../../features/apiCall";
import { logOut } from "../../../features/authSlice";
import { Spinner } from "react-bootstrap";
const ProfileCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, { toggle }] = useDisclosure(false);
  const [confirm, setConfirm] = useState(false);
  const CloseModal = async () => {

    close();
    setConfirm(false);
  };
  const [isUploading, setIsUploading] = useState(false);

  const { userName, userEmail, phone } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [newPassword, setnewPassword] = useState("")
  const [confirmPassword, setConfirmpass] = useState("")
  const email = useSelector((state) => state.auth.userEmail)
  const handleChangePassword = async () => {

    await ResetPassword(dispatch, { email, newPassword, confirmPassword })
    close();
    setConfirm(false);
  }
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchProfileDetails = async () => {
      const data = await GetProfileDetails(dispatch);
      console.log("Dataaa", data.athlete.profilePic)
      if (data && data.athlete.profilePic) {
        setImage(data.athlete.profilePic);
      }
      console.log("No data")
    };
    fetchProfileDetails();
  }, [dispatch]);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("profilePic", file);

      try {
        const result = await UpdateProfilePic(dispatch, { formData, userId: userEmail });

        if (result) {
          setImage(result.profilePicUrl);
          localStorage.setItem("profilePic", result.profilePicUrl);
          // toast.success("Profile picture updated successfully", successToastOptions);
        } else {
          // toast.error("Failed to upload image", ErrorToastOptions);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        // toast.error("An error occurred while uploading the image", ErrorToastOptions);
      } finally {
        setIsUploading(false);
      }
    }
  };
  return (
    <>
      {!confirm ? (
        <Modal.Root opened={opened} onClose={close} centered={true}>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Body>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontSize: "19px" }}>Change Password?</h4>
                <p style={{ color: "#8C90AA" }}>
                  Are you sure that you want Change password
                </p>
                <div
                  style={{
                    display: "flex",
                    minWidth: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="signup-button"
                    onClick={() => {
                      setConfirm(true);
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
      ) : (
        <Modal.Root
          opened={opened}
          onClose={close}
          transitionProps={{
            transition: "fade",
            duration: 600,
            timingFunction: "linear",
          }}
          centered={true}
        >
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>
                <div className=" gap-3 mb-4">
                  <button
                    className="modal-close "
                    style={{ background: "#1C1C1C0D" }}
                    onClick={CloseModal}
                  >
                    <i
                      class="fa-solid fa-arrow-left"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                  <p className="profile-header mt-3">Change Password</p>
                  <p className="sub-text">
                    Set your New Password So you can access your data
                  </p>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack>
                <PasswordInput
                  label="Password"

                  visible={visible}
                  variant="filled"
                  visibilityToggleIcon={({ reveal }) =>
                    reveal ? (
                      <i class="fa-solid fa-eye"></i>
                    ) : (
                      <i class="fa-solid fa-eye-slash"></i>
                    )
                  }
                  onChange={(e) => { setnewPassword(e.target.value) }}
                />
                <PasswordInput
                  label="Confirm password"

                  visible={visible}
                  variant="filled"
                  onVisibilityChange={toggle}
                  onChange={(e) => { setConfirmpass(e.target.value) }}
                />
              </Stack>
              <div className="mt-3 ">
                <div className="signup-button" onClick={handleChangePassword}>
                  Confirm
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}

      <div
        style={{ background: "white", padding: "30px", borderRadius: "16px" }}
      >
        <div style={{ padding: "0px 20px" }}>
          <p className="profile-header" style={{ marginRight: "30px" }}>Profile</p>
        </div>

        <div className="profile-card">
          <div className="profile-picture-container" style={{ marginRight: '20px', position: 'relative' }}>
            {isUploading ? (
              <div className="upload-spinner">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <>
                <img src={image} alt="Profile" className="profile-picture" />
                <label className="camera-icon">
                  <i className="fa-solid fa-camera" style={{ color: '#7257ff' }} />
                  <input type="file" accept="image/*" onChange={handleImageChange} disabled={isUploading} />
                </label>
              </>
            )}
          </div>
          <div className="d-flex flex-column  justify-content-center text-left ">
            <h5>{userName}</h5>
            <div>
              <p className="sub-text">{userEmail}</p>
              <p className="sub-text" style={{ marginTop: "-16px" }}>
                {phone}
              </p>
            </div>
          </div>
        </div>
        <NavLink to="/a-profile">
          <div className="nav-links">
            <div className="cont">
              <p className="header">Edit</p>
              <p className="sub-text" style={{ marginTop: "-15px" }}>
                you can edit you all information from here
              </p>
            </div>

            <div>
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
                  d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1944 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                  fill="#060024"
                />
              </svg>
            </div>
          </div>
        </NavLink>

        <div className="nav-links" onClick={open}>
          <div className="cont">
            <p className="header">Change Password</p>
            <p className="sub-text" style={{ marginTop: "-15px" }}>
              you can Change your password from here
            </p>
          </div>
          <div>
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
                d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1944 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                fill="#060024"
              />
            </svg>
          </div>
        </div>
        <NavLink to="/terms-of-use">
          <div className="nav-links">
            <div className="cont">
              <p className="header">Term Of Use</p>
            </div>
            <div>
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
                  d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1944 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                  fill="#060024"
                />
              </svg>
            </div>
          </div>
        </NavLink>
        <NavLink to="/privacy-policy">
          <div className="nav-links">
            <div className="cont">
              <p className="header">Privacy Policy</p>
            </div>
            <div>
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
                  d="M8.48951 18.5303C8.17016 18.2374 8.17016 17.7626 8.48951 17.4697L13.875 12.5303C14.1944 12.2374 14.1944 11.7626 13.875 11.4697L8.48951 6.53033C8.17016 6.23744 8.17016 5.76256 8.48951 5.46967C8.80886 5.17678 9.32663 5.17678 9.64598 5.46967L15.0315 10.409C15.9895 11.2877 15.9895 12.7123 15.0315 13.591L9.64598 18.5303C9.32663 18.8232 8.80886 18.8232 8.48951 18.5303Z"
                  fill="#060024"
                />
              </svg>
            </div>
          </div>
        </NavLink>
        <NavLink to="/signin">
          <div className="nav-links" style={{ background: "transparent" }}>
            <div className="cont" onClick={handleLogout}>
              <p className="header" style={{ color: "red" }}>
                {" "}
                <span style={{ marginRight: "4px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5L12.6 6.4L14.2 8H6V10H14.2L12.6 11.6L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z"
                      fill="#FF2222"
                    />
                  </svg>
                </span>
                Logout
              </p>
            </div>
            <div></div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProfileCard;
