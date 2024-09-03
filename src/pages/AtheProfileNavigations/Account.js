import React, { useState } from "react";
import { Container, Row } from "react-bootstrap"; // Fix import here
import AtheProfileLayout from "../../components/layout/AtheProfileLayout";

const Account = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <AtheProfileLayout>
      <h4 className="m-2 grey mb-4">Account </h4>
      <Container className="profile-password">
        <Row>
          <div className="profile-password-cont1">
            <p className="m-0">Log out</p>
            <span className="text-grey" style={{ fontSize: "13px" }}>
              Log out from this device
            </span>
          </div>
        </Row>
        <Row>
          <div className="">
            <p className="m-0">Delete my account</p>
            <span className="text-grey" style={{ fontSize: "13px" }}>
              Permanently delete the account and remove access from all devices.
            </span>
          </div>
        </Row>
      </Container>
    </AtheProfileLayout>
  );
};

export default Account;
