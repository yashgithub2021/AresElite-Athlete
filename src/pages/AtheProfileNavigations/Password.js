import React, { useState } from "react";
import { Container, Row } from "react-bootstrap"; // Fix import here
import AtheProfileLayout from "../../components/layout/AtheProfileLayout";

const Password = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <AtheProfileLayout>
      <h4 className="m-2 grey mb-4">Password & Security</h4>
      <Container className="profile-password">
        <Row className="">
          <div className="profile-password-cont1">
            <p className="m-0">Change Password</p>
            <span className="text-grey" style={{ fontSize: "13px" }}>
              Change password to log in to your account.
            </span>
          </div>
        </Row>
        {/* <Row>
          <div className="d-flex justify-content-between">
            <div>
              <p className="m-0">2-step verification</p>
              <span className="text-grey" style={{ fontSize: "13px" }}>
                Add an additional layer of security to your account during
                login.
              </span>
            </div>
            <Form>
              <Form.Check
                type="switch"
                id="toggle-switch"
                label=""
                checked={isChecked}
                onChange={handleToggle}
              />
            </Form>
          </div>
        </Row> */}
      </Container>
    </AtheProfileLayout>
  );
};

export default Password;
