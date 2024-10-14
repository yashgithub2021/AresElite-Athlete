import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AtheProfileLayout from "../../components/layout/AtheProfileLayout";
import { Input } from "@mantine/core";
import { Select } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../features/apiCall";
import { useDisclosure } from "@mantine/hooks";
import { LoadingOverlay, Button, Group, Box } from "@mantine/core";

const EditProfile = () => {
  const user = useSelector((state) => state.auth);
  const { isFetching } = useSelector((state) => state.auth);
  console.log(user);
  const [value, setValue] = useState(new Date(user?.dob));
  const dispatch = useDispatch();
  const [visible, { toggle }] = useDisclosure(true);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: user?.userName,
    lastName: user?.lastname,
    city: user?.city,
    state: user?.state,
    // dob: user?.dob,
    email: user?.userEmail,
    phone: user?.phone,
    address: user?.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to handle profile updates
    // You can make a fetch or axios call here to send the updated data
    // to your backend.

    console.log("Form data submitted:", formData);
    const bool = await UpdateProfile(dispatch, formData);
    if (bool) {
      navigate("/");
    }
    // Add your API call logic here
  };
  return (
    <AtheProfileLayout>
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <LoadingOverlay
          visible={isFetching}
          loaderProps={{ children: "Loading..." }}
        />
        <div className="d-flex ">
          <NavLink to="/a-manager">
            <div className="d-flex gap-3 mb-4">
              <button
                className="modal-close "
                style={{ background: "#1C1C1C0D" }}
              >
                <i
                  class="fa-solid fa-arrow-left"
                  style={{ color: "black" }}
                ></i>
              </button>
              <p className="profile-header">Edit</p>
            </div>
          </NavLink>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.userName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.lastname}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.userEmail}
              disabled
            />
          </div>
        </div>
        <div className="form-row">
          {/* <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Date of birth</label>
          <DateInput
            value={value}
            name="dob"
            defaultValue={user?.dob}
            variant="filled"
            onChange={(e)=>{ setValue(e);setFormData((prevData) => ({
              ...prevData,
              ["dob"]: e,
            }))}}
            rightSection={<i class="fa-solid fa-calendar"></i>}
            placeholder="Choose your date of birth"
          />
        </div> */}
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Phone Number</label>
            <div className="d-flex " style={{ width: "100%" }}>
              <select className="select">
                <option>+91</option>
              </select>
              <Input
                variant="filled"
                placeholder="Phone Number"
                style={{ width: "100%" }}
                defaultValue={user?.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Address </label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputEmail4">City</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.city}
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">State</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.state}
              name="state"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Zip Code</label>
            <Input
              variant="filled"
              placeholder="Input component"
              defaultValue={user?.zip}
              name="zip"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div
            style={{
              display: "flex",
              minWidth: "100%",
              gap: "0.5rem",
              marginTop: "2px",
            }}
          >
            <button
              className="signup-button"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Save
            </button>
            <button
              className="grey-button "
              onClick={() => {
                navigate("/a-manager");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </AtheProfileLayout>
  );
};

export default EditProfile;
